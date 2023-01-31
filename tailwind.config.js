/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "pink-flower": "url('/assets/pink-flower.svg')",
        "white-flower": "url('/assets/white-flower.svg')",
      },
      backgroundPosition: {
        half: "left bottom",
        "half-center": "center bottom",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: "#e5e7eb",
        400: "#9ca3af",
        600: '#4b5563',
        900: '#111827',
      },
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
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "20px" },
      });
    }),
  ],
};
