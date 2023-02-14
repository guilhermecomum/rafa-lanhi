import { Link } from "@remix-run/react";

export default function ServicesList() {
  return (
    <div className="space-y-8">
      <div className="bg-green-50 p-8 flex items-start lg:flex-row flex-col">
        <img
          className="w-full lg:w-40 mr-8 object-contain"
          src="/assets/blog/Ventosaterapia.jpg"
        />
        <div>
          <Link className="text-pink" to={`/blog/ventosaterapia`}>
            <h2 className="font-semibold text-3xl lg:text-4xl mt-8">
              Ventosaterapia
            </h2>
          </Link>
          <p className="pt-4 text-gray-600">
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
