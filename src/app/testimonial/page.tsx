"use client";

import Slider from "react-slick";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aurélie , 46 ans",
      text: "Un grand merci à Sylvie pour ses conseils. Parfois on porte certaines choses parce qu'on pense qu ils nous vont bien mais grâce aux conseils avisés de Sylvie, je suis allée vers des teintes que je n'aurai jamais osé tester mais qui au final me mettent plus en valeur… Comme quoi associer les couleurs au teint et cheveux c'est pas si facile que ça ! C'est un métier !!! En un apres midi, très rapidement j ai pu savoir grâce à Sylvie, quelles couleurs et formes de vêtements me mettent réellement en valeur. Un grand Merci",
    },
    {
      name: "Maud",
      text: "J'ai eu l'occasion de faire une scéance de colorimétrie. Cette expérience m'a permis de prendre conscience de l'effet que peuvent avoir les couleurs sur notre visage et à quelle point elles peuvent nous mettre en valeur ou non. Je peux donc faire les magasins en fonction de ces informations. Après j'ai fait des séances de 'tri' de mes vêtements, de ce qui me va ou non et qu'elle assortiment je peux faire. Je suis vraiment contente d'avoir pu faire cela. Ça m'a permis d'avoir plus confiance en moi et de prendre plus de plaisir à m'habiller. De plus Sylvie est vraiment une personne gentille et douce qui tient pas seulement compte du physique mais aussi du psychologique. Je recommande vraiment !",
    },
    {
      name: "Claire, 39 ans",
      text: "Sylvie m'a accompagné avec beaucoup de bienveillance et de professionnalisme. J'ai découvert des couleurs qui illuminent mon teint et qui me donnent une tout autre allure, alors que je ne les aurais jamais envisagées auparavant. Grâce à ses conseils, j'ai appris à valoriser ma silhouette avec des vêtements qui correspondent réellement à ma personnalité et à mes envies. Cette expérience m'a non seulement permis de trier efficacement ma garde-robe, mais aussi de mieux comprendre comment jouer avec les couleurs et les styles au quotidien. Sylvie a une approche à la fois douce et psychologique, ce qui m'a vraiment mise à l'aise dès le départ. Je recommande ses services à toutes celles et ceux qui souhaitent révéler le meilleur d'eux-mêmes !",
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
    <section className="relative bg-white py-16 px-4 md:px-16 animate-fade-slide-up">
      <div className="text-center mb-12">
        <h1 className="title text-primary-800 text-4xl md:text-5xl font-bold">
          Livre d'or
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Découvrez les avis de nos clients satisfaits et inspirez-vous de leurs
          expériences.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
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
        <div
          className="w-full h-[200px] md:h-[300px] lg:h-[350px] bg-cover bg-center rounded-lg shadow-lg"
          style={{
            backgroundImage: "url('/assets/testimonial.jpg')",
          }}
          aria-label="Décoration"
        ></div>
      </div>
    </section>
  );
}
