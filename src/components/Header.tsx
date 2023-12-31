import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

import { PrimaryLink } from "~/components/PrimaryLink";
import { BurgerButton } from "~/components/BurgerButton";

const links = [
  {
    label: "Katas",
    href: "/katas",
  },
];

function LogoLink() {
  return (
    <PrimaryLink href="/" className="flex items-center gap-3">
      <span className="font-bold uppercase">React Katas Z</span>
    </PrimaryLink>
  );
}

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header>
      <nav className="px-4 lg:px-6">
        <div className="relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between border-b border-primary-300/30 py-3">
          <LogoLink />
          <div className="flex items-center lg:hidden">
            <BurgerButton onClick={toggleMenu} />
          </div>
          <div className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto">
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {links.map((link) => (
                <li key={link.href}>
                  <PrimaryLink href={link.href}>{link.label}</PrimaryLink>
                </li>
              ))}
            </ul>
          </div>
          {/* MOBILE NAV BAR */}
          {open && (
            <div
              className="fixed inset-0 w-full bg-gray-900 p-10 lg:hidden"
              id="mobile-menu"
            >
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={toggleMenu}
                  className="self-end rounded-xl p-2 dark:hover:bg-primary-900"
                >
                  <AiOutlineClose
                    color="white"
                    style={{
                      width: 35,
                      height: 35,
                    }}
                    className="inline-flex items-center rounded-lg  text-sm text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-primary-900 dark:focus:ring-primary-600"
                  />
                </button>
                <LogoLink />
                <ul className="mt-4 flex flex-col items-center gap-5 text-2xl">
                  {links.map((link) => (
                    <li key={link.href}>
                      <PrimaryLink href={link.href}>{link.label}</PrimaryLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
