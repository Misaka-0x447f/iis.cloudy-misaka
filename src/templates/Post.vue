<template>
  <DefaultLayout>
    <article class="prose lg:prose-xl xl:prose-2xl">
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </article>
    <hr class="m-4" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/DefaultLayout'
export default {
  name: 'PostTemplate',
  components: { DefaultLayout },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          name: 'twitter:description',
          content: this.$page.post.description
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: this.$page.post.title
        },
        {
          name: 'twitter:creator',
          content: '@terabytetiger'
        },
        {
          name: 'twitter:site',
          content: '@terabytetiger'
        },
        {
          name: 'og:description',
          content: this.$page.post.description
        },
        {
          name: 'og:title',
          content: this.$page.post.title
        },
        {
          name: 'og:image',
          content: this.$static.metadata.baseURL + this.$page.post.og_image.src
        }
      ],
      link: [
        {
          rel: 'canonical',
          content: this.$static.metadata.baseURL + this.$page.post.path
        }
      ]
    }
  }
}
</script>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    path
    content
    description
    og_image
  }
}
</page-query>

<static-query>
query {
  metadata {
    baseURL
  }
}
</static-query>
