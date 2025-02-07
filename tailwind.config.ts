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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient': "linear-gradient(112.83deg, rgba(255, 255, 255, 0.001) 50%, rgba(255, 255, 255, 0) 110.84%)",
        'border': "radial-gradient(121.49% 277.08% at 0% 0%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 100%)",
        'top': "linear-gradient(130.43deg, #6C6C6C 0%, #0A0A0A 110%)",
        'block': "url('https://i.yapx.ru/Yacf4.png')",
        'days': "linear-gradient(195.04deg, rgba(255, 255, 255, 0.47) -47.37%, rgba(255, 255, 255, 0) 117.7%)",
        'price': "linear-gradient(102.79deg, rgba(255, 255, 255, 0) -20.41%, rgba(255, 255, 255, 0.47) 90.75%)",
        'prize': "linear-gradient(102.79deg, rgba(255, 255, 255, 0.47) 9.25%, rgba(255, 255, 255, 0) 98.54%)",
        'modal': "linear-gradient(111.86deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 131.54%)",
        'modalstroke': "radial-gradient(121.49% 277.08% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        'block-token': "url('https://i.yapx.cc/Yak1A.png')",
        'roadmap': "url('https://i.yapx.cc/Ya1Yz.png')",
        'roulette': "url('https://i.yapx.cc/Ya4Xa.png')"
      }
    },
  },
  plugins: [],
} satisfies Config;