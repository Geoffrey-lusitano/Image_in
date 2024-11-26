export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-800">
        Politique de Confidentialité
      </h1>
      <div className="space-y-8 text-gray-700 text-lg md:text-xl">
        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            1. Collecte des données personnelles
          </h2>
          <p>
            Vos données personnelles sont collectées dans le cadre de
            l'utilisation de notre site pour des finalités précises comme le
            traitement des demandes, les prises de contact, ou l'amélioration de
            nos services.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            2. Utilisation des données personnelles
          </h2>
          <p>Les informations collectées peuvent être utilisées pour :</p>
          <ul className="list-disc pl-6">
            <li>Traiter vos demandes ou commandes</li>
            <li>Améliorer nos services et personnaliser votre expérience</li>
            <li>Vous envoyer des informations importantes ou des offres</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary-800">
            3. Sécurisation des données
          </h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour
            protéger vos données personnelles contre tout accès non autorisé.
          </p>
        </div>
      </div>
    </section>
  );
}
