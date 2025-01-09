/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolour: "#7248FF",
        primaryBtm: "#D76125", 
        middleBtm: "#F9A825", 
      },
    },
  },
  plugins: [],
};
