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
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import { cx } from "~/utils";
import { match } from "ts-pattern";

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
  const style = match(element.align)
    .with("center", () => "text-center")
    .with("left", () => "text-left")
    .with("right", () => "indent-6")
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
        <p className={cx("pt-4", style)} {...attributes}>
          {children}
        </p>
      );
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

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
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

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;
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
    <button
      {...props}
      ref={ref}
      className={cx(
        className,
        `cursor-pointer ${
          reversed
            ? active
              ? "bg-white"
              : "bg-black"
            : active
            ? "bg-gray-400"
            : "bg-gray"
        }`
      )}
    />
  )
);

const BlockButton = ({ format, children }) => {
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
      {children}
    </Button>
  );
};

const MarkButton = ({ format, children }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {children}
    </Button>
  );
};

export default function Sobre({ props }) {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withLayout(withHistory(withReact(createEditor()))),
    []
  );

  const initialValue: Descendant[] = [
    {
      type: "title",
      children: [{ text: "Sobre" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Olá, sou Rafaela Lanhi, fisioterapeuta e acupunturista, e minha maior satisfação é trazer bem estar para as pessoas através das técnicas da medicina chinesa somadas a formação em fisioterapia.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Graduada há quase 15 anos em fisioterapia, fiz esta escolha profissional para desenvolver um trabalho onde estivesse atendendo e ajudando pessoas. Logo no início da graduação já me apaixonei pela minha opção e fui percebendo muita afinidade por qualquer área da saúde que considerasse o ser humano como um todo (sobre seus aspectos físicos, mentais e o todo ao seu redor).",
        },
      ],
    },
  ];

  return (
    <Slate editor={editor} value={initialValue}>
      <div className="flex flex-col lg:flex-row w-full lg:w-8/12 lg:mx-auto px-4 my-4 lg:my-10 text-gray-600 text-lg items-start">
        <img
          className="object-contain w-full lg:w-2/6 lg:mt-16 mr-10 lg:rounded-l-3xl lg:rounded-tr-3xl"
          src="/assets/sobre.jpg"
        />
        <div className="mt-8 lg:m-0 lg:w-4/6">
          <div className="bg-gray-100 h-10 w-full mb-6 flex space-x-3 pl-8">
            <MarkButton format="bold">
              <BeakerIcon className="h-6 w-6 text-gray-300" />
            </MarkButton>
            <BlockButton format="left">
              <Bars3BottomLeftIcon className="h-6 w-6 text-gray-300" />
            </BlockButton>

            <BlockButton format="justify">
              <Bars3Icon className="h-6 w-6 text-gray-300" />
            </BlockButton>
            <BlockButton format="center">
              <Bars3CenterLeftIcon className="h-6 w-6 text-gray-300" />
            </BlockButton>
            <BlockButton format="right">
              <Bars3BottomRightIcon className="h-6 w-6 text-gray-300" />
            </BlockButton>
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

        </div>
      </div>
    </Slate>
  );
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <span className="font-bold">{children}</span>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
