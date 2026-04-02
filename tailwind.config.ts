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
          DEFAULT: '#0f1f3d',
          light: '#1a3260',
          dark: '#080f1e',
        },
        gold: {
          DEFAULT: '#b8962e',
          light: '#d4af54',
          dark: '#8a6e1f',
        },
        cream: '#fafafa',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0f1f3d',
            fontFamily: 'var(--font-source-sans), system-ui, sans-serif',
            h1: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#0f1f3d' },
            h2: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#0f1f3d' },
            h3: { fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#0f1f3d' },
            a: { color: '#b8962e' },
            strong: { color: '#0f1f3d' },
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
