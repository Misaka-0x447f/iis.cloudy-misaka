// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueCompositionApi from '@vue/composition-api'
import { VueConstructor } from 'vue/types/vue'
import './utils/register-prismjs'
// @ts-ignore
import Gitalk from 'vue-gitalk'
import 'vue-gitalk/dist/vue-gitalk.css'

// Import Tailwind CSS
require('~/main.css')

export default (Vue: VueConstructor) => {
  // Set default layout as a global component
  Vue.use(VueCompositionApi)
  Vue.use(Gitalk,
    {
      clientID: '59cb904ec4a1ac938bca', // The client id you copied earlier.
      clientSecret: '9e7c7610a968c0839891c8535f7ad0b632d7be56', // The client secret you copied earlier. Since the artifact is a pure front-end app this secret can be public.
      repo: 'iis.cloudy-misaka', // The name of the github repo where the comments should be stored.
      owner: 'Misaka-0x447f', // The username of the owner of the github repository.
      admin: ['Misaka-0x447f'], // The usernames of the admins of the repository.
    })
}
