// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '485px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'light-blue':'#01b4e4',
        'light-green':'#90cea1',
        'gray-750' : '#262F3A',
        'c-green-500' : '#74ac04'
      },
      spacing: {
        '2.7' : '0.7rem',
        '1/8' : '14%',
        '1/10' : '12%',
        '26' : '6.5rem',
        '4/5' : '85%',
        '110' : '110%'
      },
      borderWidth: {
        '3' : '3px'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [],
}
