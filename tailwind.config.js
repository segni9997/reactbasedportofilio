/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      "primary-color": "#45C4E9",
      "bg-pri": "#f7f5fb",
      "bg-sec": "#f58a07",
      "bg-ter": "#084887",
      "bg-fou": "#f9ab55",
      "bg-fth": "#909cc2",
    },
     fontFamily: {
    'pri': 'Ga Maamli' // Replace 'YourFontFamilyName' with the actual name of your font
    },
  },
  },
  plugins: [],
};
