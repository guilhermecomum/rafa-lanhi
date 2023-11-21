import { BackButton } from "~/ui/components/back-button";

export default function Post() {
  return (
    <div>
      <div className="text-justify text-gray-600 lg:bg-green-50 lg:p-8">
        <h2 className="text-4xl font-semibold text-pink">
          Liberação Miofascial
        </h2>
        <img
          className="mt-8 object-contain"
          src="/assets/blog/liberacaomiofaciall.jpg"
        />
        <p className="pt-4  indent-6">
          A liberação miofascial acontece a partir de técnicas de mobilização,
          pressão ou manipulação de alguns pontos no corpo com objetivo de
          liberar a fáscia do músculo. Seu objetivo é basicamente aliviar dores
          e tensões musculares.
        </p>

        <p className="pt-4">
          Seus benefícios:
          <ol
            className="list-inside
list-disc"
          >
            <li>Melhorar a circulação sanguínea local</li>
            <li>
              Relaxar a musculatura local, reduzindo sobrecarga causada pela
              tensão muscular
            </li>
            <li>
              Restaurar a amplitude de movimento, quando limitada pela
              contratura muscular
            </li>
            <li>Aliviar quadro de dor. </li>
          </ol>
        </p>
        <p className="pt-4  indent-6">
          Por exemplo, naquela viradinha de corpo para pegar algum objeto no
          banco traseiro do carro enquanto espera o sinal abrir, e acaba por
          provocar uma dor forte e aguda no pescoço, que resulta numa contratura
          muscular intensa e limitante do movimento. A liberação miofascial pode
          ser uma técnica que permite uma alívio da dor e pode ajudar na
          recuperação gradual da mobilidade. Podendo diminuir a necessidade de
          uma medicação e aliviar os sintomas mais desconfortáveis mais
          rapidamente.
        </p>
        <BackButton to="/blog" />
      </div>
    </div>
  );
}
