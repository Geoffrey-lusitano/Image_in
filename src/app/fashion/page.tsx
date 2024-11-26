export default function Fashion() {
  return (
    <section className="bg-white">
      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Text */}
        <div className="px-8 md:px-16 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Analyse de Style
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Les temps changent, votre style de vie change, vous évoluez, il est
            normal que votre style vestimentaire s'harmonise avec qui vous êtes
            vraiment !
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            <strong>Pourquoi l'analyse de style :</strong> Au delà de la mode,
            il s'agit de comprendre votre identité, vos préférences et d'adapter
            vos tenues pour révéler au mieux qui vous êtes. Que vous cherchiez à
            moderniser votre look, à affirmer votre style personnel ou à vous
            habiller selon différentes occasions (professionnelles, spéciales
            ...), nous vous guiderons avec une analyse de style personnalisée et
            authentique.
          </p>
        </div>

        {/* Right: Image */}
        <div
          className="relative bg-cover bg-center h-[400px] md:h-[500px]"
          style={{
            backgroundImage: "url('/assets/cloth-1835894_1920.jpg')", // Remplacez par votre image
          }}
        >
          <div className="absolute inset-0 -skew-x-6 bg-gray-100 opacity-30"></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Image */}
        <div
          className="relative bg-cover bg-center h-[400px] md:h-[500px]"
          style={{
            backgroundImage: "url('/assets/hands-1866619_1920.jpg')", // Remplacez par votre image
          }}
        >
          <div className="absolute inset-0 -skew-x-6 bg-gray-100 opacity-30"></div>
        </div>

        {/* Right: Text */}
        <div className="px-8 md:px-16 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ce que nous offrons :
          </h2>
          <ul className="list-disc pl-6 mt-4 text-lg md:text-xl text-gray-700 space-y-2">
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
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left: Text */}
        <div className="px-8 md:px-16 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Pourquoi choisir Image'In et Vous ?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Notre démarche repose sur une écoute attentive et une approche
            personnalisée. Chaque personne a un style unique et notre objectif
            est de vous aider à l'exprimer pleinement, tout en vous offrant des
            solutions vestimentaires adaptées à vos besoins. Nous allions
            conseils professionnels et respect de votre individualité pour que
            vous puissiez vous sentir à l'aise et en confiance dans toutes les
            situations.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Prenez rendez-vous dès aujourd'hui et explorez les possibilités
            infinies de votre style personnel avec Image'In et Vous !
          </p>
        </div>

        {/* Right: Image */}
        <div
          className=" relative bg-cover bg-center h-[400px] md:h-[500px]"
          style={{
            backgroundImage: "url('/assets/fabric-1490513_1920.jpg')", // Remplacez par votre image
          }}
        >
          <div className="absolute inset-0 -skew-x-6 bg-gray-100 opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
