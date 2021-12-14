module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ],
    safelist: [
      'body',
      'html',
      'img',
      'a',
      'ol',
      'ul',
      'g-image',
      'g-image--lazy',
      'g-image--loaded'
    ]
  },
  theme: {
    fontFamily: {
      mono: ['Hack', 'Consolas', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Liberation Mono', 'Courier New', 'monospace']
    },
    extend: {
      margin: {
        '1ch': '1ch'
      },
      colors: {
        primary: '#66ccff',
        'just-black': '#012'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
