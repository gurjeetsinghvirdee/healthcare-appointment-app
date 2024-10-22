import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5680E9',
        secondary: '#84CEEB',
        accent: '#5AB9EA',
        background: '#C1C8E4',
        light: '#88D0E0',
      },
    },
  },
  plugins: [],
};

export default config;
