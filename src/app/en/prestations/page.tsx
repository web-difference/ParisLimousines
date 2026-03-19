import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  alternates: { canonical: "/en/prestations" },
};

const experiences = [
  {
    id: "paris-by-night",
    title: "Paris by night",
    description:
      "2-hour ride through lit-up Paris. The city shines, monuments roll by, heads turn. You just enjoy the moment. On board: champagne, light effects, custom music and VIP vibe. The star experience to discover Paris like you've never seen it.",
    image: "/experience-paris-by-night.png",
    objectPosition: "object-top",
    tag: null,
  },
  {
    id: "soiree-etudiante",
    title: "Student night (Thursdays only)",
    description:
      "On Thursdays, the limousine becomes your private space to start the evening in style. 1 hour exclusive ride through Paris. Up to 8 passengers. Champagne, music, light effects and festive vibe. A moment of fun and celebration with friends in an original, prestigious setting. The experience everyone talks about—and remembers.",
    image: "/experience-soiree-etudiante.png",
    objectPosition: "object-center",
    tag: "Thursdays only",
  },
  {
    id: "soiree-crepes",
    title: "All-you-can-eat crêpes night",
    description:
      "A unique, food-focused experience through Paris. Enjoy all-you-can-eat crêpes on board your white Lincoln limousine. Champagne, cozy vibe and a fun moment with friends or family. Original, festive and deliciously different.",
    image: "/experience-soiree-crepes.png",
    objectPosition: "object-bottom",
    tag: null,
  },
  {
    id: "mariage",
    title: "Wedding",
    description:
      "Your big day deserves a spectacular arrival. 30-foot white Lincoln limousine, chauffeur in suit, prestige, elegance and refinement. We handle the ride; you enjoy the moment, the photos and the “wow” effect on arrival. The entrance you dreamed of for your wedding.",
    image: "/experience-mariage.png",
    objectPosition: "object-top",
    tag: null,
  },
  {
    id: "evjf-evjg",
    title: "Bachelorette / Bachelor",
    description:
      "A bachelorette or bachelor party that makes an impression. Choose your vibe: glam, fun or full-on wild. Champagne, custom playlist, laughs and photos galore throughout the ride in Paris. A moment apart before celebrating the big day.",
    image: "/experience-evjf-evjg.png",
    objectPosition: "object-center",
    tag: null,
  },
  {
    id: "anniversaire",
    title: "Birthday",
    description:
      "Treat yourself to an exceptional birthday in a fully private limousine. For 2 hours, up to 8 guests enjoy an exclusive ride through Paris in a refined, intimate setting. Birthday cake included, real champagne for adults (or alcohol-free on request), plus unlimited soft drinks. Every detail is designed to make the celebration special: blow out the candles, raise a toast, sing and watch Paris go by. A unique, elegant and unforgettable experience that will stay in everyone's memory.",
    image: "/experience-anniversaire.png",
    objectPosition: "object-center",
    tag: null,
  },
];

export default function EnPrestations() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Limousine experiences in Paris"
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
                Every moment deserves its experience
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Choose yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="pt-16 md:pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Our <span className="uppercase text-brand-gradient">experiences</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                id={exp.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors relative"
              >
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl bg-black/40">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className={`object-cover ${exp.objectPosition} transition-transform duration-500 group-hover:scale-105`}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
                  </div>
                  {exp.tag && (
                    <span className="absolute top-0 -right-1 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#D1238D] border border-[#F34FC7]/50 text-white text-base font-black z-10">
                      {exp.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-white">
                    {exp.title}
                  </h2>
                  <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                  <a
                    href="https://wa.me/33699717759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-6 w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-[#F34FC7] text-[#F34FC7] font-semibold text-lg bg-transparent hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
                  >
                    Book
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://wa.me/33699717759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-gradient text-white font-semibold text-lg md:text-xl hover:opacity-90 transition-all"
            >
              Book my experience
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Our <span className="uppercase text-brand-gradient">prestige</span> offers
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-deauville.png"
                  alt="Deauville trip in a limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Deauville trip
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Prestige day: round-trip by limousine, 6 hours on site, champagne and drinks on board. The chic escape.
                </p>
                <Link href="/en/offres/deauville" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Discover the offer →
                </Link>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-striptease-limousine.png"
                  alt="Striptease evening in a limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Striptease evening
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  20 minutes in the limousine with our performers, private and confidential show. Ideal for bachelorette parties, birthdays or private events.
                </p>
                <Link href="/en/offres/striptease" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Discover the offer →
                </Link>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-disneyland.png"
                  alt="Disneyland transfer in a limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Disneyland
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Paris → Disneyland Park. One-way or round-trip. Hotel pickup, direct transfer with no stops.
                </p>
                <Link href="/en/offres/disneyland" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Discover the offer →
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/en/prestations#photos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              View all our prestige offers →
            </Link>
          </div>
        </div>
      </section>

      <section id="photos" className="py-24 md:py-28 border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-12">
            Pure <span className="text-brand-gradient font-black uppercase">pleasure</span>!
          </h2>
          <PhotoGallery
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
          />
        </div>
      </section>
    </>
  );
}
