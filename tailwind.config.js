/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Raleway', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'ig-blue': '#16254B',
        'ig-light': '#E9FCFC',
        'ig-green': '#40D4B0'
      }
    },
  },
  plugins: [],
}
