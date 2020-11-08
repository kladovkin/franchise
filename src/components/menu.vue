<template>
  <aside :class='{ "is-expanded": isExpanded }'>
    <div class='container'>
      <div class='trigger' @click='toggle' />
      <ul v-if='isExpanded'>
        <li><div @click='() => scrollTo("slide_02")'>О нас</div></li>
        <li><div @click='() => scrollTo("slide_04")'>Преимущества</div></li>
        <li><div @click='() => scrollTo("slide_05")'>С кем работаем</div></li>
        <li><div @click='() => scrollTo("slide_06")'>Порядок действий</div></li>
        <li><div @click='() => scrollTo("slide_08")'>Кейсы</div></li>
        <li>
          <Button
            text='Оставить заявку'
            type='white'
            @click='lead'
          />
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import Button from '@/components/button';

import isMobile from '@/utils/is_mobile';
import SweetScroll from '@/utils/sweet_scroll';

export default {
  name: 'Menu',
  data: () => ({
    isExpanded: false
  }),
  components: { Button },
  computed: {
    sweetScroll() {
      return SweetScroll.asyncInstance();
    }
  },
  mounted() {
    // this.toggle();
  },
  methods: {
    async toggle() {
      this.isExpanded = !this.isExpanded;

      if (isMobile()) {
        const { disablePageScroll, enablePageScroll } = await import(
          /* webpackChunkName: "scroll-lock" */
          'scroll-lock'
        );

        if (this.isExpanded) {
          disablePageScroll();
          (await this.sweetScroll).toTop();
        } else {
          enablePageScroll();
        }
      }
    },
    async scrollTo(elementId) {
      this.toggle();
      (await this.sweetScroll).toElement(
        document.getElementById(elementId), { duration: 450 }
      );
    },
    async lead() {
      this.scrollTo('slide_09');
    }
  }
};
</script>

<style scoped lang='sass'>
aside
  +default_padding_left
  +default_padding_right

  &.is-expanded
    left: 0
    max-width: 100vw
    top: 0
    width: 100vw

    +lte_ipad
      background: #f44f0c
      height: 100vh
      position: absolute
      top: 0
      z-index: 2

      &:before
        background-image: url(../assets/menu/background-mobile.svg)
        background-repeat: no-repeat
        content: ''
        height: rem(251px)
        left: 0
        pointer-events: none
        position: absolute
        width: rem(245px)

      // disable z-index on first slide in order to make logo visible
      & + ::v-deep(.background article)
        z-index: auto

    +gte_laptop
      background: #fd5a18
      position: fixed
      z-index: 4

    +laptop
      height: scale-laptop(120px, 140px)

    +gte_desktop
      height: 140px

.container
  padding: 0

  +gte_laptop
    display: flex
    height: 100%
    width: 100%

.trigger
  background-repeat: no-repeat
  background-size: contain
  box-shadow: 0px 8px 16px rgba(244, 79, 12, 0.24)
  cursor: pointer
  position: absolute
  user-select: none
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
    right: 0px

    &:hover
      background-image: url(../assets/menu/open-desktop-hover.svg)

  +laptop
    top: scale-laptop(28px, 39px)

  +gte_desktop
    top: 39px

  .is-expanded &
    +lte_ipad
      background-image: url(../assets/menu/close-mobile.svg)

      &:active
        background-image: url(../assets/menu/close-mobile-active.svg)

    +gte_laptop
      background-image: url(../assets/menu/close-desktop.svg)

      &:hover
        background-image: url(../assets/menu/close-desktop-hover.svg)

ul
  display: flex

  +iphone
    padding-top: rem(100px)

  +ipad
    padding-top: rem(160px)
    margin: 0 auto

  +lte_ipad
    flex-direction: column

  +gte_laptop
    width: 100%
    height: 100%
    align-items: center
    justify-content: space-between
    padding-right: 122px

  li
    &:not(last-child)
      +lte_ipad
        margin-bottom: rem(24px)

    &:first-child
      +lte_ipad
        font-weight: bold

    &:last-child
      +lte_ipad
        margin-top: rem(16px)

    & > div
      letter-spacing: -0.01em
      color: #fff
      cursor: pointer

      +lte_ipad
        font-size: rem(24px)
        line-height: rem(28px)
        text-align: center

      +gte_laptop
        font-size: 18px
        line-height: 23px
        position: relative

        &:hover:before
          content: ''
          position: absolute
          left: 0
          border-bottom: 2px solid #fff
          width: 100%
          bottom: -14px

    .button
      +gte_laptop
        height: 54px
        width: 187px
</style>
