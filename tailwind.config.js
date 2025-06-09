module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        veggie: {
          light: '#d1fae5',
          DEFAULT: '#10b981',
          dark: '#065f46'
        }
      }
    },
  },
  plugins: [],
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}