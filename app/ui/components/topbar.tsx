import { Popover, Transition } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import { Fragment } from "react";
import { SocialLinks } from "~/ui/components/social-links";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Topbar() {
  return (
    <Popover>
      <header className="flex w-full lg:flex-row lg:h-28 flex-col px-2 py-2 lg:py-4 lg:justify-between items-center shadow-custom-pink">
        <div className="lg:hidden flex w-full justify-between items-center">
          <div className="flex items-center">
            <Popover.Button>
              <Bars3Icon className="h-6 w-6 text-pink" />
            </Popover.Button>
            <Link to="/">
              <img className="lg:hidden px-4" src="/assets/logo-mobile.svg" />
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
            to="/blog"
          >
            blog
          </NavLink>
          <NavLink
            prefetch="intent"
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
            to="/servicos"
          >
            serviços
          </NavLink>
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
