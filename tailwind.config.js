/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#101F4D",
        royal: "#293F91",
        bright: "#3150AD",
        naposaRed: "#D42E20",
        naposaGold: "#D7A93B",
        cream: "#F6F3EC",
        ink: "#10172A",
        muted: "#64708A",
        line: "#DFE3EB",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 31, 77, 0.10)",
      },
    },
  },
  plugins: [],
};
