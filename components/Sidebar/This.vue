<template>
  <section class="sidebar">
    <SidebarSearch v-model="searchText" />
    <SidebarResult :searchText="searchText" />
  </section>
</template>

<script setup>
  const searchText = ref('')
</script>

<style lang="sass" scoped>
.sidebar
  width: 32%
  padding: 13px 23px
  border-right: 1px solid #DEDEDD

  @media screen and (max-width: 1200px)
    width: 40%

  @media screen and (max-width: 991px)
    width: 100%
    flex: 1 1 100%


</style>