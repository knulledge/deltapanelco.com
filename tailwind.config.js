module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        indicator: 'indicator 1s infinite',
      },
      keyframes: {
        indicator: {
          '0%, 100%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateY(18px)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
