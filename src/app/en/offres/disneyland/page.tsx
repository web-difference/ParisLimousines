import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disneyland Paris Transfer | Prestige offer | Star Limousine Paris",
  description: "Paris–Disneyland limousine transfer: hotel pickup, drop-off at park entrance. One-way or round-trip. Up to 8 passengers.",
  alternates: { canonical: "/en/offres/disneyland" },
};

export default function EnOffreDisneyland() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-disneyland.png"
            alt="Disneyland Paris transfer in a limousine"
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
                Disneyland Paris Transfer
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Comfort and magic right to the park entrance
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
                alt="Disneyland Paris transfer in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Prestige transfer Paris – Disneyland
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Head to Disneyland Paris in the comfort of a chauffeur-driven limousine. You are picked up at your hotel in Paris in the morning, with a direct transfer with no stops to the Disneyland Paris park entrance.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                Round-trip option: the limousine waits at the park entrance at the end of your day to take you back to your hotel in Paris. Up to 8 passengers, no champagne included.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">The package includes:</p>
                <ul className="space-y-1">
                  <li>• Pickup at your hotel in Paris</li>
                  <li>• Direct transfer with no stops to the park entrance</li>
                  <li>• Limousine with chauffeur, up to 8 passengers</li>
                  <li>• Round-trip: limousine waits at park entrance for return</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02]">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">One-way</h3>
                  <p className="text-white/60 text-sm mb-3">Paris (hotel) → Disneyland park entrance</p>
                  <p className="font-display text-2xl font-semibold text-[#F34FC7]">250 €</p>
                  <p className="text-white/50 text-xs mt-1">Max 8 passengers • No champagne</p>
                </div>
                <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02]">
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Round-trip</h3>
                  <p className="text-white/60 text-sm mb-3">Morning: Paris → Park • Evening: Park → Paris (hotel)</p>
                  <p className="font-display text-2xl font-semibold text-[#F34FC7]">450 €</p>
                  <p className="text-white/50 text-xs mt-1">Max 8 passengers • No champagne • Limousine waits at exit</p>
                </div>
              </div>

              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                Book or request a quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
