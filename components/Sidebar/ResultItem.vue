<template>
  <div>
    <div class="result__item-img-wrapper">
      <img src="/images/placeholder-search.jpg" alt="Плейсхолдер" class="result__item-img">
    </div>
    <div class="result__item-text">
      <div class="result__item-name">{{ user.name }}</div>
      <div class="result__item-email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    user: {
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    }
  })

</script>

<style lang="sass" scoped>
.result__item
  margin-top: 18px
  display: flex
  align-items: center
  box-shadow: 0 0 10px 0 #0000001A
  border-radius: 10px

  &-text
    padding: 15px

  &-name
    font-size: 14px
    font-weight: 600
    line-height: 17px
    color: #333

  &-email
    margin-top: 5px
    font-size: 14px
    line-height: 17px
    color: #76787D

  &-img
    border-top-left-radius: 10px
    border-bottom-left-radius: 10px

</style>