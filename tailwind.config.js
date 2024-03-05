/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud-white': '#FEFCF6',
        'base': '#222831',
        'noir': '#393E46',
        'prime': '#FFD369',
        'second': '#EEEEEE',
      }
    }
  },
  plugins: [],
}

