/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: { "100": "#d9d9d9", "200": "rgba(217, 217, 217, 0.12)" },
        lightcoral: "#de8276",
        mediumvioletred: "#ab1a8b",
        mediumspringgreen: "#63ffab",
        gray: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(0, 0, 0, 0.29)",
          "300": "rgba(255, 255, 255, 0.25)",
          "400": "rgba(0, 0, 0, 0.48)",
        },
        whitesmoke: "#f6f6f6",
        palegreen: "#9af68b",
        darkslategray: "rgba(64, 66, 88, 0.2)",
        darkolivegreen: { "100": "#36612f", "200": "rgba(141, 131, 77, 0.51)" },
        red: "#ff1f00",
        silver: "#c4c4c4",
      },
      fontFamily: {
        "source-code-pro": "'Source Code Pro'",
        merriweather: "Merriweather",
      },
    },
    fontSize: {
      "2xs": "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "40px",
    },
  },
  corePlugins: { preflight: false },
};
