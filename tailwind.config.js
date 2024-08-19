/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        founders: ['Founders Grotesk', 'sans-serif'],  // Founders Grotesk added
      },
      colors: {
        customGreen: '#559383',
        customDarkGreen: '#226655',
        customLight: '#EEECE1',
      },
      fontSize: {
        '2.7rem': '2.7rem',
      },
      lineHeight: {
        '2.85rem': '2.85rem',
      },
      letterSpacing: {
        'wider': '.1rem',
      },
    },
  },
 
};
