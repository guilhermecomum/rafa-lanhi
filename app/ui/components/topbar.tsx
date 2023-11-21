import { Popover, Transition } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import { Fragment } from "react";
import { SocialLinks } from "~/ui/components/social-links";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Topbar() {
  return (
    <Popover>
      <header className="flex w-full flex-col items-center px-2 py-2 shadow-custom-pink lg:h-28 lg:flex-row lg:justify-between lg:py-4">
        <div className="flex w-full items-center justify-between lg:hidden">
          <div className="flex items-center">
            <Popover.Button>
              <Bars3Icon className="h-6 w-6 text-pink" />
            </Popover.Button>
            <Link to="/">
              <img className="px-4 lg:hidden" src="/assets/logo-mobile.svg" />
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
        <nav className="hidden items-center justify-between pr-4 uppercase lg:flex lg:space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
          >
            home
          </NavLink>
          <NavLink
            prefetch="intent"
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
            to="/sobre"
          >
            sobre
          </NavLink>
          <NavLink
            prefetch="intent"
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
            to="/servicos"
          >
            serviços
          </NavLink>
          <NavLink
            prefetch="intent"
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
            to="/blog"
          >
            blog
          </NavLink>

          <a
            href="https://api.whatsapp.com/send/?phone=5551981030730&text&type=phone_number&app_absent=0"
            target="_blank"
            className="font-semibold text-pink"
          >
            agendar
          </a>

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
        <Popover.Panel className="flex w-full flex-col space-y-2 px-4 py-4 uppercase">
          {({ close }) => (
            <>
              <NavLink
                to="/"
                onClick={() => close()}
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
              >
                home
              </NavLink>
              <NavLink
                onClick={() => close()}
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
                to="/sobre"
              >
                sobre
              </NavLink>
              <NavLink
                onClick={() => close()}
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
                to="/blog"
              >
                blog
              </NavLink>
              <NavLink
                onClick={() => close()}
                className={({ isActive }) =>
                  isActive ? "text-pink" : undefined
                }
                to="/servicos"
              >
                serviços
              </NavLink>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export { Topbar };
