"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Starfield from "./Starfield";

const leftNavLinks = [
  { href: "/", labelFr: "Accueil", labelEn: "Home" },
  { href: "/prestations", labelFr: "Expériences", labelEn: "Experiences" },
];

const rightNavLinks = [
  { href: "/tarifs", labelFr: "Tarifs", labelEn: "Pricing" },
  { href: "/contact", labelFr: "Contact", labelEn: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/" || href === "/en") return pathname === href;
  return pathname.startsWith(href);
}

function pathForLocale(locale: "fr" | "en", path: string) {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = pathname.startsWith("/en") ? "en" : "fr";

  const goToLocale = (newLocale: "fr" | "en") => {
    if (newLocale === "fr") {
      const path = pathname.replace(/^\/en\/?/, "/") || "/";
      router.push(path);
    } else {
      if (pathname.startsWith("/en")) return;
      const path = pathname === "/" ? "/en" : `/en${pathname}`;
      router.push(path);
    }
  };

  return (
    <header className="relative w-full border-b border-white/10 overflow-visible bg-[#0a0a0a] -mt-px">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <Starfield />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-center h-24 md:h-36 gap-12 md:gap-20 lg:gap-32">
          {/* Left nav */}
          <ul className="hidden md:flex items-center gap-12 md:gap-20 lg:gap-28">
            {leftNavLinks.map((link) => {
              const href = pathForLocale(locale, link.href);
              const label = locale === "en" ? link.labelEn : link.labelFr;
              return (
                <li key={link.href}>
                  <Link
                    href={href}
                    className={`text-lg md:text-xl font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors ${isActive(pathname, href) ? "text-brand-gradient" : "text-white hover:text-brand-gradient"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logo - centered */}
          <Link href={pathForLocale(locale, "/")} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:relative md:left-0 md:translate-x-0 md:top-0 md:translate-y-0 shrink-0 flex items-center justify-center w-[min(320px,72vw)] md:w-auto">
            <Image
              src="/logo3.png"
              alt="Star Limousine Paris"
              width={280}
              height={95}
              className="h-28 w-auto max-w-full object-contain object-center md:h-40"
              priority
            />
          </Link>

          {/* Right nav */}
          <ul className="hidden md:flex items-center gap-12 md:gap-20 lg:gap-28">
            {rightNavLinks.map((link) => {
              const href = pathForLocale(locale, link.href);
              const label = locale === "en" ? link.labelEn : link.labelFr;
              return (
                <li key={link.href}>
                  <Link
                    href={href}
                    className={`text-lg md:text-xl font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors ${isActive(pathname, href) ? "text-brand-gradient" : "text-white hover:text-brand-gradient"}`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-black px-5 py-2.5 rounded-full bg-brand-gradient text-white hover:opacity-90 border border-[#F34FC7]/50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors"
              >
                <FaCalendarAlt className="w-7 h-7 shrink-0" aria-hidden />
                {locale === "en" ? "BOOK" : "RÉSERVER"}
              </a>
            </li>
            <li>
              <div className="flex items-center gap-0.5 rounded-full bg-white px-2 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/90 ring-inset">
                <button
                  type="button"
                  onClick={() => goToLocale("fr")}
                  className={`p-1.5 rounded-full text-[1.75rem] leading-none transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/40 focus:ring-offset-2 focus:ring-offset-white ${locale === "fr" ? "opacity-100" : "opacity-40 hover:opacity-60"}`}
                  aria-label="Français"
                  title="Français"
                >
                  <span role="img" aria-hidden>🇫🇷</span>
                </button>
                <button
                  type="button"
                  onClick={() => goToLocale("en")}
                  className={`p-1.5 rounded-full text-[1.75rem] leading-none transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/40 focus:ring-offset-2 focus:ring-offset-white ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-60"}`}
                  aria-label="English (US)"
                  title="English (US)"
                >
                  <span role="img" aria-hidden>🇺🇸</span>
                </button>
              </div>
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
              {[...leftNavLinks, ...rightNavLinks].map((link) => {
                const href = pathForLocale(locale, link.href);
                const label = locale === "en" ? link.labelEn : link.labelFr;
                return (
                  <li key={link.href}>
                    <Link
                      href={href}
                      className={`block text-lg font-black drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] transition-colors ${isActive(pathname, href) ? "text-brand-gradient" : "text-white hover:text-brand-gradient"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="https://wa.me/33699717759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xl font-black px-5 py-2.5 rounded-full bg-brand-gradient text-white hover:opacity-90 border border-[#F34FC7]/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaCalendarAlt className="w-7 h-7 shrink-0" aria-hidden />
                  {locale === "en" ? "BOOK" : "RÉSERVER"}
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-0.5 rounded-full bg-white px-2 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/90 ring-inset">
                  <button
                    type="button"
                    onClick={() => goToLocale("fr")}
                    className={`p-1.5 rounded-full text-[1.75rem] leading-none transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/40 focus:ring-offset-2 focus:ring-offset-white ${locale === "fr" ? "opacity-100" : "opacity-40 hover:opacity-60"}`}
                    aria-label="Français"
                    title="Français"
                  >
                    <span role="img" aria-hidden>🇫🇷</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => goToLocale("en")}
                    className={`p-1.5 rounded-full text-[1.75rem] leading-none transition-opacity focus:outline-none focus:ring-2 focus:ring-[#F34FC7]/40 focus:ring-offset-2 focus:ring-offset-white ${locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-60"}`}
                    aria-label="English (US)"
                    title="English (US)"
                  >
                    <span role="img" aria-hidden>🇺🇸</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
