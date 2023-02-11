/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/layouts/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        superblue: "#1877f2",
      },
    },
  },
  plugins: [],
};
