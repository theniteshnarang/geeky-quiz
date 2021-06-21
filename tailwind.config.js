module.exports = {
  mode: "",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E4BAD4',
        secondary: '#BAE4CA',
        dark: '#F6DFEB',
        light: '#F8EDED'
      }
    },
    maxWidth: {
      '10': '10%',
      '15': '15%',
      '20': '20%',
      '25': '25%',
      'full': '100'
    },
    maxHeight: {
      '10': '10%',
      '15': '15%',
      '20': '20%',
      '25': '25%',
      '30': '35%',
      '45': '45%',
      '50': '50%',
      '60': '60%',
      'full': '100'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
