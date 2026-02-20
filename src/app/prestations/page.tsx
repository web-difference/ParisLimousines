import Link from "next/link";
import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

const experiences = [
  {
    id: "paris-by-night",
    title: "Paris by night",
    description: "2h de balade dans Paris illuminé. Champagne, lumières, votre playlist. L'expérience star.",
    image: "/experience-paris-by-night.png",
    objectPosition: "object-top",
    tag: null,
  },
  {
    id: "soiree-etudiante",
    title: "Soirée étudiante",
    description: "Ambiance festive entre amis. 1h de balade uniquement. Jusqu'à 8, champagne, musique. La soirée dont tout le monde parle.",
    image: "/experience-soiree-etudiante.png",
    objectPosition: "object-center",
    tag: "Jeudi uniquement",
  },
  {
    id: "soiree-crepes",
    title: "Soirée crêpes à volonté",
    description: "Balade gourmande dans Paris. Crêpes à volonté à bord, champagne et bonne humeur. Une formule unique.",
    image: "/experience-soiree-crepes.png",
    objectPosition: "object-bottom",
    tag: null,
  },
  {
    id: "mariage",
    title: "Mariage",
    description: "Votre jour J. Lincoln blanche, chauffeur en costume. L'arrivée dont vous rêvez.",
    image: "/experience-mariage.png",
    objectPosition: "object-top",
    tag: null,
  },
  {
    id: "evjf-evjg",
    title: "EVJF / EVJG",
    description: "Enterrement de vie de célibataire inoubliable. Ambiance décontractée ou glamour, à vous de choisir.",
    image: "/experience-evjf-evjg.png",
    objectPosition: "object-center",
    tag: null,
  },
  {
    id: "anniversaire",
    title: "Anniversaire",
    description: "2h de balade. Gâteau d'anniversaire offert pour 8 personnes, champagne offert, champagne sans alcool sur demande. Coca, Fanta, Champomy à volonté.",
    image: "/experience-anniversaire.png",
    objectPosition: "object-center",
    tag: null,
  },
];

export default function Prestations() {
  return (
    <>
      {/* Hero image */}
      <section className="relative w-full -mt-0 md:-mt-[220px] pt-0 md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Expériences en limousine à Paris"
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
                Chaque moment mérite son expérience
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Choisissez la vôtre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="pt-16 md:pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-14">
            Nos <span className="uppercase text-brand-gradient">expériences</span>
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
                    Réserver
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
              Réserver mon expérience
            </a>
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
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/prestations#photos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#F34FC7] text-[#F34FC7] font-bold text-base uppercase tracking-wider hover:bg-brand-gradient hover:text-white hover:border-transparent transition-all"
            >
              Voir toutes nos offres prestige →
            </Link>
          </div>
        </div>
      </section>

      {/* Toutes les photos - même section que la landing, sans limite */}
      <section id="photos" className="py-24 md:py-28 border-t border-white/5 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-center mb-12">
            Un pur moment de <span className="text-brand-gradient font-black uppercase">plaisir</span> !
          </h2>
          <PhotoGallery
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]}
          />
        </div>
      </section>
    </>
  );
}
