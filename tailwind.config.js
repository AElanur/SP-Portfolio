/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainCol': ' #1A2D2B',
        'mainAcc': '#BB6765',
        'notWhite': '#F5C9C6'
      },
    },
    
  },
  plugins: [],
}


