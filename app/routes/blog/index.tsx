import { Link } from "@remix-run/react";

export default function ServicesList() {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-8 flex items-start lg:flex-row flex-col">
        <img
          className="w-full lg:w-40 mr-8 object-contain"
          src="/assets/blog/auriculoterapia.jpg"
        />
        <div>
          <Link className="text-pink" to={`/blog/auriculoterapia`}>
            <h2 className="font-semibold text-xl lg:text-4xl mt-8 lg:mt-0">
              Auriculoterapia
            </h2>
          </Link>
          <p className="pt-4 indent-6 text-gray-600 text-justify">
            Na Medicina Chinesa a orelha apresenta pontos específicos que
            representam um mapa do corpo inteiro. Desta maneira, a
            Auriculoterapia é uma ferramenta terapêutica que utiliza estes
            pontos representativos do corpo para realizar diagnóstico e
            tratamentos de saúde física e/ou emocional, como dores na coluna,
            tensões musculares, alergias, ansiedade, enxaqueca, obesidade,
            distúrbios do sono, entre muitos outros.
          </p>
          <Link
            className="block mt-4 font-semibold"
            to={`/blog/auriculoterapia`}
          >
            continuar lendo
          </Link>
        </div>
      </div>

      <div className="bg-green-50 p-8 flex items-start lg:flex-row flex-col">
        <img
          className="w-full lg:w-40 mr-8 object-contain"
          src="/assets/blog/liberacaomiofaciall.jpg"
        />
        <div>
          <Link className="text-pink" to={`/blog/liberacao-miofascial`}>
            <h2 className="font-semibold text-xl lg:text-4xl mt-8 lg:mt-0">
              Liberação Miofascial
            </h2>
          </Link>
          <p className="pt-4 indent-6 text-gray-600 text-justify">
            A liberação miofascial acontece a partir de técnicas de mobilização,
            pressão ou manipulação de alguns pontos no corpo com objetivo de
            liberar a fáscia do músculo. Seu objetivo é basicamente aliviar
            dores e tensões musculares.
          </p>
          <Link
            className="block mt-4 font-semibold"
            to={`/blog/liberacao-miofascial`}
          >
            continuar lendo
          </Link>
        </div>
      </div>

      <div className="bg-green-50 p-8 flex items-start lg:flex-row flex-col">
        <img
          className="w-full lg:w-40 mr-8 object-contain"
          src="/assets/blog/Ventosaterapia.jpg"
        />
        <div>
          <Link className="text-pink" to={`/blog/ventosaterapia`}>
            <h2 className="font-semibold text-xl lg:text-4xl mt-8 lg:mt-0">
              Ventosaterapia
            </h2>
          </Link>
          <p className="pt-4 text-gray-600 indent-6 text-justify">
            Ventosaterapia é uma técnica da Medicina Chinesa que através da
            aplicação de ventosas faz um efeito de vácuo na pele. A partir dele
            aumenta a circulação sanguínea, trazendo como benefícios a melhora
            da circulação sanguínea local e otimização da oxigenação dos
            tecidos.
          </p>
          <Link
            className="block mt-4 font-semibold"
            to={`/blog/ventosaterapia`}
          >
            continuar lendo
          </Link>
        </div>
      </div>
    </div>
  );
}
