/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "greyscale-dark-grey": "#060c3b",
        silver: "rgba(180, 182, 196, 0.8)",
        "greyscale-grey-pale": "#b4b6c4",
        midnightblue: "#36268c",
        "purple-purple-pale": "#9374ff",
        gray: {
          "100": "rgba(255, 255, 255, 0.8)",
          "200": "rgba(255, 255, 255, 0)",
        },
        "control-primary-info": "#008ff8",
        "text-invert-secondary-white-075": "rgba(255, 255, 255, 0.75)",
        "border-primary": "#c4c7cf",
        lightslategray: "#8a8e9b",
        "greyscale-grey": "#5d6180",
        "purple-purple": "#6241d4",
        "control-tertiary-info": "rgba(0, 143, 248, 0)",
        "text-secondary-gray-500": "#6c6e79",
        "text-link": "#006dca",
      },
      spacing: {},
      fontFamily: {
        "website-body-body-small-regular": "Chivo",
        "paragraph-1624medium-fs-300-lh-300": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      "11xl": "30px",
      "3xs": "10px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
