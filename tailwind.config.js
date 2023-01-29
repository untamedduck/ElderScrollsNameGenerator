/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      "Rubik": ["Rubik",]
    },

      extend: {
        colors: {
          'white': '#ffffff',
          "green": {
            100: "#3A513A",
            200: "#8D8741",
            800: "#122223",
            900: "#071E07",
          }
        },
        "brown": {
          100: "#BC986A",
          200: "#eeac6b",
          300: "#DDD8AB"

        },
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }

