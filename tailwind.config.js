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
    },keyframes: {
      'bounce-in': {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.1)' },
      },
      'click-effect': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.9)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      'bounce-in': 'bounce-in 0.3s ease-in-out',
      'click-effect': 'click-effect 0.2s ease-in-out',
    },
  },
  },
  plugins: [],
};
