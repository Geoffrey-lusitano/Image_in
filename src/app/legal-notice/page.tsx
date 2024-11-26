export default function LegalNotice() {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-800">
        Mentions légales
      </h1>
      <div className="space-y-8 text-gray-700 text-lg md:text-xl">
        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            1. Informations légales
          </h2>
          <p>
            Le présent site internet <strong>Imagin’et Vous</strong> est édité
            par :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>
              **Propriétaire** : <strong>Sylvie Clerc</strong>
            </li>
            <li>**Adresse** : 473 chemin de roman ,73420 Méry, France</li>
            <li>
              **Téléphone** :{" "}
              <a href="tel:+33 6 12 34 56 78" className="hover:text-primary">
                +33 6 12 34 56 78
              </a>
            </li>
            <li>
              **Email** :{" "}
              <a
                href="mailto:Sylvie.clerc@laposte.net"
                className="hover:text-primary"
              >
                Sylvie.clerc@laposte.net
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            2. Hébergement
          </h2>
          <p>
            Le site internet est hébergé par la société **Hostinger**, située en
            France.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>**Nom de l’hébergeur** : Hostinger France</li>
            <li>
              **Adresse** : Hostinger International Ltd., 61 Rue de Lyon, Paris,
              France
            </li>
            <li>
              **Site web** :{" "}
              <a
                href="https://www.hostinger.fr"
                className="hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.hostinger.fr
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            3. Conception et gestion
          </h2>
          <p>
            Le site a été conçu et est géré par :{" "}
            <strong>Geoffrey Lusitano</strong>.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>**Nom** : Geoffrey Lusitano</li>
            <li>
              **Adresse** : 24T Routes des Chaffardons, 73100 Mouxy, France
            </li>
            <li>**Email** : g.bl@outlook.fr</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            4. Propriété intellectuelle
          </h2>
          <p>
            Tous les contenus présents sur le site{" "}
            <strong>Imagin’et Vous</strong>
            (textes, images, logos, vidéos, etc.) sont protégés par le droit de
            la propriété intellectuelle. Toute reproduction, distribution ou
            utilisation sans l’autorisation expresse de **Sylvie Clerc** est
            interdite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            5. Responsabilité
          </h2>
          <p>
            L’éditeur s’efforce de fournir des informations exactes et mises à
            jour sur le site. Cependant, aucune garantie n’est donnée quant à
            l’exactitude ou à l’exhaustivité des informations. L’utilisation du
            site relève de la responsabilité exclusive de l’utilisateur.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            6. Contact
          </h2>
          <p>
            Pour toute question concernant le site ou les présentes mentions
            légales, vous pouvez contacter **Sylvie Clerc** par email à{" "}
            <a
              href="mailto:contact@imagin-et-vous.com"
              className="hover:text-primary"
            >
              contact@imagin-et-vous.com
            </a>{" "}
            ou par téléphone au{" "}
            <a href="tel:+33612345678" className="hover:text-primary">
              +33 6 12 34 56 78
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
