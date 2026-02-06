import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Contact Star Paris Limousine"
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
                Contact
              </h1>
              <p className="mt-4 text-white/80 max-w-md mx-auto text-lg">
                Une question ? Réservez ou posez vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white text-center mb-2">
            Nous contacter
          </h2>
          <p className="text-white/60 text-center mb-6 max-w-lg mx-auto">
            Réservez votre limousine ou demandez un devis. Nous répondons rapidement.
          </p>
          <p className="text-white/50 text-center mb-12 text-sm">
            27 rue Baron, 75017 Paris, France
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
            <a
              href="tel:0762830309"
              className="flex-1 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/20 bg-white/5 text-white font-semibold text-lg hover:border-[#FB25E2]/50 hover:bg-[#FB25E2]/10 transition-all"
            >
              <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              07 62 83 03 09
            </a>
            <span className="text-white/40 font-medium shrink-0">ou</span>
            <a
              href="https://wa.me/33762830309"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FB25E2] text-white font-bold text-lg hover:bg-[#FB25E2]/90 transition-all"
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
