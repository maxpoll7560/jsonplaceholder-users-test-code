<template>
  <div class="current">
    <div class="current__img-wrapper">
      <img src="/images/placeholder.jpg" alt="Плейсхолдер" class="current__img">
    </div>
    <div class="current__text">
      <div class="current__name">{{ props.user?.name }}</div>
      <div class="current__email"><span class="current__email--bold">email</span>{{ props.user?.email }}</div>
      <div class="current__email"><span class="current__phone--bold">phone</span>{{ props.user?.phone }}</div>
      <div class="current__about-title">О себе</div>
      <p class="current__about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<style lang="sass" scoped>
.current
  margin: 30px 20px
  display: flex

  @media screen and (max-width: 1400px)
    flex-wrap: wrap

  &__img-wrapper
    @media screen and (max-width: 1400px)
      width: 100%
      display: flex
      justify-content: center
      align-items: center

  &__img
    @media screen and (max-width: 700px)
      width: 100%

  &__text
    margin-left: 50px

    @media screen and (max-width: 1400px)
      margin-left: 0
      margin-top: 40px

  &__name
    font-size: 16px
    font-weight: 600
    line-height: 22px
    color: #000000

  &__email
    margin-top: 10px
    font-size: 16px
    font-weight: 400
    line-height: 22px
    color: #76787D

    &--bold
      margin-right: 8px
      font-weight: 600
      color: #333333

  &__phone
    margin-top: 10px
    font-size: 16px
    font-weight: 400
    line-height: 22px
    color: #76787D

    &--bold
      margin-right: 8px
      font-weight: 600
      color: #333333

  &__about-title
    margin-top: 20px
    font-size: 16px
    font-weight: 600
    line-height: 22px
    color: #333333

  &__about-text
    margin-top: 20px
    font-size: 14px
    font-weight: 400
    line-height: 17px
    color: #76787D




</style>