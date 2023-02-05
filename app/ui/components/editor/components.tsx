import React, { Ref, PropsWithChildren } from "react";
import { cx } from "~/utils";
import { Transforms, Element as SlateElement, Editor } from "slate";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const LIST_TYPES = ["numbered-list", "bulleted-list"];

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

const isIndentActive = (editor) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && SlateElement.isElement(n) && n["indent"],
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

const toggleIndent = (editor) => {
  const isActive = isIndentActive(editor);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n["indent"],
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  newProperties = {
    indent: isActive ? false : true,
  };
  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive) {
    const block = { type: "paragraph", children: [] };
    Transforms.wrapNodes(editor, block);
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

const Icon = React.forwardRef(
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

const Button = React.forwardRef(
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

const BlockButton = ({ editor, format, icon }) => {
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

const IndentButton = ({ editor, icon }) => {
  return (
    <Button
      active={isIndentActive(editor)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleIndent(editor);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const MarkButton = ({ editor, format, icon }) => {
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

export { Icon, Button, Leaf, MarkButton, BlockButton, IndentButton };
