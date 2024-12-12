export default function About() {
  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-0 gap-6 px-6 md:px-16 py-12">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center space-y-6 animate-fade-slide-left">
          <h1 className="text-primary-800 text-4xl md:text-5xl font-bold leading-tight">
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

        {/* Right Section: Images */}
        <div className="grid grid-rows-2 gap-4 animate-fade-slide-up">
          <div
            className="row-span-2 w-full h-[300px] lg:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: "url('/assets/about-1.jpg')",
            }}
          ></div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="w-full h-[150px] lg:h-[200px] bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/assets/about-2.jpg')",
              }}
            ></div>
            <div
              className="w-full h-[150px] lg:h-[200px] bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: "url('/assets/about-3.jpg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
