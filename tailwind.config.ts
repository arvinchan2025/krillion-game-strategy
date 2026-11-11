import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: "#061824",
          900: "#092334",
          800: "#10364a",
          700: "#174b61",
          500: "#28b9a8",
          400: "#56d6c2",
          100: "#d9f7f1"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(40,185,168,.18)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
