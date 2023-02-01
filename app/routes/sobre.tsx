import { EditInPlace } from "~/ui/components/EditInPlace";

export default function Sobre() {
  const initialValue = [
    {
      type: "heading-one",
      children: [{ text: "Título" }],
    },
    {
      type: "paragraph",
      children: [
        {
          text: "Primeiro parágrafo",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-8/12 lg:mx-auto px-4 my-4 lg:my-10 text-gray-600 text-lg items-start">
      <img
        className="object-contain w-full lg:w-2/6 lg:mt-16 mr-10 lg:rounded-l-3xl lg:rounded-tr-3xl"
        src="/assets/sobre.jpg"
      />
      <div className="mt-8 lg:m-0 lg:w-4/6">
        <EditInPlace initialValue={initialValue} />
      </div>
    </div>
  );
}
