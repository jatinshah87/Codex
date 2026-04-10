import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mocha: "#291611",
        espresso: "#3f241d",
        truffle: "#5d3a2d",
        caramel: "#b57f58",
        almond: "#dcc5ae",
        cream: "#f7f0e7",
        blush: "#ead8cb",
        gold: "#d0a868"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(41, 22, 17, 0.12)",
        luxe: "0 24px 60px rgba(41, 22, 17, 0.18)"
      },
      backgroundImage: {
        "glow-radial":
          "radial-gradient(circle at top, rgba(208,168,104,0.18), transparent 42%)",
        "hero-mesh":
          "linear-gradient(135deg, rgba(93,58,45,0.96), rgba(41,22,17,0.92)), radial-gradient(circle at top left, rgba(208,168,104,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(234,216,203,0.22), transparent 26%)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        rise: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
