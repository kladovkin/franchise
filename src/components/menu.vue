<template>
  <div class='container' :class='{ "is-expanded": isExpanded }'>
    <div class='container-padding-offset'>
      <div class='trigger'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    isExpanded: false
  })
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
    background-image: url(../assets/menu/open-mobile.svg)
    width: rem(36px)
    height: rem(36px)
    border-radius: rem(36px)
    top: rem(21px)
    right: 0
    -webkit-tap-highlight-color: transparent

    &:active
      background-image: url(../assets/menu/open-mobile-active.svg)

  +gte_laptop
    background-image: url(../assets/menu/open-desktop.svg)
    border-radius: 63px
    height: 63px
    width: 63px
    top: 37px
    right: 0px

    &:hover
      background-image: url(../assets/menu/open-desktop-hover.svg)

  .is-expanded &
    +lte_ipad
      background-image: url(../assets/menu/close-mobile.svg)

      &:active
        background-image: url(../assets/menu/close-mobile-active.svg)

    +gte_laptop
      background-image: url(../assets/menu/close-desktop.svg)

      &:hover
        background-image: url(../assets/menu/close-desktop-hover.svg)
</style>
