/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Programm', '"sans-serif"'],
        'serif': ['TimesNow', '"Times New Roman"', '"serif"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

