import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, handcrafted color palette
        'dusty-rose': '#D4A5A5',
        'warm-cream': '#FAF3E0',
        'muted-red': '#C97676',
        'warm-beige': '#E8D5C4',
        'chocolate': '#5C4033',
        'soft-peach': '#F5CBA7',
        'vintage-paper': '#F4EDE3',
        'ink-brown': '#3E2723',
        cream: '#FAF8F5',
        warmGray: '#F5F3F0',
        charcoal: '#2C2C2C',
        softRed: '#C75B5B',
        terracotta: '#D8856F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant', 'Georgia', 'serif'],
        display: ['Cormorant', 'Georgia', 'serif'],
      },
      boxShadow: {
        'paper': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'polaroid': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'soft': '0 1px 3px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
