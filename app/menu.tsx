"use client";

import Link from "next/link";
import "./menu.css";
import { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switching/theme-switcher";

type MenuItem = { url: string; label: string };

export default function Menu() {
  const currentRoute = usePathname();

  const menuItems = [
    { url: "/", label: "Home" },
    { url: "/scores", label: "Scores" },
    { url: "/blog", label: "Blog" },
    { url: "/about", label: "About" },
  ] satisfies MenuItem[];

  const burgerMenuRef = useRef<HTMLDialogElement>(null);

  const menuItemsJsx = menuItems.map(({ url, label }) => (
    <Link
      key={url}
      href={url}
      className={`bg-primary hover:bg-pink-400 py-2 px-10 md:px-2 rounded-sm text-white text-lg font-bold ${currentRoute === url ? " dark:bg-amber-800" : ""}`}
    >
      {label}
    </Link>
  ));

  return (
    <>
      <menu className="md:flex gap-2 items-center hidden">{menuItemsJsx}</menu>
      <menu className="flex flex-col md:hidden">
        <button
          type="button"
          className="border border-white rounded-sm"
          popoverTarget="burgerMenu"
        >
          <IoMenu className="w-8 h-8" />
        </button>
      </menu>
      <dialog
        id="burgerMenu"
        ref={burgerMenuRef}
        popover=""
        className="bg-transparent justify-center items-center min-h-screen w-full opacity-85 p-2"
        onClick={() => burgerMenuRef.current?.hidePopover()}
      >
        <div className="bg-primary flex flex-col w-screen p-9 items-center rounded-lg gap-10">
          {menuItemsJsx}
        </div>
      </dialog>
      <ThemeSwitcher />
    </>
  );
}
