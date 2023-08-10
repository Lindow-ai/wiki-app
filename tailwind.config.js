/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      darkMode: "class",
      colors: {
        surface: {
          50: "#e4e6ee",
          100: "#dbdee9", 
          200: "#d2d6e3", 
          300: "#b6bdd2", 
          400: "#808cb1", 
          500: "#495a8f", 
          600: "#425181", 
          700: "#37446b", 
          800: "#2c3656", 
          900: "#242c46", 
        }
      },
    },
  },
  plugins: [],
})
