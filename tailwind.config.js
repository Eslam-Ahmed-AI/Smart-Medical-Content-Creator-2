/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // لو عندك فولدر pages
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
