/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '1px', // Custom, smaller than sm
      },
      
      fontFamily:{
        'LilitaOne': ['Lilita One', 'sans-serif'],
        'VarelaRound': ['Varela Round', 'sans-serif'],
        'Questrial': ['Questrial', 'sans-serif'],
        'PTSansNarrow': ['PT Sans Narrow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}