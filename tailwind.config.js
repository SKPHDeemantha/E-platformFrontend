/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#4A628A",
        "secondary" : "#7AB2D3",
         "accent" : "#B9E5E8",
         "mycolor": "#DFF2EB"
      }
    },
  },
  plugins: [],
}