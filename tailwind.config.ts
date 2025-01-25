import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
        "footer-bg": "#15191E",
        "text-primary": "#E5E5E5",
        "text-secondary": "#929292",
        red: "#E74C3C",
      },
    },
  },
  plugins: [],
};
export default config;
