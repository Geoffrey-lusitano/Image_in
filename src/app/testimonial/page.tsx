"use client";

import Slider from "react-slick";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie D.",
      text: "Une expérience incroyable ! Grâce à cette analyse, j'ai enfin trouvé les vêtements qui correspondent à ma personnalité.",
    },
    {
      name: "Paul T.",
      text: "Un service de qualité, personnalisé et professionnel. Merci pour tous ces conseils !",
    },
    {
      name: "Lucie M.",
      text: "Je me sens tellement mieux dans ma peau maintenant. Une vraie transformation !",
    },
    {
      name: "Julien R.",
      text: "Des conseils pertinents et un accompagnement parfait. Je recommande vivement.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="relative bg-white py-16 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="title text-primary-800 text-4xl md:text-5xl font-bold">
          Livre d'or
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Découvrez les avis de nos clients satisfaits et inspirez-vous de leurs
          expériences.
        </p>
      </div>

      {/* Content Wrapper for Slider and Image */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-primary-400 rounded-lg"
            >
              <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonial.text}"
              </p>
              <span className="text-primary-800 font-bold text-lg">
                - {testimonial.name}
              </span>
            </div>
          ))}
        </Slider>

        {/* Decorative Image */}
        <div
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('/assets/wardrobe-1.jpg')", // Remplacez par votre image
          }}
          aria-label="Décoration"
        ></div>
      </div>
    </section>
  );
}
