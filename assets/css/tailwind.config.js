const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const cfgTw = {
    purge: {
        content: [
            "layouts/**/*.html",
            "content/**/*.html",
            "public/**/*.html",
        ],
        options: {
            safelist: ['do_not_purge_classes_'],
        },
    },
    theme: {
        colors: colors,
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                steel: ['Steelfish'],
                qwigley: ['Qwigley'],
                'aguafina': ['Aguafina Script']
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                brand: 'var(--color-brand)',
                'brand-75': 'var(--color-brand-75)',
                'brand-90': 'var(--color-brand-90)',
                tag: 'var(--color-tag)',
                navbar: 'var(--color-navbar)',
                'navbar-menu': 'var(--color-nav-menu)',
                'navbar-active': 'var(--color-nav-menu-active)',
                'navbar-inactive': 'var(--color-nav-menu-inactive)',
                'navbar-hover': 'var(--color-nav-menu-hover)',
                'navbar-border': 'var(--color-nav-menu-border)',
                'cart': 'var(--color-cart)',
                'cart-bubble': 'var(--color-cart-bubble)',
                'cart-count': 'var(--color-cart-count)',
                close: 'var(--color-close)',
                primary: 'var(--color-primary)',
                'primary-10': 'var(--color-primary-10)',
                'primary-20': 'var(--color-primary-20)',
                'primary-50': 'var(--color-primary-50)',
                'primary-75': 'var(--color-primary-75)',
                'primary-90': 'var(--color-primary-90)',
                light: 'var(--color-light)',
                'primary-darker': 'var(--color-primary-darker)',
                'primary-darker-75': 'var(--color-primary-darker-75)',
                'primary-darker-90': 'var(--color-primary-darker-90)',
                secondary: 'var(--color-secondary)',
                'secondary-75': 'var(--color-secondary-75)',
                'secondary-90': 'var(--color-secondary-90)',
                accent: 'var(--color-accent)',
                'accent-75': 'var(--color-accent-75)',
                'accent-90': 'var(--color-accent-90)',
                success: 'var(--color-success)',
                'success-75': 'var(--color-success-75)',
                'success-90': 'var(--color-success-90)',
                info: 'var(--color-info)',
                'info-75': 'var(--color-info-75)',
                'info-90': 'var(--color-info-90)',
                warning: 'var(--color-warning)',
                'warning-75': 'var(--color-warning-75)',
                'warning-90': 'var(--color-warning-90)',
                error: 'var(--color-error)',
                'error-75': 'var(--color-error-75)',
                'error-90': 'var(--color-error-90)',
                neutral: 'var(--color-neutral)',
                default: 'var(--color-default)',
            },
            boxShadow: {
                'outline-primary': '0 0 0 1px theme("colors.primary")',
                'outline-primary-darker': '0 0 0 1px theme("colors.primary-darker")',
                'outline-secondary': '0 0 0 1px theme("colors.secondary")',
                'outline-accent': '0 0 0 1px theme("colors.accent")',
                'outline-success': '0 0 0 1px theme("colors.success")',
                'outline-info': '0 0 0 1px theme("colors.info")',
                'outline-warning': '0 0 0 1px theme("colors.warning")',
                'outline-error': '0 0 0 1px theme("colors.error")',
                'outline-neutral': '0 0 0 1px theme("colors.neutral")',
            },
        }
    },
    variants: {
        aspectRatio: ["responsive"],
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms")
    ],
};

// 'production' !== process.env.NODE_ENV ? cfgTw.mode = 'jit' : null;

module.exports = cfgTw;
