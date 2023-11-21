import { BackButton } from "~/ui/components/back-button";

export default function Post() {
  return (
    <div>
      <div className="text-justify text-gray-600 lg:bg-green-50 lg:p-8">
        <h2 className="text-2xl font-semibold text-pink">Ventosaterapia</h2>
        <img
          className="mt-8 object-contain"
          src="/assets/blog/Ventosaterapia.jpg"
        />
        <p className="pt-4  indent-6">
          Ventosaterapia é uma técnica da Medicina Chinesa que através da
          aplicação de ventosas faz um efeito de vácuo na pele. A partir dele
          aumenta a circulação sanguínea, trazendo como benefícios a melhora da
          circulação sanguínea local e otimização da oxigenação dos tecidos.
        </p>

        <p className="pt-4  indent-6">
          Pode ser usada para aliviar tensões musculares, reduzir quadros de dor
          e aliviar a fadiga.
        </p>
        <p className="pt-4  indent-6">
          As ventosas podem ser utilizadas em casos de dor crônica na lombar
          associadas com muita contratura muscular localizada Podem estar
          auxiliando na mobilidade e relaxamento da musculatura local
          colaborando para aliviar as dores no local, permitindo também uma
          maior mobilidade, mais relaxamento muscular e um retorno mais rápido
          as atividades do cotidiano. Principalmente colaborando para realização
          de atividades físicas.
        </p>
        <p className="pt-4">Você já conhece essa técnica?</p>
        <BackButton to="/blog" />
      </div>
    </div>
  );
}
