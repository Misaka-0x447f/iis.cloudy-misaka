<template>
  <span class="font-mono whitespace-pre">{{char}}</span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import { useBeforeMount } from '../../../utils/hooks'
import chars from './chars.json'
import { randInt } from '../../../utils/lang'

export default defineComponent({
  name: 'HeaderSpinner',
  setup () {
    const set = ref(chars[randInt(0, chars.length - 1)])
    const cur = ref(0)
    const char = computed(() => {
      return set.value[Math.floor(cur.value) % set.value.length]
    })
    useBeforeMount(() => {
      const mouseEventHandler = (e: MouseEvent) => {
        // every 100 pixels
        cur.value += Math.sqrt(Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2)) / 100
      }
      document.addEventListener('mousemove', mouseEventHandler)
      const timer = setInterval(() => { cur.value += 1 / 4 }, 250)
      return () => {
        document.removeEventListener('mousemove', mouseEventHandler)
        clearInterval(timer)
      }
    })
    return {
      char
    }
  }
})
</script>

<style scoped>

</style>
