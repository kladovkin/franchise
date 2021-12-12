<template>
  <button
    class='button'
    :class='{
      "button-white": type === "white",
      "button-red": type === "red"
    }'
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, required: true },
    type: {
      type: String,
      required: true,
      validator: (value) => (
        [
          'red',
          'white'
        ].indexOf(value) !== -1
      )
    }
  }
};
</script>

<style scoped lang='sass'>
.button
  -webkit-tap-highlight-color: transparent
  align-items: center
  border-radius: rem(10px)
  cursor: pointer
  display: flex
  font-weight: bold
  justify-content: center
  outline: none
  transition: color 0.25s, background-color 0.25s
  user-select: none
  width: 100%

  +lte_ipad
    font-size: rem(16px)
    height: rem(48px)

  +ipad
    max-width: 375px

  +gte_laptop
    font-size: 16px
    height: 60px
    max-width: 255px

  &-white
    background-color: #fff
    border: 3px solid #fff
    color: #f44f0c

    &:active
      color: #fff
      background-color: #f44f0c

  &-red
    background-color: #f44f0c
    border: 3px solid #f44f0c
    color: #fff

    +gte_laptop
      &:hover
        background-color: #fa7912
        border-color: #fa7912

    &:active
      background-color: #df4c10
      border-color: #df4c10
</style>
