/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "sliding-up": "slide-up 2s ease-in-out",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translate-y-96",
          },
          "100%": {
            transform: "translate-y-0",
          },
        },
      },
      fontFamily: {
        specialFont: "Protest Guerrilla",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
