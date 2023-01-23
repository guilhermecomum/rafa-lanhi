const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pink-flower': "url('/assets/pink-flower.svg')",
        'white-flower': "url('/assets/white-flower.svg')",
      },
      backgroundPosition: {
        'half': '-270px 110%',
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: "#ccc",
      pink: {
        DEFAULT: "hsl(308, 29%, 46%)",
        50: "hsl(308, 29%, 66%)",
        500: "hsl(308, 29%, 45%)",
      },
      green: {
        DEFAULT: "hsl(118, 15%, 65%)",
        50: "hsl(118, 15%, 80%)",
        500: "hsl(118, 15%, 40%)",
      },
    },
    boxShadow: {
      "custom-pink": "0px 0px 8px 2px rgb(151 83 142 / 20%)",
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
