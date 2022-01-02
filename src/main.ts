// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueCompositionApi from '@vue/composition-api'
import { VueConstructor } from 'vue/types/vue'
import './utils/register-prismjs'
// @ts-ignore

// Import Tailwind CSS
require('~/main.css')

export default (Vue: VueConstructor) => {
  // Set default layout as a global component
  Vue.use(VueCompositionApi)
}
