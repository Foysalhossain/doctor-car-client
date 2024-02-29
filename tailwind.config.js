/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         primary: "#7cb3dd",
  //         error: "#FF3811",
  //         circle: "#FF3811",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

