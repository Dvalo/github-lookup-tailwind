module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          dark: "#574b90",
          darker: "#3e346e",
        },
        gray: {
          dark: "#252c42",
          darker: "#0f1329",
          light: "#343f58",
        },
        body: {
          light: "#d8d8d8",
        },
        border: {
          light: "#ffffff1a",
        },
      },
    },
    container: {
      center: true,
      padding: "1.125rem",
    },
    fontFamily: {
      heading: ["Averia Libre"],
      body: ["Rubik"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
