/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-heavy': 'bounce 1s 800ms linear infinite',
        'bounce-deliberate': 'bounce 1s 600ms linear infinite',
        'bounce-slow': 'bounce 1s 400ms linear infinite',
        'bounce-normal': 'bounce 1s 200ms linear infinite',
        'bounce-fast': 'bounce 1s linear infinite',
      }
    }
  },
  plugins: [],
};
