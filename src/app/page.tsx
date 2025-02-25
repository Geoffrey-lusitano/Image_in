import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* -- L'image de fond, z-0 -- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/clothes-1839935_1920.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          unoptimized
        />
      </div>

      {/* -- Le voile sombre, z-10 -- */}
      <div className="absolute inset-0 z-10 bg-black bg-opacity-60" />

      {/* -- Le bloc texte, z-20 -- */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          S'HABILLER DE SOI
        </h1>
        <p className="text-xl mt-4 drop-shadow-lg">
          Les diktats de la mode veulent vous imposer leurs lois ?<br />
          Le regard des autres vous pèse ?
        </p>
      </div>

      {/* -- Bloc supplémentaire en bas à droite (exemple) -- */}
      <div className="absolute bottom-10 right-10 z-20 bg-black bg-opacity-60 rounded-lg p-4 md:p-6 text-white max-w-xl">
        <h3 className="text-lg md:text-2xl font-semibold mb-2 drop-shadow-lg uppercase">
          Se déshabiller des autres pour s'habiller de soi !
        </h3>
        <p className="text-sm md:text-base drop-shadow-lg">
          C'est notre but et nous sommes là pour vous accompagner
        </p>
      </div>
    </div>
  );
};

export default Home;
