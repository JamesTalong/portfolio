"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { assets } from "../assets/Assets"; // Assuming this path is correct

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaUser /> },
    { href: "/skills", label: "Skills", icon: <FaCode /> },
    { href: "/portfolio", label: "Portfolio", icon: <FaBriefcase /> },
  ];

  return (
    // On small screens (mobile), this header is a fixed bar at the bottom.
    // On medium screens and larger, it becomes a sticky header at the top.
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Image
              src={assets.logo}
              alt="Logo"
              width={42}
              height={36}
              className="dark:invert"
            />
          </div>

          {/* Navigation */}
          {/* On mobile, nav takes full width. On desktop, it aligns to the end. */}
          <nav className="w-full md:w-auto">
            {/* Flex container for all links */}
            {/* On mobile, links are spaced-around. On desktop, they are in a row with gaps. */}
            <div className="flex w-full justify-around md:flex-row md:items-center md:justify-end md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm transition-all duration-200
                    md:text-base
                    ${
                      pathname === link.href
                        ? "text-blue-600 dark:text-blue-400 md:bg-gray-100 md:dark:bg-gray-700"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                >
                  <span className="text-2xl md:text-lg">{link.icon}</span>
                  <span className="hidden md:inline">{link.label}</span>
                </Link>
              ))}

              <Link
                href="/contact"
                // Mobile: Styled as a regular nav icon
                // Desktop: Styled as a prominent button
                className="flex items-center justify-center gap-2 rounded-md px-3 py-2 text-gray-600 transition-all duration-200 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400
                md:rounded-full md:bg-blue-600 md:px-4 md:text-white md:hover:bg-blue-700 md:dark:bg-blue-500 md:dark:hover:bg-blue-600"
              >
                <FaEnvelope className="text-2xl md:text-lg" />
                <span className="hidden md:inline">Contact Me</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
