export default function About() {
  return (
    <section className="relative bg-white">
      {/* Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 space-y-6">
          <h1 className="text-primary-800 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            À propos
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Mon histoire : Du plus loin que je me rappelle, j'ai grandi entouré
            d'étoffes, de couleurs, de vêtements. Ma grand-mère était
            couturière, et les tissus étaient de partout. Les satins de teinte
            bleu clair, les robes de soirées en velour bordeau, les paillettes
            ... tout se mélangeait dans sa pièce et prenait des allures de
            défilé ! J'adorais ça !!!
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            J'ai eu la chance aussi d'avoir une maman qui prenait du temps avec
            moi. Un de mes moments favoris était quand on jouait à "la dame qui
            va chez la couturière maquilleuse". Elle me demandait ce que je
            voulais mettre aujourd'hui, comment je voulais m'habiller, quelles
            teintes, pour quelle occasion et elle me disait comment elle allait
            me maquiller, quelle couleur elle allait me mettre et sur quelle
            partie de mon visage.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Tout naturellement, je crois, j'ai eu envie de redonner cette joie,
            cette sensation d'être unique pendant un moment. Je n'ai pas fait
            d'école d'esthétique. Je suis devenue Aide soignante. Je me suis
            intéressée au développement personnel et à de nombreuses techniques
            de développement de soi. En parallèle, j'ai continué pour le plaisir
            à "coacher" des amies et avec le temps je me suis dit : pourquoi pas
            ?... Et me voici !
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="relative">
          {/* Decorative Slanted Shape */}
          <div className="absolute inset-0 -skew-x-6 bg-gray-100"></div>
          {/* Main Image */}
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage: "url('/assets/apropos.jpg')", // Remplacez avec le chemin de votre image
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
