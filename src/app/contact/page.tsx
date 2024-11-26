export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-16">
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
                📞
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">
                  Téléphone
                </h3>
                <p className="text-gray-700">+33 6 12 34 56 78</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full">
                ✉️
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">Email</h3>
                <p className="text-gray-700">contact@imagein.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="bg-primary-800 text-white p-3 rounded-full">
                📍
              </span>
              <div>
                <h3 className="text-lg font-medium text-primary-800">
                  Adresse
                </h3>
                <p className="text-gray-700">
                  123 Rue de la Beauté,
                  <br />
                  75000 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nom" className="sr-only">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  placeholder="Nom"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
                />
              </div>
              <div>
                <label htmlFor="prenom" className="sr-only">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  placeholder="Prénom"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
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
                  placeholder="Téléphone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
                />
              </div>
              <div>
                <label htmlFor="ville" className="sr-only">
                  Ville
                </label>
                <input
                  type="text"
                  id="ville"
                  placeholder="Ville"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
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
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
              />
            </div>

            {/* Dropdown */}
            <div>
              <label htmlFor="demande" className="sr-only">
                Préciser ma demande
              </label>
              <select
                id="demande"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
              >
                <option value="">Préciser ma demande</option>
                <option value="rdv">Prendre un rendez-vous</option>
                <option value="question">Poser une question</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Votre message, vos demandes."
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-primary-800 focus:border-primary-800"
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
          <div className="mt-6 text-gray-700 text-sm text-center">
            metamorpho.contact@gmail.com - 06 31 03 73 15
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-primary-800 text-center mb-6">
          Trouvez-nous
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337120927223!2d2.3488!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d8771c8aab%3A0x5528a74b7ec99f7c!2sParis%2C%20France!5e0!3m2!1sen!2sfr!4v1680000000000!5m2!1sen!2sfr"
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
