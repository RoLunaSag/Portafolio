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
      },
      colors: {
        'blue-web-900': "#15353F",
        'blue-web-800': "#445d65",
        'blue-web-700': "#73868c",
        'blue-web-600': "#a1aeb2",
        'blue-web-500': "#d0d7d9",
        'blue-green': "#8AA498"
      },
      backgroundImage: {
        'first-img': "url('/src/main/assets/svg/backgroundone.svg')",
        'second-img': "url('/src/main/assets/svg/backgroundtwo.svg')",
      },
    }
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  }
};
