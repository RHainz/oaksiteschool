/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Arizoina: ["Arizonia", "cursive"],
        Hind: ["Hind", "sans-serif"],
        EuphoriaScript: ["Euphoria Script", "cursive"],
        Splash: ["Splash", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
