<template>
  <DefaultLayout>
    <div
      class="grid grid-flow-row auto-cols-auto lg:grid-cols-3 lg:gap-8 md:grid-cols-2 gap-4"
    >
      <div
        v-for="(edge) in $page.posts.edges"
        :key="edge.node.id"
        class=""
      >
        <a :href="edge.node.path">
          <h2 class="text-xl">
            {{ edge.node.title }}
          </h2>
        </a>
        <p class="lg:flex-grow lg:justify-self-start">
          {{ edge.node.description }}
        </p>
      </div>
    </div>
  </DefaultLayout>
</template>

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
