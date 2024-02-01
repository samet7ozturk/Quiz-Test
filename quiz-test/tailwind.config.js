/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        animation1: "animation1 0.3s ease-in both",
        animation2: "animation2 0.4s linear both",
        animation3: "animation3 0.4s linear both",
      },
      keyframes: {
        animation1: {
          "0%": { transform: "scale(0.5)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        animation2: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        animation3: {
          "0%": { transform: "translateY(-100%)", opacity: 0.5 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      fontFamily: {},
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
