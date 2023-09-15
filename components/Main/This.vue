<template>
  <section class="main">
    <template v-if="loader">
      <div class="loading">
        <Loading message="Загружаем данные"/>
      </div>
    </template>
    <template v-else>
      <MainResult v-if="user" :user="user"/>
      <MainPosts v-if="posts" :posts="posts"/>
    </template>
  </section>
</template>

<script setup>
  import { useUsersStore } from '@/store/users'

  const store = useUsersStore()
  const config = useRuntimeConfig()

  const loader = ref(false)
  const res = ref('')
  const posts = ref('')

  const user = computed(() => {
    return store.users.find(user => user.id === store.current)
  })

  const current = computed(() => {
    return store.current
  })

  watch(current, async () => {
    loader.value = true

    res.value = await useFetch(config.public.api + '/posts?userId=' + current.value, {
      lazy: true,
      server: false
    })
  })

  watch(res, () => {
    if (res.value.status === 'success') {
      posts.value = res.value.data
      setTimeout(() => {
        loader.value = false
      }, 200)
    }
  })
</script>

<style lang="sass" scoped>
.main
  width: 68%

  @media screen and (max-width: 1200px)
    width: 60%

  @media screen and (max-width: 991px)
    width: 100%
    flex: 1 1 100%

.loading
  height: 100%
  display: flex
  justify-content: center
  align-items: center
</style>