/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        animation1: "animation1 0.3s linear both",
      },
      keyframes: {
        animation1: {
          "0%": { transform: "scale(0.5)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      fontFamily: {
        miltonian: ["Black Ops One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
