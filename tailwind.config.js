/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      screens:{
        'mysize' : '1190px',
        'Mymd' : '650px',
        'media-1390px':'1390px',
        'media-1280px':'1280px',
        'media-1080px':'1080px',
        'media-1023px':'1023px',
        'media-760px':'760px',
        'media-700px':'700px',
        'media-600px':'600px',
        'media-540px':'540px',
        'media-470px':'470px',
        'media-430px':'430px',


      },
      fontFamily: {
        "iransans-md": ["iransans-md", "sans-serif"],
        "iransans-bold": ["iransans-bold", "sans-serif"],
        "iransans-light": ["iransans-light", "sans-serif"],
        "iransans-lighter": ["iransans-lighter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        secondary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        'myblue': '#5D78FF',
        'myDarkBlue' : '#4865C8',
        'mylight-blue': '#8997DC',
        'mylight-green': '#3897BB',
        'dark': '#2b2d42',
      },
    },
  },
  plugins: [],
};
