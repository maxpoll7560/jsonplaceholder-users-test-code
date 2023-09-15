<template>
  <div class="posts">
    <MainPost v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
  }
})
</script>

<style lang="sass" scoped>
.posts
  max-height: 300px
  overflow-Y: auto
  overflow-X: hidden
  scroll-behavior: smooth
  margin: 30px 20px
  display: flex
  flex-direction: column

  &::-webkit-scrollbar
    width: 0
</style>