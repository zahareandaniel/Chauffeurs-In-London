import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2e1a',
          light: '#243d24',
          dark: '#0f1c0f',
        },
        gold: {
          DEFAULT: '#b8962e',
          light: '#d4af54',
          dark: '#8a6e1f',
        },
        cream: '#f8f6f0',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a2e1a',
            fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
            h1: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#1a2e1a' },
            h2: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#1a2e1a' },
            h3: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#1a2e1a' },
            a: { color: '#b8962e' },
            strong: { color: '#1a2e1a' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
