import Link from "next/link";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";
import AutoHeroSlider from "@/components/AutoHeroSlider";

export default function Home() {
  const inUse = false;

  return (
    <>
      {/* Hero - Image limousine (plein écran sous le header) */}
      <section className="relative w-full -mt-0 md:-mt-[220px] overflow-hidden">
        <div className="relative w-full min-h-[72vh] md:min-h-0 md:aspect-[21/9] overflow-hidden">
          <AutoHeroSlider
            slides={[
              { src: "/hero-slide-1.png", alt: "Star Limousine Paris", objectPositionClass: "object-[50%_75%]" },
              { src: "/hero-slide-2.png", alt: "", objectPositionClass: "object-center" },
              { src: "/hero-slide-3.png", alt: "", objectPositionClass: "object-center" },
            ]}
            intervalMs={8000}
            fadeMs={1200}
            inUse={inUse}
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />
          {/* Bande CTA en bas — façon cinéma, ne couvre pas le couple */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] min-h-[200px] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 md:p-12 lg:p-16 pb-10 md:pb-12 pointer-events-none">
            <div className="pointer-events-auto text-center max-w-xl w-full">
              <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                La <span className="text-brand-gradient font-black">STAR</span>, c&apos;est vous.
              </p>
              <p className="mt-3 md:mt-4 text-white/80 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                Pendant 1 h, 2 h ou 3 h, faites tourner les têtes dans tout Paris à bord de votre limousine privée avec chauffeur. Jusqu&apos;à 8 passagers pour profiter entre amis du confort et de l&apos;ambiance incroyable de votre limousine. Toujours accompagné d&apos;une coupe de champagne à la main.{" "}
                <span className="font-semibold text-white">Un moment absolument magique.</span>
              </p>
              <a
                href="https://wa.me/33699717759"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-6 md:mt-8 border-2 border-[#F34FC7] text-[#F34FC7] font-semibold px-8 py-4 rounded-full bg-transparent hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all duration-300 text-base md:text-lg"
              >
                Je réserve ma limousine
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui vous attend */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
            Ce qui <span className="text-brand-gradient font-black">VOUS</span> attend
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div className="md:col-span-3 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-white">9 mètres de long</p>
              <p className="mt-2 text-white/90 font-medium">Limousine Lincoln blanche</p>
              <p className="mt-1 text-white/50 text-sm">Prestige &amp; confort</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#F34FC7]">3</p>
              <p className="mt-2 text-white/90 font-medium">écrans vidéo</p>
              <p className="mt-1 text-white/50 text-sm">Ambiance cinéma à bord</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black"><span className="text-[#F34FC7]">1h</span> <span className="text-white">/</span> <span className="text-[#F34FC7]">2h</span> <span className="text-white">/</span> <span className="text-[#F34FC7]">3h</span></p>
              <p className="mt-2 text-white/90 font-medium">De balade</p>
              <p className="mt-1 text-white/50 text-sm">Paris by night</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#F34FC7]">8</p>
              <p className="mt-2 text-white/90 font-medium">passagers max</p>
              <p className="mt-1 text-white/50 text-sm">Entre amis ou en famille</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">🍾</p>
              <p className="mt-2 text-white/90 font-medium">Véritable champagne offert</p>
              <p className="mt-1 text-white/50 text-sm">À bord</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">✨</p>
              <p className="mt-2 text-white/90 font-medium">Jeux de lumière &amp; laser</p>
              <p className="mt-1 text-white/50 text-sm">Atmosphère VIP</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#F34FC7]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#F34FC7]">🎵</p>
              <p className="mt-2 text-white/90 font-medium">Son 300W</p>
              <p className="mt-1 text-white/50 text-sm">Votre playlist personnalisée</p>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-center items-center gap-3">
            {["Anniversaire", "EVJF / EVJG", "Mariage", "Soirée VIP"].map((occasion) => (
              <span
                key={occasion}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium"
              >
                {occasion}
              </span>
            ))}
            <span className="px-5 py-2.5 rounded-full bg-brand-gradient/20 border border-[#F34FC7]/50 text-[#F34FC7] text-sm font-medium">
              +5 autres
            </span>
          </div>
          <p className="mt-12 text-center text-white/40 text-sm">
            Réservation 7j/7 · Chauffeur en costume · Prise en charge à Paris
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base md:text-lg uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              Voir les tarifs →
            </Link>
          </div>
        </div>
      </section>

      {/* La soirée dont on parle encore */}
      <section className="relative py-24 md:py-32 overflow-hidden min-h-[28rem] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/newimage.png"
            alt=""
            fill
            className="object-cover object-[50%_20%]"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/55" aria-hidden />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
              La soirée dont on parle encore.
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              Paris défile. Vous êtes à l&apos;intérieur. Coupe de champagne en main, votre playlist, les lumières de la ville. Ce n&apos;est pas
              un trajet. C&apos;est un souvenir.
            </p>
            <p className="mt-8 text-[#F34FC7] font-semibold text-lg">
              Ils se souviendront de votre arrivée.
            </p>
          </div>
        </div>
      </section>

      {/* Nos expériences */}
      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Nos <span className="uppercase text-brand-gradient">expériences</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Ligne 1 : Paris by night, Soirée étudiante, Soirée crêpes */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-paris-by-night.png"
                  alt="Paris by night en limousine"
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
                  2h de balade dans Paris illuminé. Champagne, lumières, votre playlist. L&apos;expérience star.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors relative">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                  <Image
                    src="/experience-soiree-etudiante.png"
                    alt="Soirée étudiante le jeudi en limousine"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
                </div>
                <span className="absolute right-3 bottom-0 translate-y-1/2 px-3 py-1.5 rounded-full bg-brand-gradient text-white text-xs font-medium z-10">
                  Jeudi uniquement
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Soirée étudiante
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Ambiance festive entre amis. Jusqu&apos;à 8, champagne, musique. La soirée dont tout le monde parle.
                </p>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-soiree-crepes.png"
                  alt="Soirée crêpes à volonté en limousine"
                  fill
                  className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Soirée crêpes à volonté
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Balade gourmande dans Paris. Crêpes à volonté à bord, cidre breton et bonne humeur. Une formule unique.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              Toutes nos expériences →
            </Link>
          </div>
        </div>
      </section>

      {/* Nos offres prestige */}
      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Nos offres <span className="uppercase text-brand-gradient">prestige</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-deauville.png"
                  alt="Balade à Deauville en limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Balade à Deauville
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Journée prestige : aller-retour en limousine, 6 h sur place, champagne et boissons à bord. L&apos;évasion chic.
                </p>
                <Link href="/offres/deauville" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Découvrir l&apos;offre →
                </Link>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-striptease-limousine.png"
                  alt="Soirée striptease en limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Soirée striptease
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  20 minutes dans la limousine avec nos stripteaseuses, show privé et confidentiel. Idéal pour vos EVJF, anniversaires ou soirées privées.
                </p>
                <Link href="/offres/striptease" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Découvrir l&apos;offre →
                </Link>
              </div>
            </article>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#F34FC7]/30 transition-colors">
              <div className="aspect-[4/3] relative overflow-hidden bg-black/40">
                <Image
                  src="/experience-disneyland.png"
                  alt="Transfert Disneyland en limousine"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                  Transfert Disneyland
                </h3>
                <p className="mt-3 text-white/60 text-sm md:text-base leading-relaxed">
                  Paris → parc Disneyland. Aller simple ou aller-retour. Prise en charge à l&apos;hôtel, transfert direct sans arrêt.
                </p>
                <Link href="/offres/disneyland" className="mt-4 inline-block text-[#F34FC7] font-medium hover:text-[#F34FC7]/90 text-sm">
                  Découvrir l&apos;offre →
                </Link>
              </div>
            </article>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              Voir toutes nos offres prestige →
            </Link>
          </div>
        </div>
      </section>

      {/* Nos photos */}
      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-12">
            Un pur moment de <span className="text-brand-gradient font-black uppercase">plaisir</span> !
          </h2>
          <PhotoGallery items={[1, 2, 3, 4, 5, 6, 7, 8]} />
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations#photos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider bg-transparent hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              Voir toutes les photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
