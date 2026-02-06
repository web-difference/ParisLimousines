import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import Starfield from "./Starfield";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <Starfield />
      <div className="absolute inset-0 bg-[#0a0a0a]/70 pointer-events-none" aria-hidden />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Star Paris Limousine"
                width={280}
                height={95}
                className="h-24 md:h-28 w-auto opacity-95"
              />
            </Link>
            <p className="text-white/60 text-sm max-w-xs">
              Expérience prestige en longue limousine blanche de luxe à Paris. Vivez une soirée inoubliable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Navigation</p>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white/70 hover:text-[#ec4899] text-sm transition-colors">Accueil</Link></li>
                <li><Link href="/prestations" className="text-white/70 hover:text-[#ec4899] text-sm transition-colors">Prestations</Link></li>
                <li><Link href="/tarifs" className="text-white/70 hover:text-[#ec4899] text-sm transition-colors">Tarifs</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-[#ec4899] text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Légal</p>
              <ul className="space-y-2">
                <li><Link href="/mentions-legales" className="text-white/70 hover:text-[#FB25E2] text-sm transition-colors">Mentions légales</Link></li>
                <li><Link href="/politique-de-confidentialite" className="text-white/70 hover:text-[#FB25E2] text-sm transition-colors">Politique de confidentialité</Link></li>
                <li><Link href="/cgv" className="text-white/70 hover:text-[#FB25E2] text-sm transition-colors">Conditions générales de vente (CGV)</Link></li>
                <li><Link href="/cgu" className="text-white/70 hover:text-[#FB25E2] text-sm transition-colors">Conditions générales d&apos;utilisation (CGU)</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Réserver</p>
              <a
                href="tel:0762830309"
                className="inline-flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/10 text-[#FB25E2] font-bold text-[1.2rem] md:text-[1.3rem] hover:bg-white/10 hover:border-[#FB25E2]/30 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#FB25E2]/15 shrink-0">
                  <FaPhoneAlt className="w-5 h-5" aria-hidden />
                </span>
                <span className="tracking-wide">07 62 83 03 09</span>
              </a>
              <a
                href="https://wa.me/33762830309"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-xl bg-[#FB25E2]/20 px-4 py-3 border border-[#FB25E2]/50 text-white font-black text-lg hover:bg-[#FB25E2]/40 hover:border-[#FB25E2]/70 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#FB25E2]/30 shrink-0">
                  <FaCalendarAlt className="w-5 h-5" aria-hidden />
                </span>
                <span className="tracking-wide">RÉSERVER</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Star Paris Limousine</p>
          <a
          href="https://webdifference.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#71DDAE] text-lg hover:text-[#71DDAE]/90 transition-colors"
        >
          <span className="font-normal">Site web réalisé par </span>
          <Image src="/webdifference-icon.png" alt="" width={28} height={28} className="w-7 h-7 shrink-0 inline-block" />
          <span className="font-bold underline"> WebDifference</span>
        </a>
        </div>
      </div>
    </footer>
  );
}
