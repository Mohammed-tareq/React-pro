/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      

  ],
  theme: {
    container:{
      center:true,
      padding:{
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '7rem',

      }
    },
    extend: {},
  },
  plugins: [],
}

