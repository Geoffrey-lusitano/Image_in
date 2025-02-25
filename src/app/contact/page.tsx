import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-800 animate-fade-slide-up">
        Contact
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 animate-fade-slide-left">
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
              <span className="bg-primary-800 text-white p-3 rounded-full hover:scale-110">
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
              <span className="bg-primary-800 text-white p-3 rounded-full hover:scale-110">
                <MdEmail size={32} />
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">Email</h3>
                <a
                  href="mailto:Sylvie.clerc@laposte.net"
                  className="text-gray-700 hover:text-tercary"
                >
                  Sylvie.clerc@laposte.net
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full hover:scale-110">
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
        <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl border border-primary-800 p-8 animate-fade-slide-right">
          <form
            action="mailto:Sylvie.clerc@laposte.net"
            method="POST"
            encType="text/plain"
            className="space-y-6"
          >
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
                  autoComplete="family-name"
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
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
                  autoComplete="given-name"
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
                />
              </div>
            </div>
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
                  autoComplete="tel"
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
                  autoComplete="address-level2"
                  className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
                />
              </div>
            </div>
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
                autoComplete="email"
                className="w-full text-gray-700 placeholder:text-secondary px-4 py-3 rounded-lg border border-primary-800 focus:ring-primary-800 focus:ring-2 focus:outline-none focus:border-primary-800 focus:text-black"
              />
            </div>
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
            <button
              type="submit"
              className="w-full bg-primary-800 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-primary-700 transition duration-300"
            >
              Envoyer
            </button>
          </form>
          <div className="mt-6 text-secondary text-sm text-center">
            Sylvie.clerc@laposte.net - 06 17 87 17 45
          </div>
        </div>
      </div>
      <div className="mt-16 animate-fade-slide-up">
        <h2 className="text-2xl font-semibold text-primary-800 text-center mb-6">
          Trouvez-nous
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11156.88412393808!2d5.913226735435457!3d45.646382839163984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba7100094170b%3A0x5b9df58dbce795a4!2s473%20Chem.%20de%20Roman%2C%2073420%20Mery!5e0!3m2!1sfr!2sfr!4v1732791813295!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
