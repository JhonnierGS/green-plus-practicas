/** @type {import('tailwindcss').Config} */
import { twConfig, COLORS } from './src/ui/config';

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    ...twConfig,
    extend: {
      screens: {
        _400: '400px',
        _500: '500px',
        _550: '550px',
        _650: '650px',
        _700: '700px',
        _750: '750px',
        _800: '800px',
        _850: '850px',
        _900: '900px',
        _1000: '1000px',
        _1100: '1100px',
		lg: '1200px',
        _1830: '1830px',
        _1240: '1240px',
        _1300: '1300px',
        _1350: '1350px',
        _1400: '1400px',
        _1430: '1430px',
        _1500: '1500px',
        _1550: '1550px',
        _1600: '1600px',
        _1700: '1700px',
        _1800: '1800px',
        _1850: '1850px'
      },
    backgroundImage: {
      'avatar-1': "url('/img/avatars/avatar-1.jpg')",
      'hero': "url('/img/img1.svg')",
      'bgng': "url('/img/bgng.svg')",
    },
    colors: COLORS
    }
  },
  plugins: [],
}
