import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Star Paris Limousine"
                width={140}
                height={45}
                className="h-9 w-auto opacity-95"
              />
            </Link>
            <p className="text-white/60 text-sm max-w-xs">
              Expérience prestige en limousine blanche de luxe à Paris. Vivez une soirée inoubliable.
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
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Réserver</p>
              <a href="tel:0645373229" className="text-[#ec4899] font-medium hover:text-[#f472b6] transition-colors">06 45 37 32 29</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Star Paris Limousine</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-white/50 hover:text-[#ec4899] text-sm transition-colors">Mentions légales</Link>
            <Link href="/contact" className="text-white/50 hover:text-[#ec4899] text-sm transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
