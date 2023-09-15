<template>
  <div class="search">
    <label class="search__label" for="sidebar-search">Поиск сотрудников</label>
    <input class="search__input" type="search" id="sidebar-search" placeholder="Введите Id или имя"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])
</script>

<style lang="sass" scoped>
.search
  display: flex
  flex-direction: column

  &__label
    font-size: 16px
    line-height:  22.4px
    font-weight: bold
    color: #333333

  &__input
    margin-top: 16px
    padding: 16px
    color: #76787D
    border: 1.5px solid #E9ECEF
    border-radius: 8px
    transition: all .3s

    &::placeholder
      font-size: 14px
      line-height: 17.07px
      color: #76787D

    &:focus,
    &:active,
    &:focus-visible
      border-color: #999
      outline: none
</style>