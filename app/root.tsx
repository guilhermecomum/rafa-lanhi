import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";
import { Popover } from "@headlessui/react";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rafaela Lanhi | Fisioterapia & Acupuntura",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Popover>
          <header className="flex w-full sm:flex-row flex-col px-4 sm:py-4 sm:justify-between items-center shadow-custom-pink">
            <div className="sm:hidden flex w-full justify-between items-center">
              <div className="flex items-center">
                <Popover.Button>
                  <i className="fa-solid fa-bars text-pink"></i>
                </Popover.Button>
                <Link to="/">
                  <img
                    className="sm:hidden px-4"
                    src="./assets/logo-mobile.png"
                  />
                </Link>
              </div>
              <div>
                <Link to="/servicos" className="pl-8">
                  <i className="fa-brands fa-whatsapp text-green"></i>
                </Link>
                <Link to="/servicos" className="pl-4">
                  <i className="fa-brands fa-linkedin text-green"></i>
                </Link>
              </div>
            </div>
            <Link to="/">
              <img
                className="hidden sm:inline-block sm:w-auto"
                src="./assets/logo.png"
              />
            </Link>
            <nav className="uppercase hidden sm:flex justify-between items-start">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
              >
                home
              </NavLink>
              <Link to="/sobre" className="sm:pl-8">
                sobre
              </Link>
              <Link to="/blog" className="sm:pl-8">
                blog
              </Link>
              <Link to="/servicos" className="sm:pl-8">
                serviços
              </Link>
              <Link to="/servicos" className="sm:pl-8 hidden sm:inline-block">
                <i className="fa-brands fa-whatsapp text-green"></i>
              </Link>
              <Link to="/servicos" className="sm:pl-4 hidden sm:inline-block">
                <i className="fa-brands fa-linkedin text-green"></i>
              </Link>
            </nav>

            <Popover.Panel className="flex flex-col uppercase w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
              >
                home
              </NavLink>
              <Link to="/sobre" className="sm:pl-8">
                sobre
              </Link>
              <Link to="/blog" className="sm:pl-8">
                blog
              </Link>
              <Link to="/servicos" className="sm:pl-8">
                serviços
              </Link>
            </Popover.Panel>
          </header>
        </Popover>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
