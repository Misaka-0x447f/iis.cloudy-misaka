<template>
  <div class="group text-primary hover:bg-primary hover:text-just-black flex items-center cursor-pointer"
       @click="emit('click')">
    <div class="h-5 w-5 bg-primary group-hover:bg-just-black" :style="`mask-image: url(${iconPath});`"/>
    <span v-if="label" class="ml-1ch">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderButton',
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    }
  },
  setup (_, { emit }) {
    return { emit }
  }
})
</script>

<style scoped>
</style>
