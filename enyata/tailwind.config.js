/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './dist/**/*.{hbs, js, html}'],
  theme: {
    extend: {
      colors: {
        primary: '#aaff00',
      },
    },
  },
  plugins: [],
}
