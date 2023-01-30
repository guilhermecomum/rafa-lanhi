import { Link } from "@remix-run/react";

export default function ServicesList() {
  return (
    <div className="space-y-8">
      {[1, 2, 3, 4, 5].map((x) => (
        <div className="bg-green-50 p-8">
          <Link className="text-pink" to={`/blog/${x}`}>
            <h2 className="font-semibold text-4xl">{`Post ${x}`}</h2>
          </Link>
          <p className="pt-4 text-gray-600">
            Interessantiss quisso pudia ce receita de bolis, mais bolis eu num
            gostis.Em pé sem cair, deitado sem dormir, sentado sem cochilar e
            fazendo pose.Detraxit consequat et quo num tendi nada.Paisis,
            filhis, espiritis santis.
          </p>
          <Link className="block mt-4 font-semibold" to={`/blog/${x}`}>
            continuar lendo
          </Link>
        </div>
      ))}
    </div>
  );
}
