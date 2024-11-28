export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/clothes-1839935_1920.jpg')" }}
    >
      {/* Overlay for darkening the background image */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-8 md:px-16 text-white text-center space-y-8">
        {/* Company Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          Imagin'et Vous
        </h1>

        {/* Text Container with Blur Effect */}
        <div className="relative bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-lg p-6 md:p-10 shadow-lg">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Analyse de votre style actuel
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
            Nous identifions vos préférences vestimentaires, couleurs et pièces
            clés de votre garde-robe. Que vous vouliez adopter un style plus
            moderne, plus affirmé ou retourner au naturel, nous vous
            accompagnons dans le choix de vêtements et accessoires qui
            correspondent à votre futur tel que vous le voulez.
          </p>
        </div>
      </div>
    </div>
  );
}
