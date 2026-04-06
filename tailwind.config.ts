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
          DEFAULT: '#0f1419',
          muted: '#4a5568',
          subtle: '#5c6578',
        },
        paper: {
          DEFAULT: '#f7f5f0',
          warm: '#f0ede6',
          edge: '#e2ddd4',
          deep: '#e8e4db',
        },
        surface: '#fdfcfa',
        line: '#dad6cc',
        hairline: 'rgba(15, 20, 25, 0.08)',
        accent: {
          DEFAULT: '#3d5a6c',
          muted: '#5c7588',
          hover: '#2f4756',
        },
        navy: { DEFAULT: '#1a2e1a', light: '#243d24', dark: '#0f1c0f' },
        gold: { DEFAULT: '#8a7355', light: '#a8906f', dark: '#6b5a44' },
        cream: '#f8f6f0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
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
        editorial: '45rem',
        content: '76rem',
      },
      boxShadow: {
        editorial: 'none',
        lift: 'none',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4a5568',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            maxWidth: '45rem',
            h1: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0f1419',
              fontWeight: '600',
            },
            h2: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0f1419',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0f1419',
              fontWeight: '600',
            },
            a: {
              color: '#0f1419',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
            strong: { color: '#0f1419', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#3d5a6c',
              color: '#4a5568',
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
