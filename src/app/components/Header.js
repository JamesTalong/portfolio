"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assets } from "../assets/Assets.jsx";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About Me", icon: <FaUser /> },
    { href: "/skills", label: "Skills", icon: <FaCode /> },
    { href: "/portfolio", label: "Portfolio", icon: <FaBriefcase /> },
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
              className={`text-sm sm:text-base px-3 py-2 rounded-md flex items-center gap-1 transition-all duration-200
                ${
                  pathname === link.href
                    ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {/* Show icon on small screens, label on medium and up */}
              <span className="sm:hidden">{link.icon}</span>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 flex items-center gap-1"
          >
            <span className="sm:hidden">
              <FaEnvelope />
            </span>
            <span className="hidden sm:inline">Contact Me</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
