import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";

export async function loader(args: LoaderArgs) {
  const acupuntura = {
    title: "Fisioterapia",
    body: "Identificar e melhorar a qualidade de vida e o potencial movimento de cada pessoa. Este é um dos principais objetivos da Fisioterapia que é, segundo a Confederação Mundial de Fisioterapia, uma profissão da área da saúde habilitada para promover, desenvolver, manter e reabilitar as capacidades de movimento e funcionalidade do indivíduo ao longo da sua vida",
    cover: "/assets/fisio-home.jpg",
    link: "/servicos/fisioterapia",
  };
  const mtc = {
    title: "Acupuntura & Medicina Chinesa",
    body: "A Acupuntura é uma ferramenta milenar da Medicina Chinesa, que busca o equilíbrio e a harmonia energética interna do corpo e dele com o ambiente, tendo sempre como objetivo melhorar o seu funcionamento como um todo. Através da aplicação de agulhas em pontos específicos do corpo são estimuladas terminações nervosas existentes na pele e em outros tecidos, enviando assim uma mensagem ao cérebro, provocando vários efeitos no corpo, como ação analgésica ou anti-inflamatória, por exemplo. Deste modo, tratando diversas doenças e promovendo a saúde do indivíduo.",
    cover: "/assets/acupuntura-home.jpg",
    link: "/servicos/medicina-chinesa",
  };
  const services = [acupuntura, mtc];
  return json({ services });
}

export default function BlogList() {
  const { services } = useLoaderData<typeof loader>();
  return (
    <div className="space-y-8">
      {services.map(({ title, body, link, cover }) => (
        <div className="bg-green-50 p-8 flex items-start lg:flex-row flex-col">
          <img className="w-full lg:w-40 mr-8 object-contain" src={cover} />
          <div className="mt-8 lg:mt-0">
            <Link className="text-pink" to={link}>
              <h2 className="font-semibold text-4xl">{title}</h2>
            </Link>
            <p className="pt-4 text-gray-600 text-justify">{body}</p>
            <Link className="block mt-4 font-semibold" to={link}>
              veja mais...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
