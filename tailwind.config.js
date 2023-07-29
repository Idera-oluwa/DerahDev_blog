/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['"Poppins", sans-serif']
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(310px, 1fr))',
      },
      boxShadow: {
        'form': '-10px 9px 9px 9px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
