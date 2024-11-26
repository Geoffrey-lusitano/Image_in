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
    <section className="bg-white py-16 px-4 md:px-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
        Livre d'or
      </h1>

      <Slider {...settings} className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-8"
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
    </section>
  );
}
