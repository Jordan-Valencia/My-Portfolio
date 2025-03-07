/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "scroll-track": "#2d2d2d",
        "scroll-thumb": "#6a5acd",
        "scroll-thumb-hover": "#483d8b",
      },
      animation: {
        aurora: "aurora 3s infinite",
        border: "border-gradient 2s infinite linear",
        "gradient-flow": "gradient-flow 6s ease infinite",
      },
      keyframes: {
        aurora: {
          "0%": { opacity: "0.8" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.8" },
        },
        "border-gradient": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "gradient-flow": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
