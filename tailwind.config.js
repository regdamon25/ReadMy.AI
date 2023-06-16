/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-custom': 'linear-gradient(to right, #8664FF, #F27EFF)',
          'gradient-light': 'linear-gradient(to bottom, rgba(241, 231, 253, 0.9), rgba(241, 231, 253, 0.9))', // Add the gradient with lighter opacity here
      },
    },
  },
  plugins: [],
}
