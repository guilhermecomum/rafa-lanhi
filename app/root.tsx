import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/app.css";
import { SocialLinks } from "~/ui/components/social-links";
import { Topbar } from "~/ui/components/topbar";

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
        <Topbar />
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
