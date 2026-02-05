import Link from "next/link";
import Image from "next/image";

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
    description: "Ambiance festive entre amis. Jusqu'à 8, champagne, musique. La soirée dont tout le monde parle.",
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
    description: "Fêtez en grand. Jusqu'à 8, champagne offert, ambiance à la carte. Une entrée qu'on n'oublie pas.",
    image: "/experience-anniversaire.png",
    objectPosition: "object-center",
    tag: null,
  },
];

export default function Prestations() {
  return (
    <>
      {/* Hero image */}
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
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

      <section className="pt-16 md:pt-24 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {experiences.map((exp) => (
              <article
                key={exp.id}
                id={exp.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#FB25E2]/30 transition-colors relative"
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
                    <span className="absolute top-0 -right-1 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#6B217D] border border-[#FB25E2]/60 text-white text-base font-black z-10">
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
                    href="https://wa.me/33645373229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-6 w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-[#FB25E2] text-[#FB25E2] font-semibold text-lg bg-transparent hover:bg-[#FB25E2] hover:text-white transition-all"
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
              href="https://wa.me/33645373229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FB25E2] text-white font-semibold text-lg md:text-xl hover:bg-[#FB25E2]/90 transition-all"
            >
              Réserver mon expérience
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
