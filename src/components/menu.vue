<template>
  <div class='container'>
    <div class='container-padding-offset'>
      <div class='trigger' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
};
</script>

<style scoped lang='sass'>
.container-padding-offset
  position: relative

.trigger
  background-repeat: no-repeat
  background-size: contain
  box-shadow: 0px 8px 16px rgba(244, 79, 12, 0.24)
  cursor: pointer
  position: absolute
  z-index: 2

  +lte_ipad
    background-image: url(../assets/menu/trigger-mobile.svg)
    width: rem(36px)
    height: rem(36px)
    border-radius: rem(36px)
    top: rem(21px)
    right: 0
    -webkit-tap-highlight-color: transparent

    &:active
      background-image: url(../assets/menu/trigger-mobile-active.svg)

  +gte_laptop
    background-image: url(../assets/menu/trigger-desktop.svg)
    border-radius: 63px
    height: 63px
    width: 63px
    top: 37px
    right: 0px

    &:hover
      background-image: url(../assets/menu/trigger-desktop-hover.svg)
</style>
