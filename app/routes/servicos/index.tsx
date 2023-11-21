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
        <div className="flex flex-col items-start bg-green-50 p-8 lg:flex-row">
          <Link className="mr-8 w-full  shrink-0 lg:w-40" to={link}>
            <img className="mr-8 w-full object-contain lg:w-40" src={cover} />
          </Link>
          <div className="mt-8 lg:mt-0">
            <Link className="text-pink" to={link}>
              <h2 className="text-4xl font-semibold">{title}</h2>
            </Link>
            <p className="pt-4 text-justify text-gray-600">{body}</p>
            <Link className="mt-4 block font-semibold" to={link}>
              veja mais...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
