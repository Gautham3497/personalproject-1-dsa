/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "sliding-up": "slide-up 2s ease-in-out",
        bounceUpDown: "bounceUpDown 3s linear infinite",
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
        bounceUpDown: {
          "0%": {
            transform: "translateY(-20px)",
          },
          "20%": {
            transform: "translateY(-10px)",
          },

          "40%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(10px)",
          },
          "60%": {
            transform: "translateY(20px)",
          },
          "70%": {
            transform: "translateY(10px)",
          },
          "80%": {
            transform: "translateY(0px)",
          },
          "90%": {
            transform: "translateY(-10px)",
          },

          "100%": {
            transform: "translateY(-20px)",
          },
        },
      },
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
