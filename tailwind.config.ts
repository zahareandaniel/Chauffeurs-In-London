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
          DEFAULT: '#1c1917',
          muted: '#44403c',
          subtle: '#57534e',
        },
        paper: {
          DEFAULT: '#ebe6da',
          warm: '#e0d9ca',
          edge: '#cfc6b3',
          deep: '#d4cbb8',
        },
        surface: '#f7f4eb',
        line: '#c9c0ad',
        hairline: 'rgba(28, 25, 23, 0.08)',
        accent: {
          DEFAULT: '#0f766e',
          muted: '#14b8a6',
          hover: '#115e59',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
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
            color: '#44403c',
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            maxWidth: '45rem',
            h1: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#1c1917',
              fontWeight: '600',
            },
            h2: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#1c1917',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#1c1917',
              fontWeight: '600',
            },
            a: {
              color: '#0f766e',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
            strong: { color: '#1c1917', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#0f766e',
              color: '#44403c',
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
