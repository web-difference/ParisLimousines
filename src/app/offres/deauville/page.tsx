import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PriceGauge from "@/components/PriceGauge";

export const metadata: Metadata = {
  title: "Balade à Deauville | Offre prestige | Star Limousine Paris",
  description: "Journée prestige en limousine : Paris–Deauville aller-retour, 6 h sur place, champagne et softs inclus. L'évasion chic.",
};

export default function OffreDeauville() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-deauville.png"
            alt="Balade à Deauville en limousine"
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
                Balade à Deauville
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                L&apos;évasion prestige en limousine
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
                src="/experience-deauville.png"
                alt="Balade à Deauville en limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                L&apos;évasion prestige en limousine
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Offrez-vous une parenthèse d&apos;exception à Deauville et voyagez dans le confort absolu d&apos;une limousine avec chauffeur.
                Au départ de Paris, profitez d&apos;un trajet aller-retour vers Deauville dans une ambiance chic et conviviale. Une fois sur place, votre limousine reste à votre disposition pendant 6 heures pour vous accompagner où vous le souhaitez : plage, casino, restaurants, shopping ou simple promenade.
                À bord, deux bouteilles de champagne ainsi que des soft drinks sont inclus pour rendre votre escapade encore plus agréable.
              </p>
              <p className="text-white/70 mb-4 leading-relaxed">
                Que ce soit pour un anniversaire, une sortie entre amis, un moment romantique ou simplement pour le plaisir, vivez une expérience élégante, festive et inoubliable.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">La prestation comprend :</p>
                <ul className="space-y-1">
                  <li>• Trajet aller-retour Paris–Deauville en limousine</li>
                  <li>• 6 heures sur place, véhicule avec chauffeur à disposition</li>
                  <li>• 2 bouteilles de champagne incluses</li>
                  <li>• Soft drinks (Coca-Cola, Fanta, etc.) à disposition</li>
                </ul>
              </div>
              <PriceGauge
                fixedPrice={950}
                subtitle="trajets aller-retour, 6 h sur place, 2 bouteilles de champagne et softs inclus"
              />
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
