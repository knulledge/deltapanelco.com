module.exports = {
  mode: 'jit',
  purge: [
    './*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazir', 'sans-serif'],
        'iransansdn': ['iransansdn', 'Vazir', 'sans-serif'],
      },
      animation: {
        indicator: 'indicator 1s infinite',
        arrow: 'arrow 1s infinite',
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
