module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '700px',
      md: '1008px',
    },
    colors: {
      background: '#000037',
      primary: '#09BDC6',
      secondary: '#EA00D9',
      'primary-dark': '#133E7C',
      'secondary-dark': '#711C91',
      'body-text-color': '#FFFFFF',
    },
    spacing: {
      px: '1px',
      0: '0',
      s: '4px',
      m: '8px',
      l: '16px',
      xl: '24px',
      xxl: '32px',
      xxxl: '48px',
    },
    borderRadius: {
      'none': '0',
      'sm': '4px',
      DEFAULT: '12px',
      'lg': '16px',
      'full': '9999px',
    },
    fontFamily: {
      sans: ['Blender Pro', 'Blender Pro Book'],
    },
    fontSize: {
      'body-text': ['18px', { lineHeight: '28px' }],
      'body-text-desktop': ['20px', { lineHeight: '28px' }],
      h3: ['24px', { lineHeight: '32px' }],
      h2: ['32px', { lineHeight: '40px' }],
      h1: ['48px', { lineHeight: '56px' }],
    },
  },
}
