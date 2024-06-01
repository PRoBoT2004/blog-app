const { contentType } = require("express/lib/response");

// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: '#1a202c',
        yellow: '#f6e05e',
      },
    },
  },
  plugins: [],
};
