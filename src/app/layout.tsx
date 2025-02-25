import type { Metadata } from "next";
import {
  Playfair_Display,
  Montserrat,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "S'Habiller De Soi",
  description:
    "Avec une approche professionelle et personnalisée, nous nous engageons à vous offrir un service de colorimétrie qui dépasse vos attentes. Nos conseils sont basés sur une analyse approfondie de vos caractéristiques uniques et nous nous efforçons de rendre chaque séance aussi agréable qu'efficace.Investir dans la colorimétrie, c'est investir dans une version plus épanouie de vous-même.Allons ensemble vers les couleurs qui feront ressortir le meilleur de vous et transformez votre style en un reflet parfait de votre beauté naturelle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${libreBaskerville.variable}`}
      >
        <div className=" min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 animate-fade-slide-up">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
