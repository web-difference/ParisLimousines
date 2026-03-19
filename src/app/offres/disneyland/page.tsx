import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Transfert Disneyland Paris | Offre prestige | Star Limousine Paris",
  description: "Transfert Paris–Disneyland en limousine : prise en charge à l'hôtel, dépose à l'entrée du parc. Aller simple ou aller-retour. Jusqu'à 8 passagers.",
  alternates: { canonical: "/offres/disneyland" },
};

export default function OffreDisneyland() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-disneyland.png"
            alt="Transfert Disneyland Paris en limousine"
            fill
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                Transfert Disneyland Paris
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Confort et magie jusqu&apos;à l&apos;entrée du parc
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/experience-disneyland.png"
                alt="Transfert Disneyland Paris en limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Transfert prestige Paris – Disneyland
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Partez à l&apos;aventure Disneyland dans le confort d&apos;une limousine avec chauffeur. Vous êtes récupérés à votre hôtel dans Paris le matin, avec un transfert direct sans arrêt jusqu&apos;à l&apos;entrée du parc Disneyland Paris.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                En option aller-retour : la limousine vous attend devant l&apos;entrée du parc à la fin de votre journée pour vous ramener à votre hôtel dans Paris. Jusqu&apos;à 8 passagers, sans champagne.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">La prestation comprend :</p>
                <ul className="space-y-1">
                  <li>• Prise en charge à l&apos;hôtel dans Paris</li>
                  <li>• Transfert direct sans arrêt jusqu&apos;à l&apos;entrée du parc</li>
                  <li>• Limousine avec chauffeur, jusqu&apos;à 8 passagers</li>
                  <li>• Aller-retour : attente à l&apos;entrée du parc pour le retour</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02]">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Aller simple</h3>
                  <p className="text-white/60 text-sm mb-3">Paris (hôtel) → Entrée du parc Disneyland</p>
                  <p className="font-display text-2xl font-semibold text-[#F34FC7]">250 €</p>
                  <p className="text-white/50 text-xs mt-1">Max 8 passagers • Sans champagne</p>
                </div>
                <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02]">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Aller-retour</h3>
                  <p className="text-white/60 text-sm mb-3">Matin : Paris → Parc • Soir : Parc → Paris (hôtel)</p>
                  <p className="font-display text-2xl font-semibold text-[#F34FC7]">450 €</p>
                  <p className="text-white/50 text-xs mt-1">Max 8 passagers • Sans champagne • Limousine vous attend à la sortie</p>
                </div>
              </div>

              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                Réserver ou demander un devis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/prestations" className="text-white/60 hover:text-white text-sm transition-colors">
              ← Retour aux expériences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
