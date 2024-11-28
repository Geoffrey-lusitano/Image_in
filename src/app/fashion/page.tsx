export default function Fashion() {
  return (
    <section className="relative bg-white py-16">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="title text-primary-800 text-4xl md:text-5xl font-bold leading-tight">
            Analyse de Style
          </h1>
          <p className="text text-lg md:text-xl text-gray-700">
            Les temps changent, votre style de vie change, vous évoluez, il est
            normal que votre style vestimentaire s'harmonise avec qui vous êtes
            vraiment !
          </p>
          <p className="text text-lg md:text-xl text-gray-700">
            <strong>Pourquoi l'analyse de style :</strong> Au-delà de la mode,
            il s'agit de comprendre votre identité, vos préférences et d'adapter
            vos tenues pour révéler au mieux qui vous êtes. Que vous cherchiez à
            moderniser votre look, à affirmer votre style personnel ou à vous
            habiller selon différentes occasions (professionnelles, spéciales
            ...), nous vous guiderons avec une analyse de style personnalisée et
            authentique.
          </p>
          <h2 className="title text-primary-800 text-2xl font-semibold">
            Ce que nous offrons :
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl text-gray-700 space-y-2">
            <li>
              <strong>Analyse de votre style actuel :</strong> Nous identifions
              vos préférences vestimentaires, couleurs et pièces clés de votre
              garde-robe.
            </li>
            <li>
              <strong>Conseils pour améliorer ou affirmer votre style :</strong>{" "}
              Que vous vouliez adopter un style plus moderne, plus affirmé ou
              retourner au naturel, nous vous accompagnons dans le choix de
              vêtements et accessoires qui correspondent à votre futur tel que
              vous le voulez.
            </li>
          </ul>
        </div>

        {/* Right Section: Images */}
        <div className="flex flex-col gap-6">
          {/* First Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fashion-1.jpg')", // Remplacez par votre image
            }}
          ></div>

          {/* Second Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fashion-2.jpg')", // Remplacez par votre image
            }}
          ></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-16 mt-16">
        {/* Left Section: Images */}
        <div className="flex flex-col gap-6">
          {/* First Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fashion-3.jpg')", // Remplacez par votre image
            }}
          ></div>

          {/* Second Image */}
          <div
            className="w-full h-[200px] md:h-[300px] lg:h-[350px] aspect-video bg-cover rounded-lg bg-center shadow-lg"
            style={{
              backgroundImage: "url('/assets/fashion-4.jpg')", // Remplacez par votre image
            }}
          ></div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="title text-primary-800 text-2xl font-semibold">
            Pourquoi choisir Image'In et Vous ?
          </h2>
          <p className="text text-lg md:text-xl text-gray-700">
            Notre démarche repose sur une écoute attentive et une approche
            personnalisée. Chaque personne a un style unique et notre objectif
            est de vous aider à l'exprimer pleinement, tout en vous offrant des
            solutions vestimentaires adaptées à vos besoins. Nous allions
            conseils professionnels et respect de votre individualité pour que
            vous puissiez vous sentir à l'aise et en confiance dans toutes les
            situations.
          </p>
          <p className="text text-lg md:text-xl text-gray-700">
            Prenez rendez-vous dès aujourd'hui et explorez les possibilités
            infinies de votre style personnel avec Image'In et Vous !
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
