// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const postcssPlugins = [tailwind()]

module.exports = {
  siteName: 'Internet Information Service @ misaka.org',
  siteUrl: 'https://iis.misaka.org',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        include: ['/', '/blog/**']
      }
    },
    {
      use: 'gridsome-plugin-typescript'
    }
  ],
  transformers: {
    remark: {
      plugins: [
        [
          'remark-autolink-headings',
          {
            behavior: 'wrap',
            linkProperties: {
              ariaHidden: 'true',
              tabIndex: -1
            }
          }
        ],
        [
          'gridsome-plugin-remark-prismjs-all',
          {
            aliases: {
              vue: 'html',
              cmd: 'bash',
              dos: 'bash'
            }
          }
        ]
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
