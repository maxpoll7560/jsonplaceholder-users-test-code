<template>
  <div class="result">
    <div class="result__title">Результаты</div>
      <transition-group name="result__items" tag="div" class="result__items">
        <SidebarResultItem
            class="result__item"
            v-for="user in filterUsers"
            :key="user.id"
            :user="user"
            @click="store.setCurrent(user.id)"
            :class="{'result__item--active': store.current === user.id}"
        />
      </transition-group>
  </div>
</template>

<script setup>
const props = defineProps({
  searchText: {
    type: String,
    required: true
  }
})

import { useUsersStore } from '@/store/users'
const store = useUsersStore()

const filterUsers = computed(() => {
  if (props.searchText !== '') {
    if (props.searchText.includes(',')) {
      const searchTextArray = props.searchText.trim().split(',').filter(i => i)

      return store.users.filter(user => {
        return searchTextArray.some(item => user.id === Number(item)) ||
            searchTextArray.some(item => user.name.toLowerCase().includes(item.toLowerCase().trim()));
      })

    } else {
      return store.users.filter(user => {
        return user.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
            user.id === Number(props.searchText)
      })
    }
  }
})
</script>

<style lang="sass" scoped>
.result
  display: flex
  flex-direction: column

  &__title
    margin-top: 29px
    font-size: 16px
    line-height:  22.4px
    font-weight: bold
    color: #333333

.result

  &__items
    margin-top: 13px
    max-height: 500px
    padding: 5px
    overflow-Y: auto
    overflow-X: hidden
    scroll-behavior: smooth
    position: relative
    display: flex
    flex-direction: column

    &::-webkit-scrollbar
      width: 0

    &-enter-from,
    &-leave-to
      opacity: 0

    &-leave-active
      position: absolute

  &__item
    width: 100%
    height: 70px
    transition: all 0.8s ease

    &--active
      background-color: #E0E0E0

</style>