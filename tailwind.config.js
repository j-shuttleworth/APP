/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arc-green': '#4FD1C5',
        'arc-yellow': '#F6E05E',
        'arc-orange': '#ED8936',
        'arc-blue': '#63B3ED',
      },
    },
  },
  plugins: [],
}