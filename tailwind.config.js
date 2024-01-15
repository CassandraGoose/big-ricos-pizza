/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#5c5c5c', 
      'dark-blue': '#4f4f4f',
      red: '#6635d0',
      white: '#F5F5F5',
      grey: '#777777',
      'light-grey': '#DBDBDB',
      'mid-grey': '#bfbfbf',
      'dark-grey': '#333333',
      transparent: 'rgba(255, 255, 255, 0)'
    },
    extend: {
      height: {
        'big': '52rem',
      },
      backgroundImage: {
        'big-deal': "url('/src/assets/content/big_deal_tomatoes.webp')",
        'combo-deal': "url('/src/assets/content/combo_deal_tomatoes.webp')",
        'carryout-deal': "url('/src/assets/content/carryout_deal_spread.webp')",
        'browse-menu': "url('/src/assets/content/browse_menu_pizza.webp')",
      },
      boxShadow: {
        'menu': 'rgba(0, 0, 0, 0.25) 0px 0px 0px 5rem inset',
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

