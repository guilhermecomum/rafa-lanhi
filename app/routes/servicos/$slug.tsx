import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  const { slug } = args.params as { slug: string };
  return json({ slug });
}

export default function Post() {
  const { slug } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="lg:bg-green-50 lg:p-8 text-gray-600">
        <h2 className="font-semibold text-pink text-4xl">{`My blog post ${slug}`}</h2>
        <p className="pt-4">
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
          fazendo pose.Detraxit consequat et quo num tendi nada.Paisis, filhis,
          espiritis santis.
        </p>
        <p className="pt-4">
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
          fazendo pose.Detraxit consequat et quo num tendi nada.Paisis, filhis,
          espiritis santis.
        </p>
        <p className="pt-4">
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
          fazendo pose.Detraxit consequat et quo num tendi nada.Paisis, filhis,
          espiritis santis.
        </p>
      </div>
    </div>
  );
}
