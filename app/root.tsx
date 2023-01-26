import { Fragment } from "react";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
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

import styles from "~/styles/app.css";
import { Popover, Transition } from "@headlessui/react";
import { SocialLinks } from "./ui/components/social-links";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://kit.fontawesome.com/3f404a2f5c.css",
      crossOrigin: "anonymous",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rafaela Lanhi | Fisioterapia & Acupuntura",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Popover>
          <header className="flex w-full lg:flex-row lg:h-28 flex-col px-4 py-2 lg:py-4 lg:justify-between items-center shadow-custom-pink">
            <div className="lg:hidden flex w-full justify-between items-center">
              <div className="flex items-center">
                <Popover.Button>
                  <i className="fa-solid fa-bars text-pink"></i>
                </Popover.Button>
                <Link to="/">
                  <img
                    className="lg:hidden px-4"
                    src="/assets/logo-mobile.svg"
                  />
                </Link>
              </div>
              <div className="flex space-x-2 text-xl text-green">
                <SocialLinks />
              </div>
            </div>
            <Link to="/">
              <img
                className="hidden lg:inline-block lg:h-20"
                src="/assets/logo.svg"
              />
            </Link>
            <nav className="uppercase hidden lg:flex justify-between items-center lg:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
              >
                home
              </NavLink>
              <Link to="#blog">blog</Link>
              <Link to="#services">serviços</Link>
              <div className="flex space-x-4 text-3xl text-green">
                <SocialLinks />
              </div>
            </nav>
          </header>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="flex flex-col uppercase w-full px-4 py-4 space-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
              >
                home
              </NavLink>
              <Link to="#blog" className="lg:pl-8">
                blog
              </Link>
              <Link to="#services" className="lg:pl-8">
                serviços
              </Link>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Outlet />
        <div className="mt-auto bg-pink text-white flex flex-col lg:flex-row space-y-8 text-center lg:space-y-0 lg:text-left justify-between py-8 items-center px-8">
          <p>
            Rafaela Lanhi | Fisíoterapia & Acupuntura - rafaela@rafalanhi.com.br
          </p>
          <div className="text-2xl space-x-4">
            <SocialLinks />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
