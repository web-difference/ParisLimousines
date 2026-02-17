import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero - Image limousine (plein écran sous le header) */}
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
          {/* Bande CTA en bas — façon cinéma, ne couvre pas le couple */}
          <div className="absolute inset-x-0 bottom-0 h-[45%] min-h-[200px] bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-8 md:p-12 lg:p-16 pb-10 md:pb-12 pointer-events-none">
            <div className="pointer-events-auto text-center max-w-xl w-full">
              <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                La <span className="text-[#FB25E2] font-black">STAR</span>, c&apos;est vous.
              </p>
              <p className="mt-3 md:mt-4 text-white/80 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
                1 h 00 / 2 h 00 / 3 h 00 pendant lesquelles tout le monde vous regarde passer dans Paris. Jusqu&apos;à 8 passagers pour profiter entre amis du confort et de l&apos;ambiance incroyable de votre limousine. Toujours accompagné d&apos;une coupe de champagne à la main. <span className="font-semibold text-white">Un moment absolument magique.</span>
              </p>
              <a
                href="https://wa.me/33762830309"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-6 md:mt-8 border-2 border-[#FB25E2] text-[#FB25E2] font-semibold px-8 py-4 rounded-full bg-transparent hover:bg-[#FB25E2] hover:text-white transition-all duration-300 text-base md:text-lg"
              >
                Je réserve ma place
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui vous attend */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl mx-auto">
            Ce qui <span className="text-[#FB25E2] font-black">VOUS</span> attend
          </h2>
          <p className="text-center mt-4 text-lg md:text-xl text-white/70 max-w-xl mx-auto">
            Pour chaque moment qui compte
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div className="md:col-span-3 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-white">9 mètres de long</p>
              <p className="mt-2 text-white/90 font-medium">Limousine Lincoln blanche</p>
              <p className="mt-1 text-white/50 text-sm">Prestige et confort</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#FB25E2]">3</p>
              <p className="mt-2 text-white/90 font-medium">Écrans vidéo</p>
              <p className="mt-1 text-white/50 text-sm">À bord</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black"><span className="text-[#FB25E2]">1h</span> <span className="text-white">/</span> <span className="text-[#FB25E2]">2h</span> <span className="text-white">/</span> <span className="text-[#FB25E2]">3h</span></p>
              <p className="mt-2 text-white/90 font-medium">De balade</p>
              <p className="mt-1 text-white/50 text-sm">Paris by night</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-4xl md:text-5xl font-black text-[#FB25E2]">8</p>
              <p className="mt-2 text-white/90 font-medium">Passagers max</p>
              <p className="mt-1 text-white/50 text-sm">Entre amis, en famille</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#FB25E2]">🍾</p>
              <p className="mt-2 text-white/90 font-medium">Véritable champagne offert</p>
              <p className="mt-1 text-white/50 text-sm">À bord</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#FB25E2]">✨</p>
              <p className="mt-2 text-white/90 font-medium">Jeux de lumière</p>
              <p className="mt-1 text-white/50 text-sm">Ambiance laser</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FB25E2]/30 transition-colors">
              <p className="text-3xl md:text-4xl font-black text-[#FB25E2]">🎵</p>
              <p className="mt-2 text-white/90 font-medium">Musique 300 Watt</p>
              <p className="mt-1 text-white/50 text-sm">Votre playlist à bord</p>
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
            <span className="px-5 py-2.5 rounded-full bg-[#FB25E2]/20 border border-[#FB25E2]/50 text-[#FB25E2] text-sm font-medium">
              +5 autres
            </span>
          </div>
          <p className="mt-12 text-center text-white/40 text-sm">
            Réservation 7j/7 · Chauffeur en costume · Prise en charge à Paris
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#FB25E2] text-[#FB25E2] font-bold text-base md:text-lg uppercase tracking-wider hover:bg-[#FB25E2] hover:text-white transition-all"
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
              La soirée dont on parle encore.
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-white/90 leading-relaxed">
              Paris défile. Vous êtes à l&apos;intérieur. Coupe champagne en main, votre playlist, les lumières de la ville. 
              Pas un trajet : un moment qu&apos;on n&apos;oublie jamais.
            </p>
            <p className="mt-8 text-[#FB25E2] font-semibold text-lg">
              Ils se souviendront de votre arrivée.
            </p>
          </div>
        </div>
      </section>

      {/* Nos expériences */}
      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Nos expériences
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Ligne 1 : Paris by night, Soirée étudiante, Soirée crêpes */}
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FB25E2]/30 transition-colors">
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
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FB25E2]/30 transition-colors relative">
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
                <span className="absolute right-3 bottom-0 translate-y-1/2 px-3 py-1.5 rounded-full bg-[#FB25E2] text-white text-xs font-medium z-10">
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
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FB25E2]/30 transition-colors">
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
                  Balade gourmande dans Paris. Crêpes à volonté à bord, champagne et bonne humeur. Une formule unique.
                </p>
              </div>
            </article>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#FB25E2] text-[#FB25E2] font-bold text-base uppercase tracking-wider hover:bg-[#FB25E2] hover:text-white transition-all"
            >
              Toutes nos expériences →
            </Link>
          </div>
        </div>
      </section>

      {/* Nos photos */}
      <section className="py-24 md:py-28 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-12">
            Un pur moment de <span className="text-[#FB25E2] font-black uppercase">plaisir</span> !
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white/5 border border-white/10 overflow-hidden relative"
              >
                <Image
                  src={`/n${i}.png`}
                  alt={`Moment Star Limousine Paris ${i}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations#photos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#FB25E2] text-[#FB25E2] font-bold text-base uppercase tracking-wider bg-transparent hover:bg-[#FB25E2] hover:text-white transition-all"
            >
              Voir toutes les photos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
