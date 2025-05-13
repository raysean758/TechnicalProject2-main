// tailwind.config.js
const { withUt } = require("uploadthing/tw");

module.exports = withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss-animate'),
    require('@tailwindcss/forms'),
  ],
});