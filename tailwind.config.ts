import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#e9ddd0",
          300: "#d9c4b0",
          400: "#c7a88a",
          500: "#b8906f",
          600: "#a67c5a",
          700: "#8a664a",
          800: "#715440",
          900: "#5d4636",
          950: "#31241a",
        },
        honey: {
          50: "#fefbf3",
          100: "#fdf6e3",
          200: "#faebc4",
          300: "#f6d99a",
          400: "#f0c066",
          500: "#eba63a",
          600: "#dc8f1f",
          700: "#b87218",
          800: "#965a18",
          900: "#7a4b18",
          950: "#42260a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
