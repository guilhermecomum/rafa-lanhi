import { BackButton } from "~/ui/components/back-button";

export default function Post() {
  return (
    <div>
      <div className="text-justify text-gray-600 lg:bg-green-50 lg:p-8">
        <h2 className="text-2xl font-semibold text-pink">Auriculoterapia</h2>
        <img
          className="mt-8 object-contain"
          src="/assets/blog/auriculoterapia.jpg"
        />
        <p className="pt-4 text-justify">Você conhece a Auriculoterapia?</p>

        <p className="pt-4 indent-6">
          Na Medicina Chinesa a orelha apresenta pontos específicos que
          representam um mapa do corpo inteiro. Desta maneira, a Auriculoterapia
          é uma ferramenta terapêutica que utiliza estes pontos representativos
          do corpo para realizar diagnóstico e tratamentos de saúde física e/ou
          emocional, como dores na coluna, tensões musculares, alergias,
          ansiedade, enxaqueca, obesidade, distúrbios do sono, entre muitos
          outros.
        </p>
        <p className="pt-4  indent-6">
          Em casos de tratamentos para ansiedade, por exemplo, é possível
          utilizar os pontos na orelha como apoio há um tratamento de
          Acupuntura, permitindo que os pontos relacionados à ansiedade estejam
          estimulados continuamente, amenizando os sintomas das crises.
        </p>

        <p className="pt-4">Que tal experimentar uma sessão?</p>
        <BackButton to="/blog" />
      </div>
    </div>
  );
}
