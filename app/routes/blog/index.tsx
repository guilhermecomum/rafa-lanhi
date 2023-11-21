import { Link } from "@remix-run/react";

export default function ServicesList() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start bg-green-50 p-8 lg:flex-row">
        <Link
          className="mr-8 w-full  shrink-0 lg:w-40"
          to={`/blog/auriculoterapia`}
        >
          <img
            className="mr-8 w-full object-contain lg:w-40"
            src="/assets/blog/auriculoterapia.jpg"
          />
        </Link>
        <div>
          <Link className="text-pink" to={`/blog/auriculoterapia`}>
            <h2 className="mt-8 text-xl font-semibold lg:mt-0 lg:text-4xl">
              Auriculoterapia
            </h2>
          </Link>
          <p className="pt-4 text-justify indent-6 text-gray-600">
            Na Medicina Chinesa a orelha apresenta pontos específicos que
            representam um mapa do corpo inteiro. Desta maneira, a
            Auriculoterapia é uma ferramenta terapêutica que utiliza estes
            pontos representativos do corpo para realizar diagnóstico e
            tratamentos de saúde física e/ou emocional, como dores na coluna,
            tensões musculares, alergias, ansiedade, enxaqueca, obesidade,
            distúrbios do sono, entre muitos outros.
          </p>
          <Link
            className="mt-4 block font-semibold"
            to={`/blog/auriculoterapia`}
          >
            continuar lendo
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start bg-green-50 p-8 lg:flex-row">
        <Link
          className="mr-8 w-full  shrink-0 lg:w-40"
          to={`/blog/liberacao-miofascial`}
        >
          <img
            className="mr-8 w-full object-contain lg:w-40"
            src="/assets/blog/liberacaomiofaciall.jpg"
          />
        </Link>
        <div>
          <Link className="text-pink" to={`/blog/liberacao-miofascial`}>
            <h2 className="mt-8 text-xl font-semibold lg:mt-0 lg:text-4xl">
              Liberação Miofascial
            </h2>
          </Link>
          <p className="pt-4 text-justify indent-6 text-gray-600">
            A liberação miofascial acontece a partir de técnicas de mobilização,
            pressão ou manipulação de alguns pontos no corpo com objetivo de
            liberar a fáscia do músculo. Seu objetivo é basicamente aliviar
            dores e tensões musculares.
          </p>
          <Link
            className="mt-4 block font-semibold"
            to={`/blog/liberacao-miofascial`}
          >
            continuar lendo
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start bg-green-50 p-8 lg:flex-row">
        <Link
          className="mr-8 w-full  shrink-0 lg:w-40"
          to={`/blog/ventosaterapia`}
        >
          <img
            className="mr-8 w-full object-contain lg:w-40"
            src="/assets/blog/Ventosaterapia.jpg"
          />
        </Link>
        <div>
          <Link className="text-pink" to={`/blog/ventosaterapia`}>
            <h2 className="mt-8 text-xl font-semibold lg:mt-0 lg:text-4xl">
              Ventosaterapia
            </h2>
          </Link>
          <p className="pt-4 text-justify indent-6 text-gray-600">
            Ventosaterapia é uma técnica da Medicina Chinesa que através da
            aplicação de ventosas faz um efeito de vácuo na pele. A partir dele
            aumenta a circulação sanguínea, trazendo como benefícios a melhora
            da circulação sanguínea local e otimização da oxigenação dos
            tecidos.
          </p>
          <Link
            className="mt-4 block font-semibold"
            to={`/blog/ventosaterapia`}
          >
            continuar lendo
          </Link>
        </div>
      </div>
    </div>
  );
}
