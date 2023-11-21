import { Outlet, Link } from "@remix-run/react";

export default function AllPosts() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex w-full flex-col p-4 lg:mx-auto lg:w-5/12">
        <div className="mt-2 mb-8 w-full text-gray-400">
          <div className="flex items-center">
            <Link className="text-pink" to="/">
              Home
            </Link>
            <span className="px-2 text-xl font-semibold text-green">›</span>{" "}
            <Link className="text-pink" to="/servicos">
              Serviços
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
