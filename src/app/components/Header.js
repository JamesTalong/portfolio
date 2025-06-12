"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "../assets/Assets.jsx"; // Adjust the path as necessary

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/skills", label: "Skills" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={assets.logo}
            alt="Logo"
            width={42}
            height={36}
            className="dark:invert"
          />
        </Link>

        <nav className="flex items-center space-x-4 sm:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm sm:text-base px-3 py-2 rounded-md transition-all duration-200
                ${
                  pathname === link.href
                    ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-200"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
