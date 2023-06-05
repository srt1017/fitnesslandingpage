/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "gray-20" : "#f8f4eb",
      "gray-50" : "efe6e6",
      "gray-100" : "#dfcccc",
      "gray-500" : "#5e0000",
      "primary-100" : "#ffe1e0",
      "primary-300" : "#ffa6a3",
      "primary-500": "#ff6b66",
      "secondary-400": "#ffcd58",
      "secondary-500": "#ffc132",
    },
    backgroundImage : (theme) => ({
      "gradient-yellowred": "linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
      "mobile-home": "url('./assets/HomePageGraphic.png')"
    })
  },
  plugins: [],
}