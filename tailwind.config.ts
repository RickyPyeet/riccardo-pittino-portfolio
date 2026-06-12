import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#2C2C2A',
        secondary: '#5F5E5A',
        tertiary: '#888780',
        accent: {
          DEFAULT: '#5DCAA5',
          dark: '#0F6E56',
          light: '#E1F5EE',
        },
        background: {
          light: '#F1EFE8',
        },
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['32px', { lineHeight: '1.3' }],
        h3: ['28px', { lineHeight: '1.3' }],
        body: ['16px', { lineHeight: '1.7' }],
        small: ['14px', { lineHeight: '1.6' }],
        tiny: ['13px', { lineHeight: '1.5' }],
        xsmall: ['12px', { lineHeight: '1.4' }],
      },
      fontFamily: {
        sans: [
          'Anthropic Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['Courier New', 'monospace'],
      },
      maxWidth: {
        container: '1040px',
      },
      boxShadow: {
        focus: '0 0 0 2px #5DCAA5',
      },
    },
  },
  plugins: [],
};

export default config;
