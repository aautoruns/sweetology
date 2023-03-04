/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        satisfy: ['Satisfy'],
        golos: ['Golos'],
      },
      fontSize: {
        '7xl': '5rem',
        '10xl': '6rem',
      },
      colors: {
        primary: '#be185d',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
