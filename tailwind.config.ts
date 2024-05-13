import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-primary": "#212121",
        "bg-secondary": "#282828",
        "bg-tertiary": "#242424",
        "t-primary": "#ebe9e8",
        "accent-primary": "#d15439",
        "accent-secondary": "#6c6c6c",
        "accent-tertiary": "#5a92cb",
      },
    },
  },
  plugins: [],
};
export default config;
