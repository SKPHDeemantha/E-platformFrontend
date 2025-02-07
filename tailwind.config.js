/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#FFF9B0",
        "secondary" : "#FFD384",
         "accent" : "#FF884B",
         "mycolor": "#FF577F",
         "adminprimary":"#075985",
         "adminsecondary" :"#67e8f9"
      }
    },
  },
  plugins: [],
}