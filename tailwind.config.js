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
      colors: {
        "whatsapp-green": "#25D366",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
