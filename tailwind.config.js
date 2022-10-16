/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        'Nunito-Regular',
        '"Inter"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      'base-light' : ['Nunito-Light'],
      'base-light-italic' : ['Nunito-Light-Italic'],
      'base-regular' : ['Nunito-Regular'],
      'base-regular-italic' : ['Nunito-Regular-Italic'],
      'base-semibold' : ['Nunito-SemiBold'],
      'base-regular-italic' : ['Nunito-SemiBold-Italic'],
      'base-bold' : ['Nunito-Bold'],
      'base-bold-italic' : ['Nunito-Bold-Italic'],
    }
  },
  plugins: [],
}