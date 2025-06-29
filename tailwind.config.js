/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'custom-blue-start': '#4B96FF',
        'custom-blue-end': '#00178F',
      },
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(135deg, #4B96FF 0%, #00178F 100%)',
      },
    },
  },
  plugins: [],
};