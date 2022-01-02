<template>
  <DefaultLayout>
    <article class="flex flex-col">
      <div class="self-end text-3xl">{{ $page.post.title }}</div>
      <div v-html="$page.post.content"></div>
      <UttrancesVue
          repo="Misaka-0x447f/iis.cloudy-misaka"
          issue-term="og:title"
          label="feedback"
          theme="dark-blue"
      />
    </article>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/DefaultLayout'
import UttrancesVue from '~/components/UttrancesVue'
export default {
  name: 'PostTemplate',
  components: { DefaultLayout, UttrancesVue },
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
