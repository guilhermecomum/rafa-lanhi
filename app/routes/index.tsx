import { Fragment } from "react";
import type { LoaderArgs } from "@remix-run/node";
import { Disclosure, Tab } from "@headlessui/react";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  const acupuntura = {
    title: "Fisioterapia",
    body: "Identificar e melhorar a qualidade de vida e o potencial movimento de cada pessoa. Este é um dos principais objetivos da Fisioterapia que é, segundo a Confederação Mundial de Fisioterapia, uma profissão da área da saúde habilitada para promover, desenvolver, manter e reabilitar as capacidades de movimento e funcionalidade do indivíduo ao longo da sua vida",
    cover: "/assets/fisio-home.jpg",
    link: "/servicos/fisioterapia",
  };
  const mtc = {
    title: "Acupuntura & Medicina Chinesa",
    body: "A Acupuntura é uma ferramenta milenar da Medicina Chinesa, que busca o equilíbrio e a harmonia energética interna do corpo e dele com o ambiente, tendo sempre como objetivo melhorar o seu funcionamento como um todo.",
    cover: "/assets/acupuntura-home.jpg",
    link: "/servicos/medicina-chinesa",
  };
  const services = [acupuntura, mtc];
  return json({ services });
}

export default function Index() {
  const { services } = useLoaderData<typeof loader>();

  return (
    <main className="relative lg:flex lg:items-center lg:justify-center flex flex-col">
      <section className="flex flex-col container mx-auto lg:py-10  lg:items-center lg:justify-between lg:space-x-10">
        <div className="w-full px-4">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold text-pink my-4">
            Fisioterapia & Acupuntura
          </h2>
          <p className="pt-4 text-center text-xl">
            Olá, sou <b>Rafaela Lanhi</b> e minha maior satisfação é trazer bem
            estar para as pessoas através das técnicas da medicina chinesa
            somadas a formação em fisioterapia.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row align-center justify-center items-center my-10">
          <div className="lg:w-2/6 w-full p-4">
            <img
              className="object-contain w-full lg:rounded-l-3xl lg:rounded-tr-3xl"
              src="/assets/rafa-home.webp"
            />
          </div>
          <div className="lg:w-2/6 w-full p-4 lg:ml-8">
            <img
              className="object-contain w-full lg:rounded-l-3xl lg:rounded-tr-3xl"
              src="/assets/new-logo.png"
            />
          </div>
        </div>
        <div className="text-center mb-8 mx-2 lg:hidden">
          <a
            href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
            target="_blank"
            className="bg-pink inline-block py-2 w-full lg:w-auto px-4 mt-8 rounded-xl text-white text-xl font-semibold self-center"
          >
            agendar
          </a>
        </div>
      </section>
      <section
        id="blog"
        className="w-full bg-pink lg:bg-white-flower lg:bg-half-center  lg:bg-no-repeat flex flex-col text-white"
      >
        <div className="w-10/12 mx-auto flex flex-col h-full justify-around">
          <div className="flex flex-col space-y-16  pt-16">
            <div className="flex flex-col">
              <a
                className="flex lg:flex-row flex-col justify-center items-center lg:items-start text-center lg:text-left"
                href="/blog/auriculoterapia"
              >
                <img
                  className="w-48 mr-0 lg:mr-10 object-contain"
                  src="/assets/blog/auriculoterapia.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="font-semibold text-2xl">Auriculoterapia</h2>
                  <p className="pt-4 text-justify">
                    Na Medicina Chinesa a orelha apresenta pontos específicos
                    que representam um mapa do corpo inteiro. Desta maneira, a
                    Auriculoterapia é uma ferramenta terapêutica que utiliza
                    estes pontos representativos do corpo para realizar
                    diagnóstico e tratamentos de saúde física e/ou emocional,
                    como dores na coluna, tensões musculares, alergias,
                    ansiedade, enxaqueca, obesidade, distúrbios do sono, entre
                    muitos outros.
                  </p>
                  <p className="text-right mt-6 border rounded inline-block p-2">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col">
              <a
                className="flex lg:flex-row flex-col justify-center items-center lg:items-start text-center lg:text-left"
                href="/blog/ventosaterapia"
              >
                <img
                  className="w-48 mr-0 lg:mr-10 object-contain"
                  src="/assets/blog/liberacaomiofaciall.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="font-semibold text-2xl">
                    Liberação Miofascial
                  </h2>
                  <p className="pt-4 text-justify">
                    A liberação miofascial acontece a partir de técnicas de
                    mobilização, pressão ou manipulação de alguns pontos no
                    corpo com objetivo de liberar a fáscia do músculo. Seu
                    objetivo é basicamente aliviar dores e tensões musculares.
                  </p>
                  <p className="text-right mt-6 border rounded inline-block p-2">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col">
              <a
                className="flex lg:flex-row flex-col justify-center items-center lg:items-start text-center lg:text-left"
                href="/blog/ventosaterapia"
              >
                <img
                  className="w-48 mr-0 lg:mr-10 object-contain"
                  src="/assets/blog/Ventosaterapia.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="font-semibold text-2xl">Ventosaterapia</h2>
                  <p className="pt-4 text-justify">
                    Ventosaterapia é uma técnica da Medicina Chinesa que através
                    da aplicação de ventosas faz um efeito de vácuo na pele. A
                    partir dele aumenta a circulação sanguínea, trazendo como
                    benefícios a melhora da circulação sanguínea local e
                    otimização da oxigenação dos tecidos.
                  </p>

                  <p className="text-right mt-6 border rounded inline-block p-2">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>
          </div>
          <Link
            className="mt-6 text-center border rounded p-2 mt-14 mb-6"
            to="/blog"
          >
            ver todos os posts
          </Link>
        </div>
      </section>
      <section
        id="services"
        className="bg-green-50 lg:bg-pink-flower lg:bg-half lg:bg-no-repeat w-full flex flex-col px-4 py-10"
      >
        <h2 className="text-5xl text-center text-pink mb-4 lg:hidden">
          Serviços
        </h2>
        <div className="lg:hidden flex flex-col items-start space-y-4">
          {services.map(({ title, body, link, cover }, index) => (
            <Disclosure
              key={title}
              defaultOpen={title === services[0].title ? true : false}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-xl flex justify-between p-4 w-full text-white bg-green text-left">
                    {title}
                    <i>⌄</i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <p className="pt-4 text-justify">{body}</p>
                    <Link to={link} className="font-semibold mt-4 block">
                      veja mais...
                    </Link>
                    <div className="text-center mb-8">
                      <a
                        href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="bg-pink inline-block py-2 w-full lg:w-auto px-4 mt-8 rounded-xl text-white text-xl font-semibold self-center"
                      >
                        agendar
                      </a>
                    </div>
                    <img className="my-12 col-start-7 col-span-5" src={cover} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="hidden lg:flex flex-col">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex text-2xl space-x-8 border-green self-center">
              {services.map(({ title }, index) => (
                <Tab as={Fragment} key={index}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? "text-pink lg:p-2 lg:border-2 lg:border-pink"
                          : "text-green-500 lg:p-2 lg:border-2 lg:border-green-500"
                      }
                    >
                      {title}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {services.map(({ title, body, link, cover }, index) => (
                <Tab.Panel>
                  <div className="lg:w-4/6 lg:flex mx-auto">
                    <div className="mt-12 w-4/6">
                      <h2 className="text-4xl text-pink">{title}</h2>
                      <p className="pt-4 text-justify">{body}</p>
                      <Link to={link} className="font-semibold mt-4 block">
                        veja mais...
                      </Link>
                      <div className="text-center mb-8">
                        <a
                          href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
                          target="_blank"
                          className="bg-pink inline-block py-2 w-full lg:w-auto px-4 mt-8 rounded-xl text-white text-xl font-semibold self-center"
                        >
                          agendar
                        </a>
                      </div>
                    </div>
                    <img
                      className="my-12 ml-20 w-2/6 rounded-tl-3xl rounded-r-3xl object-contain"
                      src={cover}
                    />
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </main>
  );
}
