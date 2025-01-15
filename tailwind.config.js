/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#013C61",
        green: "#2BDA53",
      },
    },
  },
  plugins: [],
};
