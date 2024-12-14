import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ActionButton from "./ActionButton";

interface Props {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
}

const NavbarComponent = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const navItems = [
    {
      item: "Home",
      href: "home",
    },
    {
      item: "Benifits",
      href: "benifits",
    },
    {
      item: "Our Classes",
      href: "ourclasses",
    },
    {
      item: "Contact Us",
      href: "contactus",
    },
  ];

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl";

  return (
    <nav>
      <div
        className={`${navBackground} fixed top-0 z-30 flex w-full items-center justify-between py-6`}
      >
        <div className="mx-auto flex w-5/6 items-center justify-center">
          <div className="flex w-full items-center justify-between gap-16">
            {/* LOGO */}
            <Image src="/assets/Logo.png" alt="logo" width={100} height={100} />

            {/* NAVITEM */}
            {isAboveMediumScreens ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-between gap-8 text-sm">
                  {navItems.map((item) => (
                    <Link
                      key={item.item}
                      href={`#${item.href}`}
                      className={`${selectedPage === item.href ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300`}
                      onClick={() => {
                        setSelectedPage(item.href);
                      }}
                    >
                      {item.item}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-8 text-sm">
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2">
                <Bars3Icon
                  className="h-6 w-6 text-white"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* NAV ITEMS */}
          <div className="flex flex-col items-center justify-center gap-10 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.item}
                href={`#${item.href}`}
                className={`${selectedPage === item.href ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300`}
                onClick={() => {
                  setSelectedPage(item.href);
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                {item.item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
