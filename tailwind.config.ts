import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7013F2",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-bluish": "#626C7F",
        "light-grey": "#F4F6FA",
        green: "#8cd996",
        red: "#EE5454",
      },


      boxShadow: {
        sm: "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
      },

      screens: {
        laptop: {
          max: "75em",
        },
        desktop: {
          max: "64em",
        },
        tablet: {
          max: "43.75em",
        },
        mobile: {
          max: "37.5em",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
