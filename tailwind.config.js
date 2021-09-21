module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Vazir', 'sans-serif'],
      },
      animation: {
        wave: 'wave 48s infinite linear',
        indicator: 'indicator 1s infinite',
        arrow: 'arrow 1s infinite',
      },
      keyframes: {
        wave: {
          '100%': {
            'transform': 'rotate(360deg)',
          },
        },

        indicator: {
          '0%, 100%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateY(18px)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },

        arrow: {
          '0%, 100%': {
            'transform': 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translateX(8px)',
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
