<template>
  <div class="loading">
    <div class="loading__message">{{ props.message }}</div>
    <div class="loading__loader"></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    message: {
      type: String,
      required: true
    }
  })

</script>

<style lang="sass" scoped>
.loading
  width: 100%
  height: auto
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  &__message
    font-size: 16px
    line-height: 22.4px
    font-weight: bold
    color: #333333

  &__loader
    margin-top: 30px
    color: #666
    font-size: 5px
    width: 1em
    height: 1em
    border-radius: 50%
    position: relative
    text-indent: -9999em
    animation: mulShdSpin 1.3s infinite linear
    transform: translateZ(0)

@keyframes mulShdSpin
  0%,
  100%
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em,  2em 2em 0 -1em, 0 3em 0 -1em,  -2em 2em 0 -1em, -3em 0 0 -1em,  -2em -2em 0 0
  12.5%
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,  -2em 2em 0 -1em, -3em 0 0 -1em,  -2em -2em 0 -1em
  25%
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em,  2em 2em 0 0, 0 3em 0 -1em,  -2em 2em 0 -1em, -3em 0 0 -1em,  -2em -2em 0 -1em
  37.5%
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em
  50%
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em
  62.5%
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em
  75%
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,  -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0
  87.5%
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,  -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em
</style>