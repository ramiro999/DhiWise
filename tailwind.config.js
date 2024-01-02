module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 500: "#a7a7a7", 900: "#021526", "900_01": "#0b1523" },
        blue_gray: {
          50: "#edeff2",
          900: "#2e2e2e",
          "900_02": "#163048",
          "900_01": "#153048",
        },
        blue: {
          50: "#e6f5fc",
          200: "#a4cbff",
          800: "#0360d9",
          "50_01": "#e1eeff",
        },
        amber: { A400: "#f5bf00" },
        black: { 900: "#000000", "900_87": "#00000087" },
        pink: { 500: "#f22e52" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { ibmplexsans: "IBM Plex Sans", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
