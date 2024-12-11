"use client";

import { Logo } from "@/design-system/logo/logo";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl text-primary-200 bg-primary-800 z-50">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        {/* Logo */}
        <Logo size="small" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex tittle text-white space-x-8">
          {[
            { href: "/", label: "Accueil" },
            { href: "/about", label: "À propos" },
            { href: "/colorimetry", label: "Colorimétrie" },
            { href: "/morphology", label: "Morphologique" },
            { href: "/fashion", label: "Style" },
            { href: "/wardrobe", label: "Dressing" },
            { href: "/testimonial", label: "Livre d’or" },
            { href: "/contact", label: "Contact" },
          ].map((menuItem) => (
            <li key={menuItem.href} className="group text-xl">
              <Link
                href={menuItem.href}
                className="relative hover:text-tercary-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-tercary-200 after:transition-all after:duration-1000  after:ease-in-out group-hover:after:w-full"
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Social Links */}
        <ul className="hidden lg:flex space-x-2">
          <li>
            <a
              href="https://www.instagram.com/relookingstudio/"
              className="text-white border hover:border-tercary-200 rounded-full flex items-center justify-center p-2"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/relookingstudio/"
              className="text-white border hover:border-tercary-200 rounded-full flex items-center justify-center p-2"
            >
              <FaSquareFacebook size={24} />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          onClick={handleNav}
          className="lg:hidden cursor-pointer text-primary-200"
        >
          <AiOutlineMenu size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full lg:hidden h-screen bg-primary-800 p-10 ease-in duration-500 transform translate-y-0"
            : "fixed left-0 top-0 w-full lg:hidden h-screen bg-primary-800 p-10 ease-in duration-500 transform -translate-y-full"
        }
      >
        <div className="flex items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer text-primary-200">
            <AiOutlineClose size={24} />
          </div>
        </div>
        <div className="flex-col">
          <Logo size="very-small" />
          <ul className="flex-col py-3">
            {[
              { href: "/", label: "Accueil" },
              { href: "/about", label: "À propos" },
              { href: "/colorimetry", label: "Colorimétrie" },
              { href: "/morphology", label: "Morphologique" },
              { href: "/fashion", label: "Style" },
              { href: "/wardrobe", label: "Dressing" },
              { href: "/testimonial", label: "Livre d’or" },
              { href: "/contact", label: "Contact" },
            ].map((menuItem) => (
              <li key={menuItem.href} className="group py-4 text-xl">
                <Link
                  href={menuItem.href}
                  className="relative hover:text-tercary-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-tercary-200 after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex">
            <li className="pr-4">
              <a
                href="https://www.instagram.com/relookingstudio/"
                className="text-white border hover:border-tercary-200 rounded-full flex items-center justify-center p-2"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="pr-4">
              <a
                href="https://www.instagram.com/relookingstudio/"
                className="text-white border hover:border-tercary-200 rounded-full flex items-center justify-center p-2"
              >
                <FaSquareFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
