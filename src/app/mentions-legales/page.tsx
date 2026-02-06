import Image from "next/image";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <>
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Mentions légales Star Paris Limousine"
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
                Mentions légales
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
            <p className="text-white/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">1. Éditeur du site</h2>
              <p>Le site <strong>starparislimousine.fr</strong> est édité par :</p>
              <p className="mt-2">
                <strong>Star Paris Limousine</strong><br />
                [Raison sociale et forme juridique à compléter]<br />
                [Adresse complète à compléter]<br />
                SIRET : [À COMPLÉTER]<br />
                RCS : [À COMPLÉTER]<br />
                Capital social : [À COMPLÉTER]
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">2. Directeur de la publication</h2>
              <p>[Nom du responsable de la publication à compléter]</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">3. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                [Nom de l&apos;hébergeur à compléter]<br />
                [Adresse de l&apos;hébergeur à compléter]
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">4. Contact</h2>
              <p>
                Téléphone : <a href="tel:0762830309" className="text-[#FB25E2] hover:text-[#FB25E2]/90">07 62 83 03 09</a><br />
                WhatsApp : <a href="https://wa.me/33762830309" target="_blank" rel="noopener noreferrer" className="text-[#FB25E2] hover:text-[#FB25E2]/90">07 62 83 03 09</a>
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">5. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logo, structure) est protégé par le droit d&apos;auteur et la propriété intellectuelle.
                Toute reproduction, représentation ou exploitation non autorisée constitue une contrefaçon passible de sanctions pénales.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">6. Conception du site</h2>
              <p>
                Site web réalisé par{" "}
                <a href="https://webdifference.fr" target="_blank" rel="noopener noreferrer" className="text-[#FB25E2] hover:text-[#FB25E2]/90 font-medium">
                  WebDifference
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link href="/" className="text-[#FB25E2] hover:text-[#FB25E2]/90 font-medium text-sm">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
