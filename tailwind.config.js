const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-blender-pro)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
