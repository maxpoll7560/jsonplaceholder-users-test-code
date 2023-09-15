<template>
  <div class="post">
    <div class="post__title">{{ props.post?.title }}</div>
    <div class="post__body">{{ props.post?.body }}</div>
  </div>
</template>

<script setup>
  const props = defineProps({
    post: {
      type: Object
    }
  })

</script>

<style lang="sass" scoped>
.post
  margin-left: 5px
  margin-right: 5px
  padding: 15px
  border: 1px solid #F1F1F1
  box-shadow: 0 0 10px 0 #0000001A
  border-radius: 10px

  &:not(:last-child)
    margin-bottom: 20px

  &__title
    display: block
    font-size: 16px
    font-weight: 600
    color: #333

    &::first-letter
      text-transform: uppercase

  &__body
    margin-top: 10px
    font-size: 14px
    font-weight: 400
    line-height: 17px
    color: #76787D

    &::first-letter
      text-transform: uppercase
</style>