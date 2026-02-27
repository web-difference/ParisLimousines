import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Soirée striptease en limousine | Offre prestige | Star Limousine Paris",
  description: "20 minutes dans la limousine avec nos stripteaseuses, show privé et confidentiel. EVJF, anniversaires, soirées privées.",
};

export default function OffreStriptease() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-striptease-limousine.png"
            alt="Soirée striptease en limousine"
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
                Soirée striptease
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Show privé et confidentiel à bord
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
                src="/experience-striptease-limousine.png"
                alt="Soirée striptease en limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Un moment d&apos;exception en limousine
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Offrez-vous une expérience exclusive et inoubliable à bord d&apos;une limousine entièrement privatisée. Pendant 20 minutes, profitez d&apos;un show privé assuré par nos stripteaseuses professionnelles, dans une ambiance feutrée, élégante et totalement confidentielle.
                Un moment unique à partager entre amis pour marquer les esprits et célébrer vos événements comme il se doit.
                Idéal pour un EVJF, un anniversaire ou une soirée privée, cette option prestige apportera une touche glamour et originale à votre événement.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">La prestation comprend :</p>
                <ul className="space-y-1">
                  <li>• 20 minutes de show privé dans la limousine</li>
                  <li>• Stripteaseuses professionnelles</li>
                  <li>• Limousine entièrement privatisée</li>
                  <li>• Confidentialité et discrétion garanties</li>
                  <li>• Idéal pour EVJF, anniversaires, soirées privées</li>
                </ul>
              </div>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                Nous contacter pour un devis
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
