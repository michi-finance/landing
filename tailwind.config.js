const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '12px',
      },
      borderWidth: {
        'custom': '1.361px',
      },
      colors: {
        'custom-gray': '#32384E',
        'custom-blue': '#E2EAFF',
        'bold-blue': '#ECF1FF',
        'custom-purple': '#F39983',
        'michi-purple': '#F39983',
        'subtitle': 'rgba(255, 255, 255, 0.70)',
        'subtitle-full': '#C8AEAE',
        'custom-border': 'rgba(72, 55, 67, 0.70)',
        'white-80': 'rgba(255, 255, 255, 0.80)',
        'title': 'rgba(255, 255, 255, 0.80)',
      },
      boxShadow: {
        'custom': '0px 4.401px 14.304px 0px rgba(31, 24, 24, 0.77) inset',
        'michi': '0px 4.401px 14.304px 0px rgba(31, 24, 24, 0.77) inset',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0A0B12 9.92%, #0A0B12 100%)',
        'text-gradient': 'rgba(255, 255, 255, 0.80)',
      },
      
    },
  },
  darkmode: "class",
  plugins: [nextui()],
};
