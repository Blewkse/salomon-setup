/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E26EE5",
        secondary: "#7E30E1",
        ternary: "#49108B",
      },
    },
  },
  plugins: [],
};
