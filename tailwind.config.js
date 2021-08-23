const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      green:colors.emerald,
      red:colors.red,
      gray:colors.coolGray,
      white:colors.white,
      orange:{
        50:'#fff3e0',
        100:'#ffe0b2',
        200:'#ffcc80',
        300:'#ffb74d',
        400:'#ffa726',
        500:'#ff9800',
        600:'#fb8c00',
        700:'#f57c00',
        800:'#ef6c00',
        900:'#e65100'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
