const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme=>({
        'orange-pattern' : "url('https://cdn.wallpapersafari.com/84/8/0SgRZF.jpg')",
        'green-pattern':"url('https://wallpaperaccess.com/download/dark-green-pattern-1288360')"
      })
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      green:colors.emerald,
      red:colors.red,
      gray:colors.coolGray,
      white:colors.white,
      light:{
        yellow:'#EDECDF',
        gray:'F7F2F2',
        green:'#95B391'
      },
      charcoal:{
        dark:'#393737',
        primary:'#355D39',
      },
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
      backgroundImage: ['responsive', 'hover', 'focus', 'active'],
      transitionDuration: ['hover', 'responsive']
    },
  },
  plugins: [],
}
