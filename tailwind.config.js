/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        primaryBackground:
          "linear-gradient(180deg, rgba(245, 219, 149, 0.8) 0%, rgba(154, 138, 98, 0.8) 11.8%, rgba(0, 0, 0, 1) 36.83%, rgba(0, 0, 0, 1) 100%)",
      },
    },
  },
  plugins: [],
};
