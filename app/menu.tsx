"use client";

import Link from "next/link";
import "./menu.css";
import { useRef } from "react";
import { IoMenu } from "react-icons/io5";

type MenuItem = { url: string; label: string };

export default function Menu() {
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
      className="hover:bg-pink-400 p-2 rounded-sm text-white text-lg font-bold"
      onClick={() => burgerMenuRef.current?.hidePopover()}
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
        className="fixed top-16 bg-primary flex-col gap-10 justify-center items-center w-full rounded-sm opacity-85"
      >
        {menuItemsJsx}
      </dialog>
    </>
  );
}
