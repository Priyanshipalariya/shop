const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      padding: {
        12.5: "50px"
      }
    },
    colors: {
      primary: {
        light: "rgb(245, 148, 148)",
        default: "rgb(255, 81, 81)",
        dark: "rgb(248, 47, 47)",
      },
      gray: {
        200: "rgb(244, 245, 246)",
      },
      white: colors.white,
      black: colors.black,
        rose: colors.rose,
        gray: colors.gray,
    
},
  },
  plugins: [],
}
