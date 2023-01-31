import { Fragment } from "react";
import type { LoaderArgs } from "@remix-run/node";
import { Disclosure, Tab } from "@headlessui/react";
import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader(args: LoaderArgs) {
  const acupuntura = {
    title: "Fisioterapia",
    body: "Identificar e melhorar a qualidade de vida e o potencial movimento de cada pessoa. Este é um dos principais objetivos da Fisioterapia que é, segundo a Confederação Mundial de Fisioterapia, uma profissão da área da saúde habilitada para promover, desenvolver, manter e reabilitar as capacidades de movimento e funcionalidade do indivíduo ao longo da sua vida",
    cover: "",
    link: "/servicos/fisioterapia",
  };
  const mtc = {
    title: "Acupuntura & Medicina Chinesa",
    body: "A Acupuntura é uma ferramenta milenar da Medicina Chinesa, que busca o equilíbrio e a harmonia energética interna do corpo e dele com o ambiente, tendo sempre como objetivo melhorar o seu funcionamento como um todo. Através da aplicação de agulhas em pontos específicos do corpo são estimuladas terminações nervosas existentes na pele e em outros tecidos, enviando assim uma mensagem ao cérebro, provocando vários efeitos no corpo, como ação analgésica ou anti-inflamatória, por exemplo. Deste modo, tratando diversas doenças e promovendo a saúde do indivíduo.",
    cover: "",
    link: "/servicos/medicina-chinesa",
  };
  const services = [acupuntura, mtc];
  return json({ services });
}

export default function Index() {
  const { services } = useLoaderData<typeof loader>();

  return (
    <main className="relative lg:flex lg:items-center lg:justify-center flex flex-col">
      <section className="flex flex-col lg:flex-row lg:w-8/12 lg:py-10 lg:px-4 lg:items-center lg:justify-between lg:space-x-10">
        <div className="lg:w-2/6 w-full p-4">
          <img
            className="object-contain w-full lg:rounded-l-3xl lg:rounded-tr-3xl"
            src="/assets/rafa-home.webp"
          />
        </div>
        <div className="px-4 w-full lg:w-4/6">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold text-pink mb-4">
            Fisioterapia & Acupuntura
          </h2>
          <p className="pt-4 text-center text-xl">
            Olá, sou <b>Rafaela Lanhi</b> e minha maior satisfação é trazer bem
            estar para as pessoas através das técnicas da medicina chinesa
            somadas a formação em fisioterapia.
          </p>

          <div className="text-center mb-8">
            <a
              href="http://cal.com/rafaela-lanhi"
              target="_blank"
              className="bg-pink inline-block py-2 w-full lg:w-auto px-4 mt-8 rounded-xl text-white text-xl font-semibold self-center"
            >
              agendar
            </a>
          </div>
        </div>
      </section>
      <section
        id="blog"
        className="w-full bg-pink lg:bg-white-flower lg:bg-half-center lg:h-[80vh] lg:bg-no-repeat flex flex-col text-white"
      >
        <div className="w-10/12 mx-auto flex flex-col h-full justify-around">
          <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 pt-16 lg:space-x-16">
            {[1, 2, 3].map((x, i) => (
              <div key={i} className="flex flex-col">
                <h2 className="font-semibold">{`Titulo post ${x}`} </h2>
                <p className="pt-4">
                  Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat
                  et quo num tendi nada.Diuretics paradis num copo é motivis de
                  denguis.Interagi no mé, cursus quis, vehicula ac nisi.Posuere
                  libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean
                  sit amet nisi.
                </p>
                <a className="text-right mt-6" href="">
                  continuar lendo
                </a>
              </div>
            ))}
          </div>
          <Link
            className="text-2xl mt-10 mb-8 text-center lg:text-right"
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
          {services.map(({ title, body, link }, index) => (
            <Disclosure
              key={title}
              defaultOpen={title === services[0].title ? true : false}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-xl flex justify-between p-4 w-full text-white bg-green">
                    {title}
                    <i>⌄</i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <h2 className="text-4xl text-pink">{title}</h2>
                    <p className="pt-4 text-justify">{body}</p>
                    <Link to={link} className="font-semibold mt-4">
                      veja mais...
                    </Link>

                    <img
                      className="my-12 col-start-7 col-span-5"
                      src="/assets/acupuntura-home.jpg"
                    />
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
              {services.map(({ title, body, link }, index) => (
                <Tab.Panel>
                  <div className="lg:grid lg:grid-cols-12">
                    <div className="col-start-2 col-span-4 mt-12">
                      <h2 className="text-4xl text-pink">{title}</h2>
                      <p className="pt-4 text-justify">{body}</p>
                      <Link to={link} className="font-semibold mt-4 block">
                        veja mais...
                      </Link>
                    </div>
                    <img
                      className="my-12 col-start-7 col-span-5"
                      src="/assets/acupuntura-home.jpg"
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
