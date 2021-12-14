<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div class="flex items-center font-mono">
    <div class="text-just-black flex leading-5">
      <img :src="leftArrow" class="arrow"/>
      <span class="bg-primary whitespace-pre location">{{locationStr}}</span>
      <img :src="rightArrow" class="arrow"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import leftArrow from '~/assets/leftArrow.svg'
import rightArrow from '~/assets/rightArrow.svg'
import { useBeforeMount } from '../../utils/hooks'
export default defineComponent({
  name: 'LocationView',
  setup () {
    const locationStr = ref(' ~ ')
    useBeforeMount(() => {
      const handler = () => {
        const newString = ` ~${location.pathname + location.hash} `.replace(/\/ $/, ' ')
        if (newString !== locationStr.value) {
          locationStr.value = newString
        }
      }
      // It's robust!
      const t = setInterval(handler, 50)
      return () => clearInterval(t)
    })
    return {
      leftArrow,
      rightArrow,
      locationStr
    }
  }
})
</script>

<style scoped>
.arrow {
  width: 0.625rem;
  height: 1.25rem;
}
.location {
  height: 1.25rem;
}
</style>
