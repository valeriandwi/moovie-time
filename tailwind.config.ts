import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E232A",
        "secondary-bg": "#292E35",
        "filter-bg": "#0E1723",
        "footer-bg": "#15191E",
        "text-primary": "#E5E5E5",
        "text-secondary": "#929292",
        red: "#E74C3C",
        gray: "#7f7f7f",
        "light-gray": "#666666",
      },
      backgroundColor: {
        card: "#F9F9F9",
        "rating-card": "#EAEAEA",
      },
      fontSize: {
        title: "36px",
        subtitle: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
