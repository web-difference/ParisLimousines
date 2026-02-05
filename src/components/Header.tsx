"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Starfield from "./Starfield";

const leftNavLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Expériences" },
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
            <li>
              <a
                href="https://wa.me/33645373229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-black px-5 py-2.5 rounded-full bg-[#FB25E2]/30 text-white hover:bg-[#FB25E2]/50 border border-[#FB25E2]/50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
              >
                <FaCalendarAlt className="w-7 h-7 shrink-0" aria-hidden />
                RÉSERVER
              </a>
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
                <a
                  href="https://wa.me/33645373229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xl font-black px-5 py-2.5 rounded-full bg-[#FB25E2]/30 text-white hover:bg-[#FB25E2]/50 border border-[#FB25E2]/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaCalendarAlt className="w-7 h-7 shrink-0" aria-hidden />
                  RÉSERVER
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
