import { Popover, Transition } from "@headlessui/react";
import { Link, NavLink } from "@remix-run/react";
import { Fragment } from "react";
import { SocialLinks } from "~/ui/components/social-links";

function Topbar() {
  return (
    <Popover>
      <header className="flex w-full lg:flex-row lg:h-28 flex-col px-4 py-2 lg:py-4 lg:justify-between items-center shadow-custom-pink">
        <div className="lg:hidden flex w-full justify-between items-center">
          <div className="flex items-center">
            <Popover.Button>
              <i className="fa-solid fa-bars text-pink"></i>
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
          <Link to="/sobre">sobre</Link>
          <Link to="/blog">blog</Link>
          <Link to="/servicos">serviços</Link>
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
            className={({ isActive }) => (isActive ? "text-pink" : undefined)}
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
  );
}

export { Topbar };
