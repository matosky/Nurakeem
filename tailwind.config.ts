import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      big_screen: { max: "2000px" },
      desktop_xl: { max: "1920px" },
      desktop: { max: "1280px" },
      desktop_sm: { max: "1050px" },
      tablet_max: { max: "1025px" },
      tablet_md: { max: "1000px" },
      tablet_min: { max: "768px" },
      mobile_lg: { max: "650px" },
      mobile_md: { max: "430px" },
      mobile_sm: { max: "390px" },
      mobile_xs: { max: "281px" },
    },
    fontFamily: {
      openSans: ["OpenSans", "sans-serif"],
      lora: ["Lora", "sans-serif"]
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2C3E50",
        nurakeemBg: "#FFFFFF",
        darkBg: "#151515",
        nurakeemYellowColor: "#B68813",
        nurakeemblueBG: "#3498DB",
        nurakeemdarkBlueBG: "#2C3E50",
        nurakeemLight: "#FFFFFF",
        transBtnBg: "#18BC9C4A",
        dividerBorder: "#F0F0F08F",
        thickBtnBg: "#18BC9C",
        formBorderColor: "#BDC3C7",
        nurakeemFooterBg: "#151515",
        nurakeemFooterColor: "#151515",
        customLightGreen: "#18BC9C",
      },
    },
  },
  plugins: [],
};
export default config;
