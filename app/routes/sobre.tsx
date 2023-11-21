import { BackButton } from "~/ui/components/back-button";

export default function Sobre() {
  return (
    <div className="my-4 flex w-full flex-col items-start px-4 text-lg text-gray-600 lg:mx-auto lg:my-10 lg:w-8/12 lg:flex-row">
      <img
        className="mr-10 w-full object-contain lg:mt-16 lg:w-2/6 lg:rounded-l-3xl lg:rounded-tr-3xl"
        src="/assets/sobre.jpg"
      />
      <div className="mt-8 text-justify lg:m-0 lg:w-4/6">
        <h2 className="text-center text-4xl font-semibold text-pink">Sobre</h2>
        <div className="text-xl">
          <p className="pt-4 indent-6">
            Olá, sou Rafaela Lanhi, fisioterapeuta e acupunturista, e minha
            maior satisfação é trazer bem estar para as pessoas através das
            técnicas da medicina chinesa somadas a formação em fisioterapia.
          </p>
          <p className="pt-4 indent-6">
            Graduada há quase 15 anos em fisioterapia, fiz esta escolha
            profissional para desenvolver um trabalho onde estivesse atendendo e
            ajudando pessoas. Logo no início da graduação já me apaixonei pela
            minha opção e fui percebendo muita afinidade por qualquer área da
            saúde que considerasse o ser humano como um todo (sobre seus
            aspectos físicos, mentais e o todo ao seu redor).
          </p>
          <p className="pt-4 indent-6">
            Logo que finalizei meu curso, fui trilhando caminhos para aprofundar
            minha formação de base e para encontrar qual a especialização que
            gostaria de seguir. Nesta caminhada fiz especialização em Ortopedia
            e Traumatologia, Fisioterapia do Trabalho e Pilates, com vários
            aprimoramentos neste último. E todos estes cursos sempre fizeram
            crescer meu encanto por ajudar de alguma forma as pessoas e me
            tornaram cada vez mais admirada com o movimento humano e como nosso
            corpo responde a cada coisinha que nos atravessa em nosso cotidiano.
          </p>
          <p className="pt-4 indent-6">
            A Acupuntura, não foi minha primeira escolha de especialização e
            hoje consigo perceber que tudo que fiz antes era necessário para
            abrir ainda mais meu olhar sobre o ser humano em sua totalidade.
            Assim, há 4 anos atrás, quando iniciei minha formação em Acupuntura,
            também abri espaço para uma mudança interna, pessoal e profissional,
            que precisava destes anos todos para poder acontecer de verdade.
          </p>
          <p className="pt-4 indent-6">
            Me apaixonei e continuo encantada pela Medicina Chinesa e por todo
            este longo caminho de aprendizado que ela significa pra mim. E fico
            muito feliz por essa mistura que tem sido minha vida profissional,
            onde acabo unindo os conhecimentos desde a fisioterapia e todos os
            seus ensinamentos até a Acupuntura e Medicina Chinesa. Em pensar a
            delicadeza que é poder cuidar da saúde das pessoas considerando
            todos os aspectos que envolvem o bem-estar e a qualidade de vida de
            cada indivíduo e o meio aonde eles estão.
          </p>
          <p className="pt-4">
            Te convido a embarcar comigo nessa jornada. Vamos?
          </p>
          <BackButton to="/" />
        </div>
      </div>
    </div>
  );
}
