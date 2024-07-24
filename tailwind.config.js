/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "journal.html", "./src/**/*.{html,js}"], // Include any files that you want to apply the styles to
  theme: {
    extend: {
      colors: {
        customBlue: "#122061",
        secondary: "#3f60ad",
      },
    },
  },
  plugins: [],
};
