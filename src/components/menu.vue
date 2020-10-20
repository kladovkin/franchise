<template>
  <div class='container' :class='{ "is-expanded": isExpanded }'>
    <div class='container-padding-offset'>
      <div class='trigger' @click='toggle' />
    </div>
  </div>
</template>

<script>
import isMobile from '@/utils/is_mobile';
import SweetScroll from '@/utils/sweet_scroll';

export default {
  name: 'Menu',
  data: () => ({
    isExpanded: false
  }),
  methods: {
    async toggle() {
      this.isExpanded = !this.isExpanded;

      if (isMobile()) {
        const { disablePageScroll, enablePageScroll } = await import(
          /* webpackChunkName: "scroll-lock" */
          'scroll-lock'
        );

        this.isExpanded ? disablePageScroll() : enablePageScroll();
        (await SweetScroll.asyncInstance()).toTop();
      }
    }
  }
};
</script>

<style scoped lang='sass'>
.container.is-expanded
  position: absolute
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: #f44f0c
  z-index: 2

  +lte_ipad
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      background-image: url(../assets/menu/background-mobile.svg)
      width: rem(245px)
      height: rem(251px)


  // disable z-index on first slide in order to make logo visible
  & + /deep/ .background article
    z-index: auto

.container-padding-offset
  position: relative

.trigger
  background-repeat: no-repeat
  background-size: contain
  box-shadow: 0px 8px 16px rgba(244, 79, 12, 0.24)
  cursor: pointer
  position: absolute
  z-index: 3

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
