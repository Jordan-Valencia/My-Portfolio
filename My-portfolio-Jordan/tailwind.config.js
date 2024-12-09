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
          "0%": { opacity: "0.6" },
          "5%": { opacity: "0.64" },
          "10%": { opacity: "0.68" },
          "15%": { opacity: "0.72" },
          "20%": { opacity: "0.76" },
          "25%": { opacity: "0.8" },
          "30%": { opacity: "0.84" },
          "35%": { opacity: "0.88" },
          "40%": { opacity: "0.92" },
          "45%": { opacity: "0.96" },
          "50%": { opacity: "1" },
          "55%": { opacity: "0.96" },
          "60%": { opacity: "0.92" },
          "65%": { opacity: "0.88" },
          "70%": { opacity: "0.84" },
          "75%": { opacity: "0.8" },
          "80%": { opacity: "0.76" },
          "85%": { opacity: "0.72" },
          "90%": { opacity: "0.68" },
          "95%": { opacity: "0.64" },
          "100%": { opacity: "0.6" },
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
