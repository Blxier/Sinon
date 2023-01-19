/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Roboto: ["Roboto Condensed, sans-serif"],
    },
    colors:{
      "white": "#FFFFFF",
      "black": "#000000",
      "white-ish": "#F5F5F5",
      "main-color": "#006E68",
      "secondary-color": "#03211F",
      "gray":"gray",
      
    
    },
    container: {
      center: true,
      padding: "1rem",
      
    }
  
  },
  plugins: [],
}
