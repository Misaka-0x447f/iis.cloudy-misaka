<template>
  <DefaultLayout>
    <div
      class="lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-8 lg:auto-rows-auto"
    >
      <div
        v-for="(edge) in $page.posts.edges"
        :key="edge.node.id"
        class="lg:prose-xl xl:prose-2xl lg:flex lg:flex-col lg:pr-20"
      >
        <a :href="edge.node.path">
          <h2>
            {{ edge.node.title }}
          </h2>
        </a>
        <p class="lg:flex-grow lg:justify-self-start">
          {{ edge.node.description }}
        </p>
        <hr class="mx-8" />
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
