/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, html, js, jsx}"],
  // purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "cat-dark": "#333333",
        "cat-light": "#f5f5f5",
        "cat-white": "#fafafa",
        "cat-night-header": "#010409",
        "cat-night-background": "#0e1117",
        "cat-night-button": "#22262d",
        "cat-night-white": "#e7edf3",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        blinkingBorder: {
          "0%, 49%": { "border-right": "5px solid white" },
          "50%, 99%": { "border-right": "5px solid black" },
        },
      },
      animation: {
        wiggle: "wiggle 1s infinite",
        blinkingBorder: "blinkingBorder 1.06s none infinite",
      },
    },
  },
};
