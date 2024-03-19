module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Blender Pro', 'Blender Pro Book'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
