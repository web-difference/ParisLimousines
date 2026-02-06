import Image from "next/image";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Politique de confidentialité Star Paris Limousine"
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
                Politique de confidentialité
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
              Star Paris Limousine s&apos;engage à protéger la confidentialité des utilisateurs de son site. Cette politique précise comment nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">1. Responsable du traitement</h2>
              <p>Le responsable du traitement des données est : Star Paris Limousine, [adresse à compléter].</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">2. Données collectées</h2>
              <p>Nous sommes susceptibles de collecter :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nom, prénom, adresse email (via le formulaire de newsletter)</li>
                <li>Numéro de téléphone (lors des échanges WhatsApp ou téléphoniques)</li>
                <li>Données de navigation (cookies, adresse IP, type de navigateur)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos demandes de réservation et d&apos;information</li>
                <li>Vous envoyer des offres et actualités si vous avez souscrit à notre newsletter</li>
                <li>Améliorer notre site et nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">4. Base légale</h2>
              <p>Le traitement repose sur : votre consentement (newsletter), l&apos;exécution de contrats (réservations), et notre intérêt légitime (amélioration du site).</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">5. Conservation des données</h2>
              <p>Vos données sont conservées le temps nécessaire aux finalités indiquées, puis supprimées ou anonymisées. Les données de réservation sont conservées selon les obligations comptables et légales.</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous au{" "}
                <a href="tel:0762830309" className="text-[#FB25E2] hover:text-[#FB25E2]/90">07 62 83 03 09</a>
                {" "}ou par{" "}
                <a href="https://wa.me/33762830309" target="_blank" rel="noopener noreferrer" className="text-[#FB25E2] hover:text-[#FB25E2]/90">WhatsApp</a>.
                Vous pouvez également introduire une réclamation auprès de la CNIL.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">7. Cookies</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur et les statistiques de visite.
                Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">8. Sécurité</h2>
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès, modification ou divulgation non autorisés.</p>
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
