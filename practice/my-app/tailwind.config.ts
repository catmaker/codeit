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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "scroll-slow": "scroll 80s linear infinite",
        "scroll-medium": "scroll 70s linear infinite",
        "scroll-fast": "scroll 60s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "spin-reverse-slower": "spin-reverse 10s linear infinite",
        "spin-slower": "spin 8s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
