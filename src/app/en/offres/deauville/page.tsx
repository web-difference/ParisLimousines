import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PriceGauge from "@/components/PriceGauge";

export const metadata: Metadata = {
  title: "Deauville trip | Prestige offer | Star Limousine Paris",
  description: "Prestige day by limousine: Paris–Deauville round-trip, 6 hours on site, champagne and soft drinks included. The chic escape.",
};

export default function EnOffreDeauville() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-deauville.png"
            alt="Deauville trip in a limousine"
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
                Deauville trip
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Prestige escape by limousine
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
                alt="Deauville trip in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Prestige escape by limousine
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Treat yourself to an exceptional getaway to Deauville and travel in the absolute comfort of a chauffeured limousine.
                From Paris, enjoy a round-trip to Deauville in a chic, relaxed atmosphere. Once there, your limousine stays at your disposal for 6 hours to take you wherever you like: beach, casino, restaurants, shopping or a simple stroll.
                On board, two bottles of champagne plus soft drinks are included to make your escape even more enjoyable.
              </p>
              <p className="text-white/70 mb-4 leading-relaxed">
                Whether for a birthday, a day out with friends, a romantic moment or just for the pleasure of it, enjoy an elegant, festive and unforgettable experience.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">The package includes:</p>
                <ul className="space-y-1">
                  <li>• Round-trip Paris–Deauville by limousine</li>
                  <li>• 6 hours on site, vehicle and chauffeur at your disposal</li>
                  <li>• 2 bottles of champagne included</li>
                  <li>• Soft drinks (Coca-Cola, Fanta, etc.) available</li>
                </ul>
              </div>
              <PriceGauge
                locale="en"
                fixedPrice={950}
                subtitle="round-trip, 6 hours on site, 2 bottles of champagne and soft drinks included"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/en/prestations" className="text-white/60 hover:text-white text-sm transition-colors">
              ← Back to experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
