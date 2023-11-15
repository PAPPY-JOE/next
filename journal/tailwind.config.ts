import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aSans: ["var(--font-aSans)"],
        cVintage: ["var(--font-cVintage)"],
        mont: ["var(--font-mont)"],
      },
      keyframes: {
        roundTheWorld: {
          "0%": { top: "10%", left: "5%" },
          "30%": { top: "40%", left: "95%" },
          "48%": { top: "80%", left: "33%" },
          "58%": { top: "55%", left: "5%" },
          "70%": { top: "15%", left: "80%" },
          "85%": { top: "90%", left: "20%" },
          "100%": { top: "10%", left: "5%" },
        },
      },
      animation: {
        roundTheWorld: "roundTheWorld 16s ease infinite",
        roundTheWorldie: "roundTheWorld 20s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
