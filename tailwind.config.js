/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#5c5c5c', // #29628D
      'dark-blue': '#4f4f4f', // #245779,
      red: '#6635d0', // #D0343E
      white: '#F5F5F5',
      grey: '#777777',
      'light-grey': '#DBDBDB',
      'dark-grey': '#333333',
      transparent: 'rgba(255, 255, 255, 0)'
    },
    extend: {
      height: {
        'big': '52rem',
      },
      backgroundImage: {
        'deals': "url('/src/assets/tomatoes.png')",
        'combo-deal': "url('/src/assets/bogo_tomatoes.png')",
        'spread': "url('/src/assets/spread.png')",
        'menu-invitation': "url('/src/assets/menu_invitation.png')",
      },
      boxShadow: {
        'menu': 'rgba(0, 0, 0, 0.25) 0px 0px 0px 5rem inset'
      },

      letterSpacing: {
        widest: '0.2rem',
        widester: '0.5rem'
      },
      fontSize: {
        'xxxs': '0.45rem',
        'xxs': '0.65rem',
        'xs': '.8rem',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        dm: ["DM Serif Display", "serif"],
        crimson: ["Crimson Text", "serif"],
      }
    },
  },
  plugins: [],
}

