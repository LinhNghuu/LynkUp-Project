/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "valentine"],
  },
  purge: ['./**/*.ejs'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
