/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        roboto:["Roboto", "system-ui"]
      },
      colors: {
        primary: "#1e88e5",
        dark: {
          hard: "#080808",
          light: "#212f3d",
        },
      },
    },
  },
  plugins: [],
};
