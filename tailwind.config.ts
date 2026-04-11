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
          DEFAULT: '#0c1118',
          muted: '#3e4756',
          subtle: '#5c6575',
        },
        paper: {
          DEFAULT: '#e4eaf2',
          warm: '#d6dee8',
          edge: '#c5cedc',
          deep: '#cad3df',
        },
        surface: '#f0f3f8',
        line: '#b8c2d4',
        hairline: 'rgba(12, 17, 24, 0.08)',
        accent: {
          DEFAULT: '#3730a3',
          muted: '#4f46e5',
          hover: '#312e81',
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
            color: '#3e4756',
            fontFamily: 'var(--font-body), system-ui, sans-serif',
            maxWidth: '45rem',
            h1: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0c1118',
              fontWeight: '600',
            },
            h2: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0c1118',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'var(--font-display), Georgia, serif',
              color: '#0c1118',
              fontWeight: '600',
            },
            a: {
              color: '#3730a3',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
            },
            strong: { color: '#0c1118', fontWeight: '600' },
            blockquote: {
              borderLeftColor: '#3730a3',
              color: '#3e4756',
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
