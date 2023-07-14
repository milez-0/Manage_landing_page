/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(242, 95, 58)',
        secondary: {
          100: 'rgb(36, 45, 82)',
          200: 'rgb(144, 149, 167)',
          300: 'rgba(242, 95, 58, 0.2)',
          400: 'rgb(29, 30, 37)',
        }
      },
      fontfamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

