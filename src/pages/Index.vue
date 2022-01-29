<template>
  <DefaultLayout>
    <div
      class="grid grid-flow-row auto-cols-auto lg:grid-cols-3 lg:gap-8 md:grid-cols-2 gap-4"
    >
      <div
        v-for="(edge) in $page.posts.edges"
        :key="edge.node.id"
        class="flex flex-col max-h-60 truncate fadeout-container"
      >
        <a :href="edge.node.path">
          <h2 class="text-xl whitespace-normal pb-4">
            {{ edge.node.title }}
          </h2>
          <div v-html="edge.node.content"></div>
        </a>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.fadeout-container {
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>

<page-query>
query Blog {
  posts: allPost (sortBy: "date_published", order: DESC, filter: { published: {eq: true }}){
    edges {
      node {
        id
        title
        description
        tags
        path
        date_published
        timeToRead
        content
      }
    }
  }
}
</page-query>

<script lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
export default {
  name: 'SiteIndexPage',
  components: { DefaultLayout },
  metaInfo: {
    title: '~',
    meta: [
      {
        name: 'home page',
        content: 'blog home page'
      }
    ]
  }
}
</script>
