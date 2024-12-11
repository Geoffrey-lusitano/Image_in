import Link from "next/link";

export default function Wardrobe() {
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
              backgroundImage: "url('/assets/wardrobe-1.jpg')", // Remplacez par votre image
            }}
            aria-label="Analyse dressing image 1"
          ></div>

          {/* Bottom Image */}
          <div
            className="w-full aspect-video bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/assets/wardrobe-2.jpg')", // Remplacez par votre image
            }}
            aria-label="Analyse dressing image 2"
          ></div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-primary-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Analyse & tri du Dressing
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Votre dressing déborde mais vous avez toujours l'impression de ne
            rien avoir à vous mettre ? Faites de votre dressing un atout et non
            une source de stress !
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Pourquoi l'analyse et le tri de dressing ? Un dressing encombré peut
            compliquer vos choix vestimentaires au quotidien. Notre service
            d'analyse et de tri vous aide à identifier les pièces qui vous
            mettent en valeur, selon votre colorimétrie, votre morphologie,
            votre style de vie et à vous alléger des vêtements qui ne vous
            servent plus. Une garde-robe parfaitement adaptée à vous.
          </p>
          <h2 className="text-primary-800 text-2xl font-semibold ">
            Ce que nous offrons :
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 space-y-2">
            <li>
              Tri personnalisé selon votre colorimétrie, votre analyse de style
              et vos préférences.
            </li>
            <li>
              Conseils vestimentaires pour savoir quelles pièces garder, comment
              les associer entre elles.
            </li>
            <li>
              Réorganisation de votre garde-robe pour gagner en clarté et en
              efficacité avec un dressing bien structuré et réfléchi pour
              maximiser votre style.
            </li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700">
            Pourquoi choisir Image'In et Vous ? Notre approche est totalement
            centrée sur vos besoins et votre style. Avec notre expertise, vous
            transformerez votre dressing en un espace pratique et inspirant où
            chaque journée sera l'occasion de vous sentir en confiance.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Prenez rendez-vous dès maintenant et découvrez le plaisir d'un
            dressing organisé qui sublime votre style au quotidien !
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <Link
              href="/contact" // Changez ce lien selon vos besoins
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-semibold rounded-md text-primary-800 hover:text-tercary-400 transition duration-300"
            >
              <span className="mr-2">→</span>
              Prenez rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
