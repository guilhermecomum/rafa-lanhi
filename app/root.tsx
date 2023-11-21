import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";

import * as gtag from "~/utils/gtags.client";

import styles from "~/styles/app.css";
import { SocialLinks } from "~/ui/components/social-links";
import { Topbar } from "~/ui/components/topbar";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rafaela Lanhi | Fisioterapia & Acupuntura",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex min-h-screen flex-col">
        {process.env.NODE_ENV === "development" || !gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <Topbar />
        <Outlet />
        <div className="mt-auto flex flex-col items-center justify-between space-y-8 bg-pink py-8 px-8 text-center text-white lg:flex-row lg:space-y-0 lg:text-left">
          <a href="/">
            <p>Rafaela Lanhi | Fisioterapia & Acupuntura</p>
          </a>
          <div className="space-x-4 text-2xl">
            <SocialLinks white={true} />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
