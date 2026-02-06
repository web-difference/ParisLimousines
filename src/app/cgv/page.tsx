import Image from "next/image";
import Link from "next/link";

export default function CGV() {
  return (
    <>
      <section className="relative w-full -mt-[180px] md:-mt-[220px] pt-[180px] md:pt-[220px] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[280px]">
          <Image
            src="/hero-experiences.png"
            alt="Conditions générales de vente Star Paris Limousine"
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
                Conditions générales de vente
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
              Les présentes Conditions Générales de Vente (CGV) régissent les prestations de location de limousine proposées par Star Paris Limousine. Toute réservation implique l&apos;acceptation des présentes conditions.
            </p>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 1 – Objet</h2>
              <p>Ces CGV définissent les droits et obligations des parties dans le cadre de la vente de prestations de location de véhicule de prestige (limousine Lincoln blanche) pour des événements (Paris by night, mariage, anniversaire, EVJF/EVJG, etc.).</p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 2 – Prestataire</h2>
              <p>
                Star Paris Limousine<br />
                [Adresse complète à compléter]<br />
                Téléphone : <a href="tel:0762830309" className="text-[#FB25E2] hover:text-[#FB25E2]/90">07 62 83 03 09</a>
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 3 – Réservation</h2>
              <p>La réservation est confirmée après :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Accord sur le devis et la date</li>
                <li>Versement d&apos;un acompte (généralement 30 à 50 % du montant total)</li>
                <li>Envoi d&apos;une confirmation écrite par Star Paris Limousine</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 4 – Tarifs et paiement</h2>
              <p>
                Les tarifs sont indiqués en euros TTC. Le solde est dû le jour de la prestation, sauf accord contraire. Les moyens de paiement acceptés sont : espèces, carte bancaire, virement.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 5 – Annulation</h2>
              <p>
                En cas d&apos;annulation par le client :<br />
                • Plus de 15 jours avant : remboursement de l&apos;acompte moins frais de dossier<br />
                • Entre 8 et 15 jours : rétention de 50 % de l&apos;acompte<br />
                • Moins de 8 jours : rétention de 100 % de l&apos;acompte
              </p>
              <p className="mt-4">
                Star Paris Limousine se réserve le droit d&apos;annuler en cas de force majeure ; dans ce cas, l&apos;acompte sera intégralement remboursé.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 6 – Prestation</h2>
              <p>
                La prestation inclut : véhicule Lincoln blanche 9 m, chauffeur en tenue, champagne et boissons selon formule, musique et ambiance lumière. Le nombre maximal de passagers est de 8. L&apos;itinéraire peut être défini à l&apos;avance ou sur place selon accord.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 7 – Responsabilité</h2>
              <p>
                Le client est responsable des dommages causés à l&apos;intérieur du véhicule par lui-même ou ses invités. Star Paris Limousine décline toute responsabilité en cas de non-respect de la réglementation (alcool, nuisances sonores, etc.) par les passagers.
              </p>
            </section>

            <section>
              <h2 className="text-white font-display text-xl font-semibold mb-4">Article 8 – Litiges</h2>
              <p>
                En cas de litige, les parties s&apos;efforceront de trouver une solution à l&apos;amiable. À défaut, les tribunaux français seront seuls compétents.
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
