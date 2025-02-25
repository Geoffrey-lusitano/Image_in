import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig = {
  output: "export", // Active l'export statique
  images: {
    unoptimized: true, // 🔥 Désactive l’optimisation pour éviter les bugs
  },
};

export default nextConfig;
