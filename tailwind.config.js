module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '700px',
      md: '1008px',
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      DEFAULT: '12px',
      lg: '16px',
      full: '9999px',
    },
    fontFamily: {
      sans: ['Blender Pro', 'Blender Pro Book'],
    },
    extend: {
      fontSize: {
        'body-text': ['18px', { lineHeight: '28px' }],
        'body-text-desktop': ['20px', { lineHeight: '28px' }],
        h3: ['24px', { lineHeight: '32px' }],
        h2: ['32px', { lineHeight: '40px' }],
        h1: ['48px', { lineHeight: '56px' }],
      },
      spacing: {
        s: '4px',
        m: '8px',
        l: '16px',
        xl: '24px',
        xxl: '32px',
        xxxl: '48px',
      },
    },
  },
};
