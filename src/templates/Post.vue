<template>
  <DefaultLayout>
    <article class="flex flex-col max-w-screen-lg">
      <div class="self-end text-3xl">{{ $page.post.title }}</div>
      <div v-html="$page.post.content"></div>
      <UtterancesVue
          :title="$page.post.title"
          :redirect-url="$static.metadata.baseURL + $page.post.path"
          repo="Misaka-0x447f/iis.cloudy-misaka"
          label="feedback"
          theme="dark-blue"
      />
    </article>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/DefaultLayout'
import UtterancesVue from '~/components/UtterancesVue'
export default {
  name: 'PostTemplate',
  components: { DefaultLayout, UtterancesVue },
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
