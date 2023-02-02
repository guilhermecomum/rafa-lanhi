import { useCallback, useEffect, useMemo, useRef } from "react";
import isHotkey from "is-hotkey";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import {
  Transforms,
  createEditor,
  Node,
  Element as SlateElement,
  Descendant,
  Editor,
} from "slate";
import { withHistory } from "slate-history";
import { match } from "ts-pattern";
import { cx } from "~/utils";
import { Icon, Button } from "./editor/components";
import { useFetcher } from "@remix-run/react";

type TitleElement = { type: "title"; children: Descendant[] };

type ParagraphElement = {
  type: "paragraph";
  align?: string;
  children: Descendant[];
};

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const LIST_TYPES = ["numbered-list", "bulleted-list"];

const Element = ({ attributes, children, element }) => {
  const textAlign = match(element.align)
    .with("center", () => "text-center")
    .with("left", () => "text-left")
    .with("right", () => "text-right")
    .with("justify", () => "text-justify")
    .otherwise(() => "");

  switch (element.type) {
    case "heading-one":
      return (
        <h1
          className={cx(textAlign, "font-semibold text-pink text-4xl")}
          {...attributes}
        >
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2
          className={cx(textAlign, "font-semibold text-pink text-3xl")}
          {...attributes}
        >
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3
          className={cx(textAlign, "font-semibold text-pink text-2xl")}
          {...attributes}
        >
          {children}
        </h3>
      );
    case "paragraph":
      return (
        <p className={cx("pt-4", textAlign)} {...attributes}>
          {children}
        </p>
      );
    case "bulleted-list":
      return (
        <ul className={cx("pl-7 list-disc", textAlign)} {...attributes}>
          {children}
        </ul>
      );
    case "list-item":
      return (
        <li className={cx(textAlign)} {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol className={cx("pl-7 list-decimal", textAlign)} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p className={cx("pt-4", textAlign)} {...attributes}>
          {children}
        </p>
      );
  }
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <span className="font-bold">{children}</span>;
  }

  if (leaf.italic) {
    children = <span className="italic">{children}</span>;
  }

  if (leaf.underline) {
    children = <span className="underline">{children}</span>;
  }

  if (leaf.lineThrough) {
    children = <span className="line-through">{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
};

function EditInPlace({ content, name, readOnly = true, placeholder }) {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const fetcher = useFetcher();
  const ref = useRef();

  const empty = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];
  const initialValue = Object.keys(content).length > 0 ? content : empty;

  return (
    <Slate
      editor={editor}
      value={initialValue || empty}
      onChange={async (value) => {
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        );
        if (isAstChange) {
          // Save the value to Local Storage.
          const data = JSON.stringify({ name, value });

          fetcher.submit(
            { data },
            { method: "post", action: "/cms/save-content" }
          );
          console.log(fetcher.data);
        }
      }}
    >
      {!readOnly && (
        <div className="bg-gray-100  w-full mb-6 flex space-x-3 pl-4 items-center jusitfy-center pt-1 border-b-2">
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="lineThrough" icon="format_strikethrough" />
          <BlockButton format="heading-one" icon="format_h1" />
          <BlockButton format="heading-two" icon="format_h2" />
          <BlockButton format="heading-three" icon="format_h3" />
          <BlockButton format="left" icon="format_align_left" />
          <BlockButton format="center" icon="format_align_center" />
          <BlockButton format="right" icon="format_align_right" />
          <BlockButton format="justify" icon="format_align_justify" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          <div>
            {fetcher.state === "submitting" ? "salvando..." : "last saved.."}
          </div>
        </div>
      )}
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder={placeholder}
        readOnly={readOnly}
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
        spellCheck
        autoFocus
      />
    </Slate>
  );
}

export { EditInPlace };
