/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#5f33e2',
        success: '#00c853',
        danger: '#ff1744',
        warning: '#ff9100',
        primary_subtle: '#cdc2ef',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        agbalumo: ['Agbalumo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
