/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Euxodus Sans", "sans-serif"],
      },
      colors: {
        darkGray: "#111721",
        purple: "#583C83",
        lightGray: "#202B47",
        gunMetal: "#182431",
        dark_purple: "#6F2DBD", // Lagega !!
        lavender: "#CE68FE", // Form Color + Buttons
        light_purple: "#B298DC", // Optional
        blue: "#95BFEF", // Optional
        light_blue: "#B8D0EB", // Optional
        cyan: "#B9FAF8",
        gray: "#1C233D", // Main background color.
        light_gray: "#202B47", // Will be useful for cards
      },
    },
  },
  plugins: [],
};
