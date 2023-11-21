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
    <main className="relative flex flex-col lg:flex lg:items-center lg:justify-center">
      <section className="container mx-auto flex flex-col lg:items-center  lg:justify-between lg:space-x-10 lg:py-10">
        <div className="w-full px-4">
          <h2 className="my-4 text-center text-2xl font-semibold text-pink lg:text-3xl">
            Fisioterapia & Acupuntura
          </h2>
          <p className="pt-4 text-center text-xl lg:text-lg">
            Olá, sou <b>Rafaela Lanhi</b> e minha maior satisfação é trazer bem
            estar para as pessoas através das técnicas da medicina chinesa
            somadas a formação em fisioterapia.
          </p>
        </div>
        <div className="align-center my-10 flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full p-4 lg:w-2/6">
            <img
              className="w-full object-contain lg:rounded-l-3xl lg:rounded-tr-3xl"
              src="/assets/rafa-home.webp"
            />
          </div>
          <div className="w-full p-4 lg:ml-8 lg:w-2/6">
            <img
              className="w-full object-contain lg:rounded-l-3xl lg:rounded-tr-3xl"
              src="/assets/new-logo.png"
            />
          </div>
        </div>
        <div className="mx-2 mb-8 text-center lg:hidden">
          <a
            href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
            target="_blank"
            className="mt-8 inline-block w-full self-center rounded-xl bg-pink py-2 px-4 text-xl font-semibold text-white lg:w-auto"
          >
            agendar
          </a>
        </div>
      </section>
      <section
        id="blog"
        className="flex w-full flex-col bg-pink  text-white lg:bg-white-flower lg:bg-half-center lg:bg-no-repeat"
      >
        <div className="mx-auto flex h-full w-10/12 flex-col justify-around">
          <div className="flex flex-col space-y-16  pt-16">
            <div className="flex flex-col">
              <a
                className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:text-left"
                href="/blog/auriculoterapia"
              >
                <img
                  className="mr-0 w-48 object-contain lg:mr-10"
                  src="/assets/blog/auriculoterapia.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="font-semibold lg:text-xl">Auriculoterapia</h2>
                  <p className="pt-4 text-justify lg:text-sm">
                    Na Medicina Chinesa a orelha apresenta pontos específicos
                    que representam um mapa do corpo inteiro. Desta maneira, a
                    Auriculoterapia é uma ferramenta terapêutica que utiliza
                    estes pontos representativos do corpo para realizar
                    diagnóstico e tratamentos de saúde física e/ou emocional,
                    como dores na coluna, tensões musculares, alergias,
                    ansiedade, enxaqueca, obesidade, distúrbios do sono, entre
                    muitos outros.
                  </p>
                  <p className="mt-6 inline-block rounded border p-2 text-right">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col">
              <a
                className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:text-left"
                href="/blog/ventosaterapia"
              >
                <img
                  className="mr-0 w-48 object-contain lg:mr-10"
                  src="/assets/blog/liberacaomiofaciall.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="text-2xl font-semibold lg:text-xl">
                    Liberação Miofascial
                  </h2>
                  <p className="pt-4 text-justify lg:text-sm">
                    A liberação miofascial acontece a partir de técnicas de
                    mobilização, pressão ou manipulação de alguns pontos no
                    corpo com objetivo de liberar a fáscia do músculo. Seu
                    objetivo é basicamente aliviar dores e tensões musculares.
                  </p>
                  <p className="mt-6 inline-block rounded border p-2 text-right">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-col">
              <a
                className="flex flex-col items-center justify-center text-center lg:flex-row lg:items-start lg:text-left"
                href="/blog/ventosaterapia"
              >
                <img
                  className="mr-0 w-48 object-contain lg:mr-10"
                  src="/assets/blog/Ventosaterapia.jpg"
                />
                <div className="mt-4 lg:mt-0">
                  <h2 className="text-2xl font-semibold lg:text-xl">
                    Ventosaterapia
                  </h2>
                  <p className="pt-4 text-justify lg:text-sm">
                    Ventosaterapia é uma técnica da Medicina Chinesa que através
                    da aplicação de ventosas faz um efeito de vácuo na pele. A
                    partir dele aumenta a circulação sanguínea, trazendo como
                    benefícios a melhora da circulação sanguínea local e
                    otimização da oxigenação dos tecidos.
                  </p>

                  <p className="mt-6 inline-block rounded border p-2 text-right">
                    continuar lendo
                  </p>
                </div>
              </a>
            </div>
          </div>
          <Link
            className="mt-6 mt-14 mb-6 rounded border p-2 text-center"
            to="/blog"
          >
            ver todos os posts
          </Link>
        </div>
      </section>
      <section
        id="services"
        className="flex w-full flex-col bg-green-50 px-4 py-10 lg:bg-pink-flower lg:bg-half lg:bg-no-repeat"
      >
        <h2 className="mb-4 text-center text-5xl text-pink lg:hidden">
          Serviços
        </h2>
        <div className="flex flex-col items-start space-y-4 lg:hidden">
          {services.map(({ title, body, link, cover }, index) => (
            <Disclosure
              key={title}
              defaultOpen={title === services[0].title ? true : false}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between bg-green p-4 text-left text-xl text-white">
                    {title}
                    <i>⌄</i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <p className="pt-4 text-justify">{body}</p>
                    <Link to={link} className="mt-4 block font-semibold">
                      veja mais...
                    </Link>
                    <div className="mb-8 text-center">
                      <a
                        href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
                        target="_blank"
                        className="mt-8 inline-block w-full self-center rounded-xl bg-pink py-2 px-4 text-xl font-semibold text-white lg:w-auto"
                      >
                        agendar
                      </a>
                    </div>
                    <img className="col-span-5 col-start-7 my-12" src={cover} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className="hidden flex-col lg:flex">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex space-x-8 self-center border-green text-2xl">
              {services.map(({ title }, index) => (
                <Tab as={Fragment} key={index}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button
                      className={
                        selected
                          ? "text-pink lg:border-2 lg:border-pink lg:p-2 lg:text-xl"
                          : "text-green-500 lg:border-2 lg:border-green-500 lg:p-2"
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
                  <div className="mx-auto lg:flex lg:w-4/6">
                    <div className="mt-12 w-4/6">
                      <h2 className="text-4xl text-pink lg:text-3xl">
                        {title}
                      </h2>
                      <p className="pt-4 text-justify">{body}</p>
                      <Link to={link} className="mt-4 block font-semibold">
                        veja mais...
                      </Link>
                      <div className="mb-8 text-center">
                        <a
                          href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
                          target="_blank"
                          className="mt-8 inline-block w-full self-center rounded-xl bg-pink py-2 px-4 text-xl font-semibold text-white lg:w-auto"
                        >
                          agendar
                        </a>
                      </div>
                    </div>
                    <img
                      className="my-12 ml-20 w-2/6 rounded-r-3xl rounded-tl-3xl object-contain"
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
