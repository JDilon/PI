/** @type {import('tailwindcss').Config} */
module.exports = {
  
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],

  theme: {
    extend: {
      colors:{
        gray:{
          750: '#323c4a'
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

