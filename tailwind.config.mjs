/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        charcoal:    '#1a1a1a',
        'charcoal-light': '#2e2e2e',
        concrete:    '#f5f4f2',
        'concrete-dark': '#e8e6e3',
        'warm-white': '#fafaf9',
        gold:        '#b8965a',
        'gold-light': '#d4af78',
      },
      fontFamily: {
        serif:  ['Cormorant Garamond', 'Noto Serif Georgian', 'Georgia', 'serif'],
        sans:   ['Inter', 'Noto Sans Georgian', 'system-ui', 'sans-serif'],
        mono:   ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Tight tracking for architectural labels
        label: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
