import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Striptease evening in a limousine | Prestige offer | Star Limousine Paris",
  description: "20 minutes in the limousine with our performers, private and confidential show. Bachelorette parties, birthdays, private events.",
};

export default function EnOffreStriptease() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/experience-striptease-limousine.png"
            alt="Striptease evening in a limousine"
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
                Striptease evening
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Private and confidential show on board
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
                alt="Striptease evening in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                An exceptional moment in a limousine
              </h2>
              <p className="text-white/70 mb-6 leading-relaxed">
                Treat yourself to an exclusive, unforgettable experience in a fully private limousine. For 20 minutes, enjoy a private show by our professional performers, in an intimate, elegant and fully confidential setting.
                A unique moment to share with friends to make an impression and celebrate your events in style.
                Ideal for a bachelorette party, birthday or private party, this prestige option adds a glamorous, original touch to your event.
              </p>
              <div className="space-y-2 text-white/80 text-sm mb-8">
                <p className="font-semibold text-white">The package includes:</p>
                <ul className="space-y-1">
                  <li>• 20 minutes of private show in the limousine</li>
                  <li>• Professional performers</li>
                  <li>• Fully private limousine</li>
                  <li>• Confidentiality and discretion guaranteed</li>
                  <li>• Ideal for bachelorette parties, birthdays, private events</li>
                </ul>
              </div>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity"
              >
                Contact us for a quote
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
