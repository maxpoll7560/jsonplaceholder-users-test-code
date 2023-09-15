<template>
  <header>
    <div class="wrapper">
      <div class="header">
        <div class="header__logo">
          <img class="header__img" src="/logo.svg" alt="Жилфонд">
        </div>
        <div class="header__rule">Пользователь</div>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="sass" scoped>
.header
  padding: 45px 0
  display: flex
  justify-content: space-between
  align-items: center

  @media screen and (max-width: 767px)
    flex-direction: column
    justify-content: center

.header .header__img
  max-height: 39px

.header__rule
  font-size: 16px
  line-height: 19.5px

  @media screen and (max-width: 767px)
    margin-top: 10px
</style>