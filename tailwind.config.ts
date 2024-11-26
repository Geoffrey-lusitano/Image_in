import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        200: "#FFF7EF",
        400: "#FFEDE2",
        DEFAULT: "#FFE5D9",
        600: "#DBAD9E",
        800: "#934E45",
      },
      secondary: {
        200: "#F7F1E9",
        400: "#D4C7BD",
        DEFAULT: "#B8A89E",
        600: "#845D4F",
        800: "#6A3D32",
      },
      tercary: {
        200: "#F4DDA0",
        400: "#C19544",
        DEFAULT: "#996515",
        600: "#83510F",
        800: "#582E06",
      },
      gray: {
        400: "#F2F2F2",
        500: "#E5E5E5",
        600: "#B2B2B2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
