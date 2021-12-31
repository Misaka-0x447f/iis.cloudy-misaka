<template>
  <div class="layout" :style="{backgroundImage: `url('${backgroundImage}')`}">
    <header class="p-2 bg-just-black mb-8 shadow-md flex flex-wrap">
      <g-link class="font-mono text-primary" to="/">{{ $static.metadata.siteName }}</g-link>
      <LocationView class="ml-1ch"/>
      <HeaderSpinner class="text-primary ml-1ch"/>
      <div class="flex-1"></div>
      <HeaderButton
          :icon-path="twitterSvg" class="ml-1ch"
          @click="openLinkInNewTab('https://twitter.com/MisakaKumomi')"
      />
    </header>
    <main class="container mx-auto px-4 md:px-8">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: #def;
}

header {
  position: sticky;
  top: 0;
  z-index: 10000;
}
</style>

<style scoped>
.layout {
  min-height: 100vh;
  background-size: cover;
}
</style>

<script>
import HeaderSpinner from './_components/HeaderSpinner/HeaderSpinner'
import LocationView from './_components/LocationView'
import HeaderButton from '~/layouts/_components/HeaderButton'
import twitterSvg from '~/assets/twitter.svg'
import backgroundImage from '~/assets/background.jpg'
import { openLinkInNewTab } from '~/utils/navigator'

export default {
  components: { HeaderButton, LocationView, HeaderSpinner },
  setup () {
    return {
      twitterSvg,
      openLinkInNewTab,
      backgroundImage,
    }
  }
}
</script>
