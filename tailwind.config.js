/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'green': '#595e57',
      'yellow': '#f4ce14',
      'orange': '#ee9972',
      'beige': '#fbdabb',
      'grey': '#edefee',
      'black': '#333333',
    },
    fontFamily: {
      'heading': ["Markazi Text", "serif"],
      'abc': ["Karla", "sans-serif"],
    }
  },
  plugins: [
    require('daisyui'),
  ],
}