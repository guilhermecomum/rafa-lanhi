import { useCallback, useRef, useState } from "react";
import isHotkey from "is-hotkey";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { match } from "ts-pattern";
import { cx } from "~/utils";
import {
  MarkButton,
  BlockButton,
  IndentButton,
  Leaf,
} from "./editor/components";
import { useFetcher } from "@remix-run/react";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
};

const Element = ({ attributes, children, element }) => {
  const textAlign = match(element.align)
    .with("center", () => "text-center")
    .with("left", () => "text-left")
    .with("right", () => "text-right")
    .with("justify", () => "text-justify")
    .otherwise(() => "");

  const indent = element.indent ? "indent-6" : "";

  switch (element.type) {
    case "heading-one":
      return (
        <h1
          className={cx(textAlign, indent, "font-semibold text-pink text-4xl")}
          {...attributes}
        >
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2
          className={cx(textAlign, indent, "font-semibold text-pink text-3xl")}
          {...attributes}
        >
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3
          className={cx(textAlign, indent, "font-semibold text-pink text-2xl")}
          {...attributes}
        >
          {children}
        </h3>
      );
    case "paragraph":
      return (
        <p className={cx("pt-4", textAlign, indent)} {...attributes}>
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
        <p className={cx("pt-4", textAlign, indent)} {...attributes}>
          {children}
        </p>
      );
  }
};

function EditInPlace({ content, name, readOnly = true, placeholder }) {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const [editor] = useState(() => withHistory(withReact(createEditor())));
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
          <MarkButton editor={editor} format="bold" icon="format_bold" />
          <MarkButton editor={editor} format="italic" icon="format_italic" />
          <MarkButton
            editor={editor}
            format="underline"
            icon="format_underlined"
          />
          <MarkButton
            editor={editor}
            format="lineThrough"
            icon="format_strikethrough"
          />
          <IndentButton editor={editor} icon="format_indent_increase" />
          <BlockButton editor={editor} format="heading-one" icon="format_h1" />
          <BlockButton editor={editor} format="heading-two" icon="format_h2" />
          <BlockButton
            editor={editor}
            format="heading-three"
            icon="format_h3"
          />
          <BlockButton editor={editor} format="left" icon="format_align_left" />
          <BlockButton
            editor={editor}
            format="center"
            icon="format_align_center"
          />
          <BlockButton
            editor={editor}
            format="right"
            icon="format_align_right"
          />
          <BlockButton
            editor={editor}
            format="justify"
            icon="format_align_justify"
          />
          <BlockButton
            editor={editor}
            format="numbered-list"
            icon="format_list_numbered"
          />
          <BlockButton
            editor={editor}
            format="bulleted-list"
            icon="format_list_bulleted"
          />
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
