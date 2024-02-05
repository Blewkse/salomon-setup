/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E26EE5",
        secondary: "#7E30E1",
        ternary: "#49108B",
        background: "#F3F8FF",
        backgroundSecond: "#F4EBFF",
      },
      fontFamily: {
        Compagnon: ["Compagnon-medium"],
      },
      width: {
        "custom-500": "500px",
        "custom-600": "600px",
        "custom-700": "700px",
      },
      height: {
        "custom-450": "450px",
        "custom-500": "500px",
        "custom-600": "600px",
        "custom-700": "700px",
      },
      backgroundImage: {
        maskBackground: "url('../assets/mask-background.svg')",
      },
      inset: {
        "1/10": "10%",
      },
      spacing: {
        "90/": "92%",
      },
    },
  },
  plugins: [],
};
