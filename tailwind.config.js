/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [false],
  },
  theme: {
    container: {
      center: true,
      padding: "1.3rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        robotoOriginal: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
      },
      boxShadow: {
        custom: 'rgb(85, 91, 255) 0 0 50px 5px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}
