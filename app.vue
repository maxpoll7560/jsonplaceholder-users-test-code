<template>
  <div>
    <TheHeader />
    <main>
      <div class="wrapper">
        <div class="content">

          <template v-if="pending">
            <Loading message="Загружаем список пользователей..." />
          </template>

          <template v-else-if="status === 'success'">
            <SidebarThis />
            <MainThis />
          </template>

          <template v-else-if="error">
            <div class="error">
              <div class="error__message">Произошла ошибка при получении данных пользователей! Пожалуйста попробуйте позже!</div>
              <div class="error__code">Код ошибки: {{ error }}</div>
              <button class="error__button" @click="refresh">Обновить</button>
            </div>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
  import { useUsersStore } from '@/store/users'

  const store = useUsersStore()
  const config = useRuntimeConfig()

  const { data: users, status, pending, error, refresh } = await useFetch(config.public.api + '/users', {
    lazy: true,
    server: false
  })

  watch(status, () => {
    if (status.value === 'success') {
      store.setUsers(users.value)
    }
  })
</script>

<style lang="sass" scoped>
  .content
    min-height: 675px
    display: flex
    flex-wrap: wrap
    background: #FDFDFD
    box-shadow: 0 0 10px 0 #0000001A

  .error
    width: 100%
    height: auto
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    &__code
      margin-top: 5px

    &__button
      margin-top: 10px
      padding: 5px 15px
      border: 1px solid #E0E0E0
      border-radius: 10px
      cursor: pointer
</style>