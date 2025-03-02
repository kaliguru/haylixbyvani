/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',
        'card-dark': '#242424',
        'input-dark': '#2A2A2A',
        'google-btn': '#333333',
        'primary-blue': '#4F46E5',
        'text-gray': '#9CA3AF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
