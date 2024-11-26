export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/clothes-1839935_1920.jpg')" }}
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text container */}
      <div className="relative flex items-center h-full px-8 md:px-16 text-white">
        {/* Left-aligned Title (1/3 width) */}
        <div className="w-1/3">
          <h1 className="title text-4xl md:text-6xl lg:text-7xl font-bold">
            Analyse de votre style actuel
          </h1>
        </div>

        {/* Right-aligned Text (2/3 width) */}
        <div className="w-2/3 text-right">
          <p className="text text-lg md:text-xl">
            Nous identifions vos préférences vestimentaires, couleurs et pièces
            clés de votre garde-robe. Conseils pour améliorer ou affirmer votre
            style : Que vous vouliez adopter un style plus moderne, plus affirmé
            ou retourner au naturel, nous vous accompagnons dans le choix de
            vêtements et accessoires qui correspondent à votre futur tel que
            vous le voulez.
          </p>
        </div>
      </div>
    </div>
  );
}
