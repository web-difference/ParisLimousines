import Image from "next/image";
import Link from "next/link";

export default function CGU() {
  return (
    <>
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Conditions générales d'utilisation Star Paris Limousine"
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
                Conditions générales d&apos;utilisation
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
            <p className="text-white/60 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation du site starparislimousine.fr. En accédant au site, vous acceptez ces conditions.
            </p>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 1 – Objet</h2>
              <p>Les CGU définissent les règles d&apos;utilisation du site internet de Star Paris Limousine. Elles s&apos;appliquent à tout visiteur, sans restriction.</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 2 – Accès au site</h2>
              <p>L&apos;accès au site est libre et gratuit. Star Paris Limousine s&apos;efforce d&apos;assurer la disponibilité du site 24h/24 et 7j/7, sans garantie absolue. Une interruption pour maintenance ou cas de force majeure peut survenir sans préavis.</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 3 – Utilisation du site</h2>
              <p>L&apos;utilisateur s&apos;engage à :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Utiliser le site de manière conforme aux lois en vigueur</li>
                <li>Ne pas nuire au fonctionnement du site (virus, spam, accès non autorisé)</li>
                <li>Ne pas diffuser de contenu illicite ou préjudiciable</li>
                <li>Respecter la propriété intellectuelle et les droits d&apos;autrui</li>
              </ul>
              <p className="mt-4">Toute utilisation contraire peut entraîner des poursuites judiciaires.</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 4 – Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu du site (textes, images, logo, graphismes, structure) est protégé par le droit d&apos;auteur et la propriété intellectuelle. Toute reproduction, représentation ou exploitation non autorisée est interdite et constitutive de contrefaçon.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 5 – Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers. Star Paris Limousine n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La création de liens vers starparislimousine.fr est soumise à autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 6 – Données personnelles</h2>
              <p>
                Les données personnelles collectées sur le site sont traitées conformément à notre{" "}
                <Link href="/politique-de-confidentialite" className="text-[#FB25E2] hover:text-[#FB25E2]/90">
                  Politique de confidentialité
                </Link>{" "}
                et au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 7 – Limitation de responsabilité</h2>
              <p>
                Star Paris Limousine ne peut être tenue responsable des dommages directs ou indirects résultant de l&apos;utilisation du site, des erreurs ou omissions du contenu, ou de l&apos;indisponibilité du site.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 8 – Modifications</h2>
              <p>
                Star Paris Limousine se réserve le droit de modifier ces CGU à tout moment. Les modifications prennent effet dès leur publication. La poursuite de l&apos;utilisation du site vaut acceptation des nouvelles conditions.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 9 – Droit applicable et litiges</h2>
              <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
