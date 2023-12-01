/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          950: "#00295F",
        }
      },
      spacing: {
        '9': '72px',
        '10': '80px',
      },
      width:{
        '400': '400px',
        '768': '768px',
      }

    },
  },
  plugins: [],
});

