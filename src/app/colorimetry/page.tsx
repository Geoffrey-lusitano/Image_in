export default function Colorimetry() {
  return (
    <section className="relative bg-white py-16">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="title text-primary-800 text-4xl md:text-5xl font-bold leading-tight">
            Colorimétrie
          </h1>
          <p className="text text-lg md:text-xl text-gray-700">
            Véritable outil de révélation de soi, la colorimétrie est conçue
            pour vous aider à découvrir les teintes qui vous subliment et à les
            intégrer dans votre quotidien.
          </p>
          <p className="text text-lg md:text-xl text-gray-700">
            La colorimétrie est l'art de choisir les couleurs qui vous mettent
            le plus en valeur en fonction de votre teint, de vos cheveux et de
            vos yeux. En identifiant votre palette de couleurs personnelles,
            nous vous aidons à créer un style qui flatte votre apparence et
            reflète aussi votre personnalité unique.
          </p>
          <h2 className="title text-primary-800 text-2xl font-semibold ">
            Ce que nous offrons :
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 space-y-2">
            <li>
              Analyse personnalisée des couleurs : Grâce à des techniques
              professionnelles, nous déterminons les nuances qui vous
              conviennent le mieux.
            </li>
            <li>
              Conseils adaptés aux occasions et aux saisons : Nos
              recommandations vous aident à choisir des couleurs pour toutes les
              situations.
            </li>
            <li>
              Réajustement de dressing : Nous vous aidons à réorganiser votre
              garde-robe en fonction de votre palette de couleurs afin de
              maximiser votre potentiel stylistique.
            </li>
          </ul>
          <p className="text text-lg md:text-xl text-gray-700">
            Avec une approche professionnelle et personnalisée, nous nous
            engageons à vous offrir un service de colorimétrie qui dépasse vos
            attentes. Investir dans la colorimétrie, c'est investir dans une
            version plus épanouie de vous-même.
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

        {/* Right Section: Images */}
        <div className="flex flex-col gap-6">
          {/* First Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/colorimetry.webp')",
            }}
          ></div>

          {/* Second Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fabric-1490513_1920.jpg')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
