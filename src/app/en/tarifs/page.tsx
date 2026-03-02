import Image from "next/image";
import Link from "next/link";
import PriceGauge from "@/components/PriceGauge";

export default function EnTarifs() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Star Limousine Paris pricing"
            fill
            className="object-cover object-[50%_35%]"
            sizes="100vw"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-2xl mx-auto leading-tight">
                Our pricing
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Fixed packages, 1 to 8 people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-left mb-14">
            Our <span className="uppercase text-brand-gradient">offers</span>
          </h2>
        </div>
      </section>

      <section id="etudiants" className="pt-8 md:pt-12 pb-20 md:pb-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/experience-soiree-etudiante.png"
                  alt="Student night in a limousine"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              </div>
              <span className="absolute top-0 -right-1 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#D1238D] border border-[#F34FC7]/50 text-white text-base font-black z-10">
                Thursdays only
              </span>
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <Link href="/en/prestations#soiree-etudiante" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Student night experience →
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Student package
              </h2>
              <p className="text-white/60 mb-6">Festive night with friends. 1-hour ride only. Up to 8 people, champagne, music, light effects, drop-off in front of the nightclub of your choice.</p>
              <Link href="/en/prestations#soiree-etudiante" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mb-6">
                Discover the experience →
              </Link>
              <PriceGauge locale="en" fixedPrice={199} subtitle="for 1-hour ride with drop-off in front of the nightclub of your choice. Champagne included." />
            </div>
          </div>
        </div>
      </section>

      <section id="formule-classique" className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/experience-paris-by-night.png"
                alt="Paris by night in a limousine"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/en/prestations#paris-by-night" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Paris by night experience →
                </Link>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Classic package
              </h2>
              <p className="text-white/60 mb-2 max-w-xl">
                Paris by night, student night, birthday, bachelorette/bachelor — fixed price for 1 to 8 people.
              </p>
              <Link href="/en/prestations" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mt-2">
                Discover all experiences →
              </Link>
              <PriceGauge locale="en" />
            </div>
          </div>
        </div>
      </section>

      <section id="anniversaire" className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/experience-anniversaire.png"
                alt="Birthday in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/en/prestations#anniversaire" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Birthday package experience →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Birthday package
              </h2>
              <p className="text-white/60 mb-4">2-hour ride. Up to 8 people.</p>
              <Link href="/en/prestations#anniversaire" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mb-4">
                Discover the experience →
              </Link>
              <div className="max-w-2xl space-y-2 text-white/80 text-sm mb-6">
                <p>Birthday cake included for 8 people</p>
                <p>Champagne included</p>
                <p>Alcohol-free champagne on request</p>
                <p>Unlimited Coca-Cola, Fanta, Champomy</p>
              </div>
              <PriceGauge locale="en" fixedPrice={320} subtitle="for 2-hour ride" />
            </div>
          </div>
        </div>
      </section>

      <section id="mariage" className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/experience-mariage.png"
                alt="Wedding in a limousine"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/en/prestations" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Wedding experience →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Wedding package
              </h2>
              <p className="text-white/60 mb-2">7 days a week · Paris and suburbs</p>
              <Link href="/en/prestations#mariage" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mb-4">
                Discover Wedding experience →
              </Link>
              <div className="max-w-2xl space-y-2 text-white/80 text-sm mb-6">
                <p>Chrome or pink tulle decoration included on request</p>
                <p>Champagne with or without alcohol included</p>
                <p>Soft drinks (Coca-Cola, Fanta) included</p>
                <p>
                  Optional flower bouquet in your colors:{" "}
                  <span className="text-[#F34FC7] font-semibold">+ €90</span>
                </p>
              </div>
              <PriceGauge locale="en" />
            </div>
          </div>
        </div>
      </section>

      <section id="soiree-crepes" className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/experience-soiree-crepes.png"
                alt="Crêpes night"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                  Crêpes night
                </h2>
                <p className="text-white/60 mb-2">
                  Food tour of Paris with crêpes on board. A unique, fun package.
                </p>
                <Link href="/en/prestations#soiree-crepes" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Discover the experience →
                </Link>
              </div>

              <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02] hover:border-[#F34FC7]/40 transition-colors">
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  1h30 ride with photo stops
                </h3>
                <p className="text-white/60 mb-2 text-sm">
                  8 homemade sugar crêpes per person
                </p>
                <p className="text-white/60 mb-2 text-sm">
                  Breton cider (with or without alcohol on request)
                </p>
                <p className="text-white/50 text-xs mb-4">Monday, Tuesday, Wednesday only</p>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-2xl font-semibold text-white">€220</span>
                  <span className="text-[#F34FC7]/80 text-sm font-semibold">
                    €27.50 per person
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl border-2 border-[#F34FC7]/30 bg-white/[0.02] hover:border-[#F34FC7]/40 transition-colors">
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  1h30 ride with photo stops
                </h3>
                <p className="text-white/60 mb-1 text-sm">Sweet &amp; savory crêpes night:</p>
                <ul className="text-white/60 mb-4 text-sm list-disc list-inside space-y-0.5">
                  <li>2 salmon crêpes, 2 cheese crêpes, 4 sweet crêpes</li>
                  <li>Breton cider (with or without alcohol on request)</li>
                </ul>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-2xl font-semibold text-white">€280</span>
                  <span className="text-[#F34FC7]/80 text-sm font-semibold">
                    €35 per person
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full py-6 md:py-8 bg-brand-gradient" aria-hidden />
      <section id="balade-deauville" className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-left mb-14">
            Our <span className="uppercase text-brand-gradient">prestige</span> offers
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/experience-deauville.png"
                alt="Deauville trip in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/en/offres/deauville" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Deauville trip offer →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Deauville trip
              </h3>
              <p className="text-white/60 mb-4">Round-trip. 6 hours on site, limousine at your disposal. 2 bottles of champagne and soft drinks included.</p>
              <Link href="/en/offres/deauville" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mb-4">
                Discover the offer →
              </Link>
              <div className="max-w-2xl space-y-2 text-white/80 text-sm mb-6">
                <p>Round-trip</p>
                <p>6 hours on site, limousine at your disposal</p>
                <p>2 bottles of champagne included</p>
                <p>Coca-Cola, Fanta available</p>
              </div>
              <PriceGauge locale="en" fixedPrice={950} subtitle="round-trip, 6 hours on site, 2 bottles of champagne and soft drinks included" />
            </div>
          </div>

          <div id="striptease" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/experience-striptease-limousine.png"
                alt="Striptease evening in a limousine"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4">
                <Link href="/en/offres/striptease" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                  View Striptease evening offer →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
                Striptease evening
              </h3>
              <p className="text-white/60 mb-4">20 minutes in the limousine with our performers, private and confidential show. Ideal for bachelorette parties, birthdays or private events.</p>
              <Link href="/en/offres/striptease" className="inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm mb-3">
                Discover the offer →
              </Link>
              <div className="mt-1">
                <a
                  href="https://wa.me/33699717759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity"
                >
                  Contact us for a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white text-center mb-4">
            These rates apply to our experiences
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            Choose the experience that fits you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: "paris-by-night", img: "/experience-paris-by-night.png", title: "Paris by night" },
              { id: "soiree-etudiante", img: "/experience-soiree-etudiante.png", title: "Student night" },
              { id: "soiree-crepes", img: "/experience-soiree-crepes.png", title: "Crêpes night" },
              { id: "mariage", img: "/experience-mariage.png", title: "Wedding" },
              { id: "evjf-evjg", img: "/experience-evjf-evjg.png", title: "Bachelorette / Bachelor" },
              { id: "anniversaire", img: "/experience-anniversaire.png", title: "Birthday" },
              { id: "balade-deauville", img: "/experience-deauville.png", title: "Deauville trip" },
              { id: "striptease", img: "/experience-striptease-limousine.png", title: "Striptease evening" },
            ].map((exp) => (
              <Link
                key={exp.id}
                href={exp.id === "balade-deauville" ? "/en/offres/deauville" : exp.id === "striptease" ? "/en/offres/striptease" : `/en/prestations#${exp.id}`}
                className="group block rounded-xl overflow-hidden border border-white/10 hover:border-[#F34FC7]/40 transition-colors"
              >
                <div className="aspect-square relative">
                  <Image
                    src={exp.img}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 16vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                </div>
                <p className="p-3 text-center text-white/90 text-sm font-medium group-hover:text-[#F34FC7] transition-colors">
                  {exp.title}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/en/prestations"
              className="inline-flex items-center gap-2 text-[#F34FC7] font-semibold hover:text-[#F34FC7]/90 transition-colors"
            >
              View all our experiences
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Book
          </h2>
          <p className="text-white/60 text-center mb-8">By phone or WhatsApp, your choice.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            <a
              href="tel:0699717759"
              className="flex-1 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 bg-white/5 text-white font-semibold text-lg hover:border-[#F34FC7]/50 hover:bg-[#F34FC7]/10 transition-all"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              06 99 71 77 59
            </a>
            <span className="text-white/40 font-medium shrink-0">or</span>
            <a
              href="https://wa.me/33699717759"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-brand-gradient text-white font-bold text-lg hover:opacity-90 transition-all"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
