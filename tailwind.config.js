/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgreen': '#132A13',
        'hunter': '#386641',
        'asparagus': '#6A994E',
        'yellgreen': '#A7C957',

        'mindaro': '#ECF39E',
        'parchment': '#F2E8CF',
        'gold': '#FFD60A',

        'candyred': '#FF1F0A',
        'bittershim': '#BC4749',

        'eerieblack': '#212529',
        'onyx': '#343A40',
        'outerspace': '#495057',

        'seasalt': '#F8F9FA',
        'antiflash': '#E9ECEF',
        'platinum': '#DEE2E6',
      },
      fontFamily: {
        'serif': ['Roboto Slab', 'serif'],
        'sans': ['Roboto', 'sans-serif'],
        'arabic': ['Amiri Quran Regular']
      }
    },
  },
  plugins: [],
}
