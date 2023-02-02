import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { EditInPlace } from "~/ui/components/EditInPlace";
import { getContentByName } from "~/domains/cms.server";
import { fromSuccess } from "domain-functions";

export async function loader(args: LoaderArgs) {
  const { body } = await fromSuccess(getContentByName)({ name: "sobre" });

  return json({ body });
}

export default function Sobre() {
  const { body } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-8/12 lg:mx-auto px-4 my-4 lg:my-10 text-gray-600 text-lg items-start">
      <img
        className="object-contain w-full lg:w-2/6 lg:mt-16 mr-10 lg:rounded-l-3xl lg:rounded-tr-3xl"
        src="/assets/sobre.jpg"
      />
      <div className="mt-8 lg:m-0 lg:w-4/6">
        <EditInPlace
          content={body}
          name="sobre"
          readOnly={true}
          placeholder=""
        />
      </div>
    </div>
  );
}
