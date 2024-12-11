import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-800">
        Contact
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary-800">
              Contactez-nous
            </h2>
            <p className="text-gray-700 mt-4">
              Vous avez une question, besoin d’un conseil ou souhaitez prendre
              rendez-vous ? N’hésitez pas à nous contacter directement.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full">
                <FaPhone size={32} />
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">
                  Téléphone
                </h3>
                <p className="text-gray-700">+33 6 17 87 17 45</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full">
                <MdEmail size={32} />
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">Email</h3>
                <a
                  href="mailto:Sylvie@imaginetvous.com"
                  className="text-gray-700 hover:text-tercary"
                >
                  Sylvie@imaginetvous.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full">
                <IoLocationSharp size={32} />
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">
                  Adresse
                </h3>
                <p className="text-gray-700">
                  473 chemin de roman 73420 Méry, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl border border-primary-800 p-8">
          <form
            action="mailto:Sylvie@imaginetvous.com"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="sr-only">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="Nom"
                  placeholder="Nom"
                  required
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800  focus:text-black"
                />
              </div>
              <div>
                <label htmlFor="prenom" className="sr-only">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="Prénom"
                  placeholder="Prénom"
                  required
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2  focus:outline-none focus:border-primary-800 focus:text-black"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="telephone" className="sr-only">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="Téléphone"
                  placeholder="Téléphone"
                  required
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
                />
              </div>
              <div>
                <label htmlFor="ville" className="sr-only">
                  Ville
                </label>
                <input
                  type="text"
                  id="ville"
                  name="Ville"
                  placeholder="Ville"
                  required
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Email"
                required
                className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                placeholder="Votre message, vos demandes."
                rows={4}
                required
                className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-800 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-primary-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 text-secondary text-sm text-center">
            Sylvie@imaginetvous.com - 06 17 87 17 45
          </div>
        </div>
      </div>
    </section>
  );
}
