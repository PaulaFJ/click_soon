/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-main': 'url("/bg.jpg")',
      }
    },
  },
  plugins: [],
}
