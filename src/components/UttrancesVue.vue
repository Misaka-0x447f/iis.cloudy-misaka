<template>
  <div class="uttrances-mount-point" ref="mountPoint"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'

const source = 'https://utteranc.es/client.js'

export default defineComponent({
  name: 'UttrancesVue',
  props: {
    repo: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    label: String,
    issueTerm: String,
    issueNumber: Number
  },

  setup (props, { refs }) {
    onMounted(() => {
      const scriptEl = document.createElement('script')

      scriptEl.src = source
      scriptEl.async = true
      scriptEl.setAttribute('repo', props.repo)
      if (props.issueTerm) {
        const _issueTerm = Array.isArray(props.issueTerm)
          ? props.issueTerm.join(' ')
          : props.issueTerm

        scriptEl.setAttribute('issue-term', _issueTerm)
      } else if (typeof props.issueNumber === 'number') {
        scriptEl.setAttribute('issue-number', String(props.issueNumber))
      }
      scriptEl.setAttribute('crossorigin', 'anonymous')
      scriptEl.setAttribute('theme', props.theme)

      if (props.label) {
        scriptEl.setAttribute('label', props.label)
      }

      (refs.mountPoint as HTMLElement).appendChild(scriptEl)
    })
  }
})
</script>

<style scoped>
  .uttrances-mount-point >>> iframe {
    outline: none;
  }
</style>
