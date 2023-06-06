/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF4AA1',
        'black': '#171E22',
      },
      backgroundImage: {
        'linear-body': 'linear-gradient(105.97deg, #2DD6FB 0%, #238AC4 99.67%)',
      }
    },
  },
  plugins: [],
}
