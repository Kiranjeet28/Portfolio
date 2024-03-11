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
        'image':"url('./src/assets/IMG-20240102-WA0056.jpg')",
        'bg':"url('./src/assets/Neutral Creative Professional LinkedIn Article Cover Image.png')"
      }
    },
  },
  plugins: [],
}

