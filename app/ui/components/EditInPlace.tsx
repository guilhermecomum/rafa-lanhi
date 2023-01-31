import React, { useCallback, useMemo, Ref, PropsWithChildren } from "react";
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

const withLayout = (editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length <= 1 && Editor.string(editor, [0, 0]) === "") {
        const title: TitleElement = {
          type: "title",
          children: [{ text: "Untitled" }],
        };
        Transforms.insertNodes(editor, title, {
          at: path.concat(0),
          select: true,
        });
      }

      if (editor.children.length < 2) {
        const paragraph: ParagraphElement = {
          type: "paragraph",
          children: [{ text: "" }],
        };
        Transforms.insertNodes(editor, paragraph, { at: path.concat(1) });
      }

      for (const [child, childPath] of Node.children(editor, path)) {
        let type: string;
        const slateIndex = childPath[0];
        const enforceType = (type) => {
          if (SlateElement.isElement(child) && child.type !== type) {
            const newProperties: Partial<SlateElement> = { type };
            Transforms.setNodes<SlateElement>(editor, newProperties, {
              at: childPath,
            });
          }
        };

        switch (slateIndex) {
          case 0:
            type = "title";
            enforceType(type);
            break;
          case 1:
            type = "paragraph";
            enforceType(type);
          default:
            break;
        }
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

const Element = ({ attributes, children, element }) => {
  const textAlign = match(element.align)
    .with("center", () => "text-center")
    .with("left", () => "text-left")
    .with("right", () => "text-right")
    .with("justify", () => "text-justify")
    .otherwise(() => "");

  switch (element.type) {
    case "title":
      return (
        <h2
          className="font-semibold text-pink text-center text-4xl"
          {...attributes}
        >
          {children}
        </h2>
      );
    case "paragraph":
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

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;
// export const Button = React.forwardRef(
//   (
//     {
//       className,
//       active,
//       reversed,
//       ...props
//     }: PropsWithChildren<
//       {
//         active: boolean;
//         reversed: boolean;
//       } & BaseProps
//     >,
//     ref: Ref<OrNull<HTMLSpanElement>>
//   ) => (
//     <button
//       {...props}
//       ref={ref}
//       className={cx(
//         className,
//         `cursor-pointer ${
//           reversed
//             ? active
//               ? "bg-white"
//               : "bg-black"
//             : active
//             ? "bg-gray-400"
//             : "bg-gray"
//         }`
//       )}
//     />
//   )
// );

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        `cursor-pointer flex justify-center items-center ${
          reversed
            ? active
              ? "text-white"
              : "text-black"
            : active
            ? "text-gray"
            : "text-gray-400"
        }`
      )}
    />
  )
);

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

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx("font-icon text-2xl material-symbols-outlined", className)}
    />
  )
);

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

function EditInPlace({ initialValue }) {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );
  return (
    <Slate editor={editor} value={initialValue}>
      <div className="bg-gray-100  w-full mb-6 flex space-x-3 pl-4 items-center jusitfy-center pt-1 border-b-2">
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="lineThrough" icon="format_strikethrough" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter a title…"
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

export { EditInPlace };
