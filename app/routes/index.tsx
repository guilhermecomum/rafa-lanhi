import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative sm:flex sm:items-center sm:justify-center flex flex-col">
      <section className="flex flex-col sm:py-10 sm:grid sm:grid-cols-12 sm:px-4 sm:items-center">
        <div className="col-start-2 col-span-4 text-right">
          <img
            className="object-cover sm:object-none w-full mb-4 h-48 sm:h-auto sm:w-auto sm:rounded-full"
            src="./assets/rafa-home.jpg"
          />
        </div>
        <div className="col-start-7 col-span-5 px-4">
          <h2 className="text-2xl sm:text-4xl text-center font-semibold">
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
            <button className="bg-pink py-2 w-full sm:w-auto px-4 mt-8 rounded-xl text-white text-xl font-semibold self-center">
              agendar
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-pink lg:bg-white-flower lg:bg-half-center md:h-[80vh] lg:bg-no-repeat flex flex-col text-white">
        <div className="w-10/12 mx-auto flex flex-col h-full justify-around">
          <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 pt-16 md:space-x-16">
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
            className="text-2xl mt-10 mb-8 text-center md:text-right"
            to="/blog"
          >
            ver todos os posts
          </Link>
        </div>
      </section>
      <section className="bg-green-50 lg:bg-pink-flower lg:bg-half lg:bg-no-repeat sm:grid sm:grid-cols-12 px-4 py-14">
        <div className="col-span-12 text-center">
          <h2 className="text-4xl text-pink">Acupuntura</h2>
        </div>
        <div className="col-start-2 col-span-4 mt-12">
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
        </div>
        <img
          className="my-12 col-start-7 col-span-5"
          src="./assets/acupuntura-home.jpg"
        />
      </section>
    </main>
  );
}
