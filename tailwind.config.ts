import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"HK Grotesk"', "sans-serif"],
        display: ['"HK Grotesk"', "sans-serif"],
      },
      colors: {
        focus: "#57BEE7",
        gray: {
          900: "#03141B",
          300: "#8A9DA3",
          200: "#CCDCE3",
          100: "#EAF3F7",
          60: "#737E6C",
          40: "#C0C7BC",
          20: "#D2D7D0",
          10: "#F2F3F2",
          0: "#FFFFFF",
        },
        blue: {
          DEFAULT: "#3867DE",
          900: "#1C00F0",
          800: "#003144",
          400: "#57BEE7",
          300: "#84D5F5",
          200: "#BAE4F5",
          600: "#0070F0",
        },
        yellow: {
          800: "#443500",
          200: "#FFF0BB",
        },
        red: {
          200: "#F7C4BC",
          800: "#440900",
        },

        green: {
          800: "#094400",
          700: "#0C5C00",
          600: "#188706",
          400: "#4BB23B",
          300: "#95E089",
          200: "#C2F5BA",
          100: "#E9FFE5",
          80: "#00A40C",
          60: "#35C03F",
          10: "#D8FFDB",
        },
        orange: {
          60: "#E56535",
          40: "#FBB57D",
          20: "#F4E4D4",
        },
        priority: {
          high: "#F9492C",
          medium: "#F1C936",
          low: "#95E089",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "24px",
        md: "12px",
        sm: "6px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
            hoverOpacity: 1,
          },
        },
      },
    }),
  ],
};

export default config;
