/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'cursive'],
        inter: ['Inter', 'sans-serif']
        
      },
      colors: {
        'gold': '#D4Af37',
        'brown': '#61494a',
        'lightb': '#b9796c'
      },
    },
    
  },
  plugins: [],
}

