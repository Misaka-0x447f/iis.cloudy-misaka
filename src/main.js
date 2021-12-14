// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueCompositionApi from '@vue/composition-api'

// Import Tailwind CSS
require('~/main.css')

// Remark Syntax Highlighting
require('gridsome-plugin-remark-prismjs-all/themes/night-owl.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')
require('prismjs/plugins/command-line/prism-command-line.css')

export default function (Vue) {
  // Set default layout as a global component
  Vue.use(VueCompositionApi)
}
