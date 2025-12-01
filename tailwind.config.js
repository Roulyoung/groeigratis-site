module.exports = {
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        accent: '#00C853',
        subtle: '#6F6F6F',
        soft: '#F7F7F7',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate'],
    darkTheme: 'corporate',
  },
};
