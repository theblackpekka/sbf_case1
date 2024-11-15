import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffffff",
        foreground: "var(--foreground)",
        'main' : "#486284",
        'bg' : '#f4fcfc'
      },
    },
  },
  plugins: [],
} satisfies Config;
