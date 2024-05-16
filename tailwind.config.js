module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily : {
          sans :["Vazirmatn"],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
  };