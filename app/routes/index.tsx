import { Fragment } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";

export default function Index() {
  const services = ["Fisioterapia", "Acupuntura & Medicina Chinesa"];

  return (
    <main className="relative lg:flex lg:items-center lg:justify-center flex flex-col">
      <section className="flex flex-col lg:py-10 lg:grid lg:grid-cols-12 lg:px-4 lg:items-center">
        <div className="col-start-2 col-span-4 text-right">
          <img
            className="object-cover lg:object-none w-full mb-4 h-48 lg:h-auto lg:w-auto lg:rounded-full"
            src="/assets/rafa-home.jpg"
          />
        </div>
        <div className="col-start-7 col-span-5 px-4">
          <h2 className="text-2xl lg:text-4xl text-center font-semibold">
            Rafaela Lanhi
          </h2>
          <p className="pt-4">
            Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
            num tendi nada.Diuretics paradis num copo é motivis de
            denguis.Interagi no mé, cursus quis, vehicula ac nisi.Posuere libero
            varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet
            nisi.
          </p>
          <p className="pt-4">
            Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
            gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
            fazendo pose.Detraxit consequat et quo num tendi nada.Paisis,
            filhis, espiritis santis.
          </p>
          <p className="pt-4">
            Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie
            leo, vitae iaculis nisl.Sapien in monti palavris qui num significa
            nadis i pareci latim.Paisis, filhis, espiritis santis.Cevadis im
            ampola pa arma uma pindureta.
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
                <a className="text-right" href="">
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
        className="bg-green-50 lg:bg-pink-flower lg:bg-half lg:bg-no-repeat w-full flex flex-col px-4 py-6"
      >
        <h2 className="text-5xl text-center text-pink mb-4 lg:hidden">
          Serviços
        </h2>
        <div className="lg:hidden flex flex-col items-start space-y-4">
          {services.map((name, index) => (
            <Disclosure key={name} defaultOpen={index === 0 ? true : false}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="text-xl flex justify-between p-4 w-full text-white bg-green">
                    {name}
                    <i>⌄</i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 pl-6">
                    <h2 className="text-4xl text-pink">Acupuntura</h2>
                    <p className="pt-4">
                      Mussum Ipsum, cacilds vidis litro abertis. Detraxit
                      consequat et quo num tendi nada.Diuretics paradis num copo
                      é motivis de denguis.Interagi no mé, cursus quis, vehicula
                      ac nisi.Posuere libero varius. Nullam a nisl ut ante
                      blandit hendrerit. Aenean sit amet nisi.
                    </p>
                    <p className="pt-4">
                      Interessantiss quisso pudia ce receita de bolis, mais
                      bolis eu num gostis.Em pé sem cair, deitado sem dormir,
                      sentado sem cochilar e fazendo pose.Detraxit consequat et
                      quo num tendi nada.Paisis, filhis, espiritis santis.
                    </p>
                    <p className="pt-4">
                      Mauris nec dolor in eros commodo tempor. Aenean aliquam
                      molestie leo, vitae iaculis nisl.Sapien in monti palavris
                      qui num significa nadis i pareci latim.Paisis, filhis,
                      espiritis santis.Cevadis im ampola pa arma uma pindureta.
                    </p>
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
          <Tab.Group defaultIndex={1}>
            <Tab.List className="flex text-2xl space-x-8 border-green self-center ">
              {services.map((name, index) => (
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
                      {name}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="lg:grid lg:grid-cols-12">
                  <div className="col-start-2 col-span-4 mt-12">
                    <h2 className="text-4xl text-pink">Acupuntura</h2>
                    <p className="pt-4">
                      Mussum Ipsum, cacilds vidis litro abertis. Detraxit
                      consequat et quo num tendi nada.Diuretics paradis num copo
                      é motivis de denguis.Interagi no mé, cursus quis, vehicula
                      ac nisi.Posuere libero varius. Nullam a nisl ut ante
                      blandit hendrerit. Aenean sit amet nisi.
                    </p>
                    <p className="pt-4">
                      Interessantiss quisso pudia ce receita de bolis, mais
                      bolis eu num gostis.Em pé sem cair, deitado sem dormir,
                      sentado sem cochilar e fazendo pose.Detraxit consequat et
                      quo num tendi nada.Paisis, filhis, espiritis santis.
                    </p>
                    <p className="pt-4">
                      Mauris nec dolor in eros commodo tempor. Aenean aliquam
                      molestie leo, vitae iaculis nisl.Sapien in monti palavris
                      qui num significa nadis i pareci latim.Paisis, filhis,
                      espiritis santis.Cevadis im ampola pa arma uma pindureta.
                    </p>
                  </div>
                  <img
                    className="my-12 col-start-7 col-span-5"
                    src="/assets/acupuntura-home.jpg"
                  />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="lg:grid lg:grid-cols-12">
                  <div className="col-start-2 col-span-4 mt-12">
                    <h2 className="text-4xl text-pink">Acupuntura</h2>
                    <p className="pt-4">
                      Mussum Ipsum, cacilds vidis litro abertis. Detraxit
                      consequat et quo num tendi nada.Diuretics paradis num copo
                      é motivis de denguis.Interagi no mé, cursus quis, vehicula
                      ac nisi.Posuere libero varius. Nullam a nisl ut ante
                      blandit hendrerit. Aenean sit amet nisi.
                    </p>
                    <p className="pt-4">
                      Interessantiss quisso pudia ce receita de bolis, mais
                      bolis eu num gostis.Em pé sem cair, deitado sem dormir,
                      sentado sem cochilar e fazendo pose.Detraxit consequat et
                      quo num tendi nada.Paisis, filhis, espiritis santis.
                    </p>
                    <p className="pt-4">
                      Mauris nec dolor in eros commodo tempor. Aenean aliquam
                      molestie leo, vitae iaculis nisl.Sapien in monti palavris
                      qui num significa nadis i pareci latim.Paisis, filhis,
                      espiritis santis.Cevadis im ampola pa arma uma pindureta.
                    </p>
                  </div>
                  <img
                    className="my-12 col-start-7 col-span-5"
                    src="/assets/acupuntura-home.jpg"
                  />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </main>
  );
}
