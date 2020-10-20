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
  font-weight: 800
  justify-content: center
  outline: none
  transition: color 0.25s, background-color 0.25s
  user-select: none
  width: 100%

  +lte_ipad
    font-size: rem(16px)
    height: rem(48px)

  +gte_laptop
    font-size: 16px
    height: 60px

  &-white
    background-color: #fff
    border: 3px solid #fff
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25)
    color: #f44f0c

    &:active
      color: #fff
      background-color: #f44f0c

  &-red
    background-color: #f44f0c
    border: 3px solid #f44f0c
    box-shadow: 0px 4px 15px rgba(244, 79, 12, 0.24)
    color: #fff

    +gte_laptop
      &:hover
        background-color: #fa7912
        border-color: #fa7912

    &:active
      background-color: #df4c10
      border-color: #df4c10
</style>
