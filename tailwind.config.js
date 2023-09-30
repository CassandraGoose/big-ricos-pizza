/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#5c5c5c', // #29628D
      'dark-blue': '#245779',
      red: '#6635d0', // #D0343E
      white: '#F5F5F5',
      grey: '#777777',
      'light-grey': '#DBDBDB',
      'dark-grey': '#333333',
    },
    extend: {
      letterSpacing: {
        widest: '0.2rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xs': '.8rem',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      }
    },
  },
  plugins: [],
}

