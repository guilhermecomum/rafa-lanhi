import { Outlet, Link } from "@remix-run/react";

export default function AllPosts() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col w-full lg:w-7/12 lg:mx-auto p-4">
        <div className="w-full text-gray-400 mt-2 mb-8">
          <div className="flex items-center">
            <Link className="text-pink" to="/">
              Rafaela Lanhi
            </Link>
            <span className="text-xl text-green font-semibold px-2">›</span>{" "}
            <Link className="text-pink" to="/blog">
              blog
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
