// Footer.js

import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { Logo } from "@/design-system/logo/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Colonne 1 : Logo et description */}
          <div className="w-full lg:w-1/3 mb-6">
            <Logo size="small" />
            <p className="mt-4">
              Imagin'et Vous, conseillère en image en Rhône-Alpes, vous
              accompagne dans la valorisation de votre image.
            </p>
          </div>
          {/* Colonne 2 : Navigation en 3 colonnes */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ul>
                <li className="mb-2">
                  <Link href="/" className="hover:text-tercary-200">
                    Accueil
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/about" className="hover:text-tercary-200">
                    À propos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/colorimetry" className="hover:text-tercary-200">
                    Colorimétrie
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2">
                  <a href="/morphology" className="hover:text-tercary-200">
                    Morphologique
                  </a>
                </li>
                <li className="mb-2">
                  <Link href="/fashion" className="hover:text-tercary-200">
                    Style
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/wardrobe" className="hover:text-tercary-200">
                    Dressing
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-2">
                  <Link href="/testimonial" className="hover:text-tercary-200">
                    Livre d’or
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-tercary-200">
                    Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/blog" className="hover:text-tercary-200">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Colonne 3 : Contact et réseaux sociaux */}
          <div className="w-full lg:w-1/3 mb-6">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p>Adresse : 473 chemin de roman 73420 Méry</p>
            <p>
              Téléphone :{" "}
              <a href="tel:+33617871745" className="hover:text-tercary-200">
                06 17 87 17 45
              </a>
            </p>
            <p>
              Email :{" "}
              <a
                href="mailto:sylvie@imaginetvous.com"
                className="hover:text-tercary-200"
              >
                sylvie@imaginetvous.com
              </a>
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-tercary-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-white hover:text-tercary-200"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                className="text-white hover:text-tercary-200"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Lignes de séparation */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p>&copy; 2024 Imagin'et Vous. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/legal-notice" className="hover:text-primary">
                Mentions légales
              </Link>
              <Link href="/privacy-policy" className="hover:text-primary">
                Politique de confidentialité
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
