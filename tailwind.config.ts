import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideFromTop: {
        "0%": { transform: "translateY(-100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideFromLeft: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
      slideFromBottom: {
        "0%": { transform: "translateY(100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
    animation: {
      slideFromTop: "slideFromTop 1s ease-out forwards",
      slideFromLeft: "slideFromLeft 1s ease-out forwards",
      slideFromBottom: "slideFromBottom 1s ease-out forwards",
      slideIn: "slideIn 1s ease-out forwards", // duration can be adjusted as needed
    },
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
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        openSans: ["var(--font-open-sans)"],
      },
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
        nurakeemGrayBg: "#F0F0F0A3",
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
