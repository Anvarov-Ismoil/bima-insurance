/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		container: {
      center: true,
      padding: '2rem',
    },
    extend: {
			colors: {
        'brand-color': '#FBBE07',
        'dark-gray': '#312B2B',
        'light-gray': '#8D8D8D',
      },
      margin: {
        'section': '90px',
      }
		},
  },
  plugins: [],
}

