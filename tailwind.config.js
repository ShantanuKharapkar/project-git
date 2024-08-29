/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.{js,jsx}"],
 
  // Enable Just-In-Time mode for Tailwind CSS
  mode: "jit",

  // Extend the default theme
  theme: {
    extend: {
      // Custom colors
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      // Custom fonts
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
     
      },
    },
    // Custom screen breakpoints
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  // No additional plugins are added
  plugins: [],
};
