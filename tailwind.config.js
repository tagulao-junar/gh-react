/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            GoogleSansRegular: ['Google Sans Regular'],
            GoogleSansMedium: ['Google Sans Medium'],
            GoogleSansBold: ['Google Sans Bold'],
            MartianMono: ['Martian Mono', 'monospace'],
            LoveYaLike: ['Love Ya Like A Sister', 'cursive'],
        }
    },
  },
  plugins: [],
}
