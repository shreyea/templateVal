/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dusty-rose": "#D4A5A5",
        "muted-red": "#C97676",
        "warm-cream": "#FAF3E0",
        "deep-brown": "#5A3A31",
        "ink-brown": "#3D2817",
        "chocolate": "#5C4033",
        "rose-gold": "#B76E79",
        "blush": "#F7D8D8",
        "sage-green": "#9CAF88",
        "lavender": "#B8A9C9",
        "peach": "#FFD6BA",
      },
      fontFamily: {
        serif: ["Cormorant", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [],
};
