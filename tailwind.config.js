const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B44E9",
        cabiza_blue: "#24BAD4",
        cabiza_blue_secondary: "#4CCBE1",
        secondary: "#404446",

        secondary: {
          "sky-lighter": "#F2F4F5",
        },

        yellow: "#FCCA03",
        cabiza_secondary: "#02BDDC",
        cabiza_secondary_tertiary: "#E5F7FB",
        secondary_light: "#BF85EA",
        cabiza_grey: "#828080",
        tertiary: "#5B188B",
        cabiza_tertiary: "#0294AC",
        grey_20: "#333333",
        grey_40: "#666666",
        grey_60: "#9A9A98",
        grey_80: "#CCCCCC",
        grey_85: "#D9D9D9",
        grey_95: "#F2F2F2",
        grey_98: "#FAFAFA",
        grey: "#D9D9D9",
        dark_: "#220934",
        dark_pri: "#013D47",
        cabiza_red: "#D12424",
        white: "#ffffff",
        pink: "#FEF4CD",
        sky_light: "#E3E5E5",
        dark: "#303437",

        //New colors
        lighter: "#BFB6F6",
        secondary_sky_dark: "#979C9E",
        secondary_sky_light: "#E3E5E6",
        primary_brand_lightest: "#EFEDFD",
        primary_brand_light: "#8E7FF0",
        primary_brand_lighter: "#BFB6F6",
        primary_brand_base: "#5B44E9",
        primary_brand_darkest: "#2713A4",
        secondary_brand_light: "#6C7072",
        secondary_ink_lighter: "#72777A",
        secondary_52: "#912CDB",
        secondary_sky_base: "#CDCFD0",
        footer: "#090425",
        secondary_sky_lighter: "#F2F4F5",
        secondary_sky_lightest: "#F7F9FA",
        dark: "#040212",
        secondary: "#404446",
        secondary_ink_dark: "#303437",
        secondary_ink_darkest: "#090A0A",
        sky_light: "#E3E5E5",
        white: "#ffffff",

        tertiary_red_base: "#FF5247",
        primary_brand_dark: "#331ADB",
        tertiary_red_darkest: "#D3180C",

        tertiary_green_base: "#23C16B",
      },
      backgroundImage: {
        "onboarding-pattern": "url('/images/onboarding-bg.svg')",
      },
      width: {
        "43/50": "86%",
      },
      minWidth: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
      },
      borderRadius: {
        "4xl": "48px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
