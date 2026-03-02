import Link from "next/link";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

export default function EnHome() {
  return (
    <>
      <section className="relative w-full -mt-0 md:-mt-[220px] overflow-hidden">
        <div className="relative w-full min-h-[72vh] md:min-h-0 md:aspect-[21/9] overflow-hidden">
          <Image
            src="/newimage.png"
            alt="Star Limousine Paris"
            width={2560}
            height={1090}
            sizes="100vw"
            className="w-full h-full object-cover object-top"
            priority
            quality={100}
            unoptimized
          />
          <div className="absolute inset-x-0 bottom-0 h-[45%] min-h-[200px] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 md:p-12 lg:p-16 pb-10 md:pb-12 pointer-events-none">
            <div className="pointer-events-auto text-center max-w-xl w-full">
              <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                You are the <span className="text-brand-gradient font-black">STAR</span>.
              </p>
              <p className="mt-3 md:mt-4 text-white/80 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                For 1, 2, or 3 hours, turn heads across Paris in your private chauffeured limousine. Up to 8 passengers to enjoy the comfort and incredible atmosphere with friends. Always with a glass of champagne in hand.{" "}
                <span className="font-semibold text-white">An absolutely magical moment.</span>
              </p>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-6 md:mt-8 border-2 border-[#F34FC7] text-[#F34FC7] font-semibold px-8 py-4 rounded-full bg-transparent hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-base md:text-lg"
              >
                Book my limousine
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
            What <span className="text-brand-gradient font-black">AWAITS</span> you
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div className="md:col-span-3 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-white">30 feet long</p>
              <p className="mt-2 text-white/90 font-medium">White Lincoln limousine</p>
              <p className="mt-1 text-white/50 text-sm">Prestige &amp; comfort</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#F34FC7]">3</p>
              <p className="mt-2 text-white/90 font-medium">video screens</p>
              <p className="mt-1 text-white/50 text-sm">Cinema vibe on board</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black"><span className="text-[#F34FC7]">1h</span> <span className="text-white">/</span> <span className="text-[#F34FC7]">2h</span> <span className="text-white">/</span> <span className="text-[#F34FC7]">3h</span></p>
              <p className="mt-2 text-white/90 font-medium">Ride</p>
              <p className="mt-1 text-white/50 text-sm">Paris by night</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#F34FC7]">8</p>
              <p className="mt-2 text-white/90 font-medium">passengers max</p>
              <p className="mt-1 text-white/50 text-sm">With friends or family</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">🍾</p>
              <p className="mt-2 text-white/90 font-medium">Real champagne included</p>
              <p className="mt-1 text-white/50 text-sm">On board</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">✨</p>
              <p className="mt-2 text-white/90 font-medium">Light &amp; laser effects</p>
              <p className="mt-1 text-white/50 text-sm">VIP atmosphere</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">🎵</p>
              <p className="mt-2 text-white/90 font-medium">300W sound system</p>
              <p className="mt-1 text-white/50 text-sm">Your custom playlist</p>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-center items-center gap-3">
            {["Birthday", "Bachelorette / Bachelor", "Wedding", "VIP evening"].map((occasion) => (
              <span
                key={occasion}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
              >
                {occasion}
              </span>
            ))}
            <span className="px-5 py-2.5 rounded-full bg-brand-gradient/20 border border-[#F34FC7]/50 text-[#F34FC7] text-sm font-medium">
              +5 more
            </span>
          </div>
          <p className="mt-12 text-center text-white/40 text-sm">
            Booking 7 days a week · Chauffeur in suit · Pick-up in Paris
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/en/tarifs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base md:text-lg uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              View pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden min-h-[28rem] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/section-soiree-paris.png"
            alt=""
            fill
            className="object-cover object-[50%_60%]"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              The night people still talk about.
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              Paris rolls by. You&apos;re inside. Glass of champagne in hand, your playlist, the city lights. It&apos;s not a ride. It&apos;s a memory.
            </p>
            <p className="mt-8 text-[#F34FC7] font-semibold text-lg">
              They&apos;ll remember your arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Our <span className="uppercase text-brand-gradient">experiences</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-paris-by-night.png"
                  alt="Paris by night in a limousine"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Paris by night
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  2-hour ride through lit-up Paris. Champagne, lights, your playlist. The star experience.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors relative">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                  <Image
                    src="/experience-soiree-etudiante.png"
                    alt="Student night on Thursday in a limousine"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
                </div>
                <span className="absolute right-3 bottom-0 translate-y-1/2 px-3 py-1.5 rounded-full bg-brand-gradient text-white text-xs font-medium z-10">
                  Thursdays only
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Student night
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Festive vibe with friends. Up to 8, champagne, music. The night everyone talks about.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-soiree-crepes.png"
                  alt="All-you-can-eat crêpes night in a limousine"
                  fill
                  className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  All-you-can-eat crêpes night
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Food tour of Paris. All-you-can-eat crêpes on board, Breton cider and good vibes. A unique package.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/en/prestations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              All our experiences →
            </Link>
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
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/en/prestations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              View all our prestige offers →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-12">
            Pure <span className="text-brand-gradient font-black uppercase">pleasure</span>!
          </h2>
          <PhotoGallery items={[1, 2, 3, 4, 5, 6, 7, 8]} />
          <div className="mt-12 flex justify-center">
            <Link
              href="/en/prestations#photos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider bg-transparent hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              View all photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
