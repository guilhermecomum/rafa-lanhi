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
      <section className="bg-pink lg:bg-white-flower bg-bottom lg:bg-no-repeat flex px-4 py-14 text-white">
        <p className="pt-4">
          Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo
          num tendi nada.Diuretics paradis num copo é motivis de
          denguis.Interagi no mé, cursus quis, vehicula ac nisi.Posuere libero
          varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
        </p>
        <p className="pt-4">
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
          gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
          fazendo pose.Detraxit consequat et quo num tendi nada.Paisis, filhis,
          espiritis santis.
        </p>
        <p className="pt-4">
          Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo,
          vitae iaculis nisl.Sapien in monti palavris qui num significa nadis i
          pareci latim.Paisis, filhis, espiritis santis.Cevadis im ampola pa
          arma uma pindureta.
        </p>
      </section>
    </main>
  );
}
