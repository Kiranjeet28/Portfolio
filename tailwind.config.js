/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage:{
        
        'bg':"url('/src/assets/Neutral Creative Professional LinkedIn Article Cover Image.png')"
      }
    },
  },
  plugins: [],
}

