/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: ["dark", "acid", "cmyk", "pastel", "dracula"]
  },
  plugins: [require("daisyui")],
}