import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/colorimetry">Colorimétrie</Link></li>
        <li><Link href="/morphology">Analyse Morphologique</Link></li>
        <li><Link href="/fashion">Analyse de Style</Link></li>
        <li><Link href="/wardrobe">Analyse de Dressing</Link></li>
        <li><Link href="/testimonial">Livre d’or</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
