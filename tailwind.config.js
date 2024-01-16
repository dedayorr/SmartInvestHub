/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primaryColor: "#FFBD1A",
        secondaryColor: "#828282",
      },
      backgroundColor: {
        primaryColor: "#FFBD1A",
      },
    },
  },
  plugins: [],
};
