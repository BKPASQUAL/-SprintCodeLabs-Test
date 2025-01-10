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
        darkPurple: "#01011B",
        midPurple: "#2A1454",
        lightPurple: "#2E1A61",
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        helveticaNeue: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      gradientColorStops: {
        'dark-purple': "#01011B",
        'mid-purple': "#2A1454",
        'light-purple': "#2E1A61",
      },
    },
  },
  plugins: [],
};
