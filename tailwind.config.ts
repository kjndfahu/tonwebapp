import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "400px",
        md: "390px",
        sm: "340px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        gradient: "linear-gradient(112.83deg, rgba(255, 255, 255, 0.001) 50%, rgba(255, 255, 255, 0) 110.84%)",
        gradient2: "linear-gradient(130.43deg, #8C8C8C 0%, #242424 110%)",
        border: "radial-gradient(121.49% 277.08% at 0% 0%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 100%)",
        top: "linear-gradient(130.43deg, #6C6C6C 0%, #0A0A0A 110%)",
        block: "url('/img/block.png')",
        days: "linear-gradient(195.04deg, rgba(255, 255, 255, 0.47) -47.37%, rgba(255, 255, 255, 0) 117.7%)",
        price: "linear-gradient(102.79deg, rgba(255, 255, 255, 0) -20.41%, rgba(255, 255, 255, 0.47) 90.75%)",
        prize: "linear-gradient(102.79deg, rgba(255, 255, 255, 0.47) 9.25%, rgba(255, 255, 255, 0) 98.54%)",
        modal: "linear-gradient(111.86deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 131.54%)",
        modalstroke:
            "radial-gradient(121.49% 277.08% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        "block-token": "url('/img/block-token.png')",
        roadmap: "url('/img/roadmap.png')",
        roulette: "url('/img/roulette.png')",
        coin: "radial-gradient(80.49% 96.21% at 50.3% 50.67%, rgba(173, 173, 173, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;