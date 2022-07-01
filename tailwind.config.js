const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_notes/*.md',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['NewsreaderVariable', ...defaultTheme.fontFamily.serif],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'),]
}
