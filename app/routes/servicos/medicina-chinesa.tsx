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
        <h2 className="font-semibold text-pink text-4xl">
          Acupuntura & Medicina Chinesa
        </h2>
        <img
          className="mt-8 object-contain"
          src="/assets/acupuntura-home.jpg"
        />

        <p className="pt-4 indent-6 text-justify">
          A Acupuntura é uma ferramenta milenar da Medicina Chinesa, que busca o
          equilíbrio e a harmonia energética interna do corpo e dele com o
          ambiente, tendo sempre como objetivo melhorar o seu funcionamento como
          um todo.
        </p>

        <p className="pt-4 indent-6 text-justify">
          Através da aplicação de agulhas em pontos específicos do corpo são
          estimuladas terminações nervosas existentes na pele e em outros
          tecidos, enviando assim uma mensagem ao cérebro, provocando vários
          efeitos no corpo, como ação analgésica ou anti-inflamatória, por
          exemplo. Deste modo, tratando diversas doenças e promovendo a saúde do
          indivíduo.{" "}
        </p>

        <p className="pt-4 indent-6 text-justify">
          Assim, a acupuntura pode ser um grande aliado para tratamentos de
          quadros de dores articulares, dores nas costas, tensões musculares,
          processos inflamatórios, quadros emocionais como ansiedade e estresse,
          ainda gastrites, constipação, insônia, problemas de pele, problemas
          pulmonares, problemas alérgicos entre muitos outros.{" "}
        </p>

        <p className="pt-4 indent-6 text-justify">
          Buscar a harmonia e equilibrio do corpo, gerando bem estar no dia a
          dia. Esta é minha proposta em cada atendimento. Este é meu convite
          para aqueles que buscam ajuda e desejam uma vida melhor.{" "}
        </p>
      </div>
    </div>
  );
}
