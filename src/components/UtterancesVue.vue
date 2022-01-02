<template>
  <iframe ref="comments" scrolling="no" :src="data.url" :height="data.height" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch } from '@vue/composition-api'
import { useBeforeMount } from '../utils/hooks'

interface ResizeMessage {
  type: 'resize';
  height: number;
}

export default defineComponent({
  name: 'UtterancesVue',
  props: {
    title: {
      type: String,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    label: String,
    issueNumber: Number
  },
  setup (props, { root, refs }) {
    const data = reactive({
      height: 0,
      url: '',
      loaded: false
    })
    onMounted(() => {
      const params = {
        'issue-term': 'title',
        // @ts-ignore
        url: props.redirectUrl,
        title: props.title,
        label: props.label,
        repo: props.repo,
        theme: props.theme,
        pathname: location.pathname,
        // @ts-ignore
        origin: process.isClient ? window.origin : root.$static.metadata.siteUrl,
      }
      data.url = 'https://utteranc.es/utterances.html?' + Object.keys(params)
      // @ts-ignore
        .map(name => `${encodeURIComponent(name)}=${encodeURIComponent(params[name])}`).join('&')
      console.log(params)
      console.log(data.url)
    })
    // @ts-ignore
    watch(() => props.theme, () => refs.contentWindow?.postMessage({
      type: 'set-theme',
      theme: props.theme,
    }, 'https://utteranc.es'))
    const messageHandler = (event: MessageEvent) => {
      if (event.origin !== 'https://utteranc.es') return
      if (!data.loaded) data.loaded = true
      const res = event.data as Partial<ResizeMessage>
      if (res && res.type === 'resize' && res.height) {
        data.height = res.height
      }
    }
    useBeforeMount(() => {
      window.addEventListener('message', messageHandler)
      return () => window.removeEventListener('message', messageHandler)
    })
    return {
      data
    }
  }
})
</script>
<style scoped>
iframe {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  border: 0;
  outline: none;
}
</style>

<static-query>
query {
metadata {
siteUrl
}
}
</static-query>
