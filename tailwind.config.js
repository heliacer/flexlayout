/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#f01c68",
      secondary: "#7c0e35",
      text: "#fff",
      black: "#161616",
      darkGray: "#1e1e1e",
      gray: "#2d2d2d",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}