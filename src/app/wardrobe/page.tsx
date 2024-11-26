export default function Wardrobe() {
  return (
    <section className="relative bg-white py-16">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-8 md:px-16">
        {/* Left Section: Images */}
        <div className="flex flex-col justify-around space-y-6 h-full lg:space-y-0">
          {/* First Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/clothes-1839935_1920.jpg')",
            }}
          ></div>

          {/* Second Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] bg-cover bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fabric-1490513_1920.jpg')",
            }}
          ></div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col justify-start space-y-6">
          <h1 className="title text-4xl md:text-5xl font-bold leading-tight">
            Analyse de Dressing
          </h1>
          <p className="text text-lg md:text-xl text-gray-700">
            Votre dressing déborde mais vous avez toujours l'impression de ne
            rien avoir à vous mettre ? Faites de votre dressing un atout et non
            une source de stress !
          </p>
          <p className="text text-lg md:text-xl text-gray-700">
            Pourquoi l'analyse et le tri de dressing ? Un dressing encombré peut
            compliquer vos choix vestimentaires au quotidien. Notre service
            d'analyse et de tri vous aide à identifier les pièces qui vous
            mettent en valeur, selon votre colorimétrie, votre morphologie,
            votre style de vie et à vous alléger des vêtements qui ne vous
            servent plus. Une garde-robe parfaitement adaptée à vous.
          </p>
          <h2 className="subtitle text-2xl font-semibold text-gray-800">
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
          <p className="text text-lg md:text-xl text-gray-700">
            Pourquoi choisir Image'In et Vous ? Notre approche est totalement
            centrée sur vos besoins et votre style. Avec notre expertise, vous
            transformerez votre dressing en un espace pratique et inspirant où
            chaque journée sera l'occasion de vous sentir en confiance.
          </p>
          <p className="text text-lg md:text-xl text-gray-700">
            Prenez rendez-vous dès maintenant et découvrez le plaisir d'un
            dressing organisé qui sublime votre style au quotidien !
          </p>
        </div>
      </div>
    </section>
  );
}
