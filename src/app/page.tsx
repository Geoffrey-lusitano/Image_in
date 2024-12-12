import React from "react";

export default function Home() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/clothes-1839935_1920.jpg')" }}
    >
      <div className="relative flex flex-col items-center justify-center h-full px-8 md:px-16 text-white text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide opacity-0 translate-y-10 animate-fade-slide-up">
          Imagin'et Vous
        </h1>
        <div className="relative bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-lg p-6 md:p-10 shadow-lg opacity-0 translate-y-10 animate-fade-slide-up delay-600ms">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            S'habiller de Soi
          </h3>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
            Les dicdats de la mode veulent vous imposer leurs lois ? Le regard
            des autres vous pèse ? Se déshabiller des autres pour s'habiller de
            Soi ! Tel est notre but chez Imagin'et Vous et nous sommes là pour
            vous accompagner...
          </p>
        </div>
      </div>
    </div>
  );
}
