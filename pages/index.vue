<template>
  <div class="px-6 pt-8 pb-16 sm:py-12 sm:pb-24 lg:pt-16 lg:pb-32">
    <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page"/>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // @ts-ignore
  async asyncData({$content}) {
    const page = await $content('index').fetch()

    return {
      page
    }
  }
})
</script>

<style>
article span.filename {
  display: none !important;
}
</style>
