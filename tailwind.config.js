/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'new-amsterdam': ['"New Amsterdam"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

