/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		container: {
      center: true,
    },
    extend: {
			colors: {
        'brand-color': '#FBBE07',
      },
		},
  },
  plugins: [],
}

