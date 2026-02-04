"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Starfield from "./Starfield";

const leftNavLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Expérience" },
];

const rightNavLinks = [
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative w-full border-b border-white/10 overflow-hidden bg-[#0a0a0a]">
      <Starfield />
      <div className="absolute inset-0 bg-[#0a0a0a]/60 pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-center h-24 md:h-36 gap-12 md:gap-20 lg:gap-32">
          {/* Left nav */}
          <ul className="hidden md:flex items-center gap-12 md:gap-20 lg:gap-28">
            {leftNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg md:text-xl font-black text-white hover:text-[#FB25E2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo - centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:relative md:left-0 md:translate-x-0 md:top-0 md:translate-y-0 flex-shrink-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Star Paris Limousine"
              width={280}
              height={95}
              className="h-20 w-auto md:h-28"
              priority
            />
          </Link>

          {/* Right nav */}
          <ul className="hidden md:flex items-center gap-12 md:gap-20 lg:gap-28">
            {rightNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg md:text-xl font-black text-white hover:text-[#FB25E2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="relative group">
              <a
                href="tel:0645373229"
                className="text-lg md:text-xl font-black text-white hover:text-[#FB25E2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
              >
                Réserver
              </a>
              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-white/10 rounded text-xs font-medium text-white/90 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                06 45 37 32 29
              </span>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10">
            <ul className="flex flex-col gap-5">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-lg font-black text-white hover:text-[#FB25E2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="tel:0645373229" className="block text-lg font-black text-white hover:text-[#FB25E2] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors">
                  Réserver — 06 45 37 32 29
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
