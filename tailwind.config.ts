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
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#525252',
          subtle: '#737373',
        },
        paper: {
          DEFAULT: '#fafafa',
          warm: '#f4f4f3',
          edge: '#e7e5e4',
          deep: '#eeeeec',
        },
        surface: '#ffffff',
        line: '#e5e5e5',
        hairline: 'rgba(10,10,10,0.08)',
        accent: {
          DEFAULT: '#404040',
          hover: '#0a0a0a',
        },
        navy: { DEFAULT: '#1a2e1a', light: '#243d24', dark: '#0f1c0f' },
        gold: { DEFAULT: '#b8962e', light: '#d4af54', dark: '#8a6e1f' },
        cream: '#f8f6f0',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.5rem,6vw,4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.25rem,5vw,3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.875rem,4vw,2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: 'clamp(4rem,11vw,8rem)',
        'section-tight': 'clamp(3rem,8vw,5rem)',
      },
      maxWidth: {
        measure: '40rem',
        readable: '44rem',
        content: '76rem',
      },
      boxShadow: {
        editorial: '0 1px 0 rgba(0,0,0,0.04), 0 24px 48px -12px rgba(0,0,0,0.06)',
        lift: '0 12px 40px -16px rgba(0,0,0,0.12)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#404040',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            maxWidth: '40rem',
            h1: {
              fontFamily: 'var(--font-newsreader), Georgia, serif',
              color: '#0a0a0a',
              fontWeight: '500',
            },
            h2: {
              fontFamily: 'var(--font-newsreader), Georgia, serif',
              color: '#0a0a0a',
              fontWeight: '500',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'var(--font-newsreader), Georgia, serif',
              color: '#0a0a0a',
              fontWeight: '500',
            },
            a: {
              color: '#0a0a0a',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
            strong: { color: '#0a0a0a', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#d4d4d4',
              color: '#525252',
              fontStyle: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
