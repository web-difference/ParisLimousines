"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import Starfield from "./Starfield";

function pathForLocale(locale: "fr" | "en", path: string) {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "fr";

  const t = locale === "en" ? {
    tagline: "Prestige luxury white limousine experience in Paris. Live an unforgettable evening.",
    nav: "Navigation",
    home: "Home",
    experiences: "Experiences",
    pricing: "Pricing",
    contact: "Contact",
    legal: "Legal",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    termsSale: "Terms and conditions of sale",
    termsUse: "Terms of use",
    book: "Book",
    websiteBy: "Website by ",
  } : {
    tagline: "Expérience prestige en longue limousine blanche de luxe à Paris. Vivez une soirée inoubliable.",
    nav: "Navigation",
    home: "Accueil",
    experiences: "Prestations",
    pricing: "Tarifs",
    contact: "Contact",
    legal: "Légal",
    legalNotice: "Mentions légales",
    privacy: "Politique de confidentialité",
    termsSale: "Conditions générales de vente (CGV)",
    termsUse: "Conditions générales d'utilisation (CGU)",
    book: "RÉSERVER",
    websiteBy: "Site web réalisé par ",
  };

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <Starfield />
      <div className="absolute inset-0 bg-[#0a0a0a]/70 pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <Link href={pathForLocale(locale, "/")} className="inline-block mb-4">
              <Image
                src="/logo3.png"
                alt="Star Limousine Paris"
                width={280}
                height={95}
                className="h-36 md:h-40 w-auto opacity-95"
              />
            </Link>
            <p className="text-white/60 text-sm max-w-xs mb-2">
              {t.tagline}
            </p>
            <p className="text-white/50 text-xs">27 rue Baron, 75017 Paris, France</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{t.nav}</p>
              <ul className="space-y-2">
                <li><Link href={pathForLocale(locale, "/")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.home}</Link></li>
                <li><Link href={pathForLocale(locale, "/prestations")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.experiences}</Link></li>
                <li><Link href={pathForLocale(locale, "/tarifs")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.pricing}</Link></li>
                <li><Link href={pathForLocale(locale, "/contact")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.contact}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{t.legal}</p>
              <ul className="space-y-2">
                <li><Link href={pathForLocale(locale, "/mentions-legales")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.legalNotice}</Link></li>
                <li><Link href={pathForLocale(locale, "/politique-de-confidentialite")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.privacy}</Link></li>
                <li><Link href={pathForLocale(locale, "/cgv")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.termsSale}</Link></li>
                <li><Link href={pathForLocale(locale, "/cgu")} className="text-white/70 hover:text-[#F34FC7] text-sm transition-colors">{t.termsUse}</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{t.book}</p>
              <a
                href="tel:0699717759"
                className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/10 text-[#F34FC7] font-bold text-[1.2rem] md:text-[1.3rem] hover:bg-white/10 hover:border-[#F34FC7]/30 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F34FC7]/15 shrink-0">
                  <FaPhoneAlt className="w-5 h-5" aria-hidden />
                </span>
                <span className="tracking-wide">06 99 71 77 59</span>
              </a>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-xl bg-brand-gradient px-4 py-3 border border-transparent text-white font-black text-lg hover:opacity-90 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F34FC7]/30 shrink-0">
                  <FaCalendarAlt className="w-5 h-5" aria-hidden />
                </span>
                <span className="tracking-wide">{locale === "en" ? "BOOK" : "RÉSERVER"}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Star Limousine Paris</p>
          <a
            href="https://webdifference.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-lg hover:text-white/90 transition-colors font-medium"
          >
            <span>{t.websiteBy}</span>
            <Image src="/webdifference-icon4.png" alt="" width={28} height={28} className="w-7 h-7 shrink-0 inline-block" />
            <span className="font-bold underline">WebDifference</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
