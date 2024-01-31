/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        miltonian: ["Black Ops One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
