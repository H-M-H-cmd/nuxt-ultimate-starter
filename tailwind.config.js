import { getTheme } from './theme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: getTheme(),
  plugins: [
    require('tailwindcss-rtl'),
    require('tailwindcss-animate'),
  ],
  safelist: [
    'rtl:rotate-180',
    {
      pattern: /^([a-zA-Z\d-]+:)?rotate-/,
      variants: ['rtl'],
    },
  ]
}