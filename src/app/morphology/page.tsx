export default function Morphology() {
  return (
    <section className="relative bg-white py-16">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 items-center">
        {/* Left Section: Images */}
        <div className="flex flex-col gap-8">
          {/* Top Image */}
          <div
            className="w-full aspect-video bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/assets/morphology-1.jpg')", // Remplacez par le chemin de votre image
            }}
            aria-label="Analyse morphologique image 1"
          ></div>

          {/* Bottom Image */}
          <div
            className="w-full aspect-video bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/assets/morphology-2.jpg')", // Remplacez par le chemin de votre deuxième image
            }}
            aria-label="Analyse morphologique image 2"
          ></div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-primary-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Analyse Morphologique
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Chaque silhouette est unique et mérite d'être sublimée.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            L'analyse morphologique consiste à étudier les proportions (et non
            les mensurations !) de votre corps afin de déterminer les vêtements
            qui vous mettent le plus en valeur. Que vous souhaitiez équilibrer
            vos proportions, allonger votre silhouette, étoffer certaines zones,
            nous vous accompagnons avec des conseils personnalisés.
          </p>
          <h2 className="text-primary-800 text-2xl font-semibold ">
            Ce que nous offrons :
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 space-y-2">
            <li>
              Étude de la silhouette : Nous analysons vos courbes et proportions
              pour identifier les coupes et les styles qui harmonisent et
              subliment votre morphologie.
            </li>
            <li>
              Conseils adaptés à vos objectifs : Que vous souhaitiez mettre en
              avant certaines parties de votre corps ou adoucir d'autres, nous
              vous aidons à choisir des vêtements qui répondent à vos attentes.
            </li>
            <li>
              Recommandations personnalisées : Nos conseils prennent en compte
              votre quotidien, vos occasions spéciales ainsi que les saisons
              pour une garde-robe à la fois pratique et esthétique.
            </li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            Pourquoi choisir Image'In et Vous ?
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Nous offrons une approche entièrement personnalisée, axée sur
            l'écoute de vos besoins et de vos aspirations. Notre objectif est de
            vous aider à vous sentir bien dans vos vêtements, tout en reflétant
            votre personnalité et en mettant en valeur votre silhouette unique.
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="/contact" // Changez ce lien selon vos besoins
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold rounded-md text-primary-800 hover:text-tercary-400 transition duration-300"
            >
              <span className="mr-2">→</span>
              Prenez rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
