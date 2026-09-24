import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    // Two shadow tokens only: `soft` for resting cards, `elevated` for hover/popovers.
    boxShadow: {
      none: 'none',
      soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 1px 6px -1px rgb(0 0 0 / 0.06)',
      elevated: '0 4px 12px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        // shadcn primitives (accordion, toaster) read these CSS variables.
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'muted-foreground': 'var(--muted-foreground)',

        // Brand emerald — 11-step scale plus a near-black 1000 for dark panels.
        primary: {
          DEFAULT: '#059669',
          foreground: '#ffffff',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          850: '#065640',
          900: '#064e3b',
          950: '#022c22',
          1000: '#00120d',
        },
        // Brand orange — reserved for primary CTAs and key highlights.
        accent: {
          DEFAULT: '#c2410c',
          foreground: '#ffffff',
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
        },
        success: '#0d9488',
        destructive: '#dc2626',
        warning: '#f59e0b',
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 40s linear infinite reverse',
      },
    },
  },
  plugins: [],
}

export default config
