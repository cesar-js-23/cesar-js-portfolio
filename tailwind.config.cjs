/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/img/Pattern.svg')",
        patternDark: "url('/src/assets/img/Pattern-dark.svg')",
      },
    },
  },
  plugins: [],
};
