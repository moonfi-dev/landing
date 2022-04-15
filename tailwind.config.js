module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "secondary-color": "var(--secondary-color)",
        "dark-white-color": "var(--dark-white-color)",
      },
    },    
  },
}
