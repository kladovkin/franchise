<template>
  <div class='background-cutter' id='slide_05'>
    <article>
      <div class='container'>
        <h2 v-html='t("slide_05.h2")' />
      </div>
      <div class='background-details'>
        <picture>
          <source src='../assets/slide_05/background.webp' type='image/webp'>
          <img
            class='background'
            loading='lazy'
            src='../assets/slide_05/background.png'
          />
        </picture>
        <div class='details'>
          <div class='cc-2'>
            <div class='c-column'>
              <div class='type-1' v-html='t("slide_05.list_1")' />
              <div class='type-2' v-html='t("slide_05.list_2")' />
              <div class='type-3' v-html='t("slide_05.list_3")' />
            </div>
            <div class='c-column'>
              <div class='type-4' v-html='t("slide_05.list_4")' />
              <div class='type-5' v-html='t("slide_05.list_5")' />
              <div class='type-6' v-html='t("slide_05.list_6")' />
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <Button type='red' :text='t("slide_05.button")' @click='lead'/>
      </div>
    </article>
  </div>
</template>

<script>
import Button from '@/components/button';
import SweetScroll from '@/utils/sweet_scroll';
import t from '@/utils/locale';

export default {
  name: 'Slide5',
  components: { Button },
  methods: {
    t,
    async lead() {
      (await SweetScroll.asyncInstance()).toElement(
        document.getElementById('slide_09'), { duration: 450 }
      );
    }
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  overflow: hidden

article
  +lte_ipad
    margin-bottom: rem(55px)
    padding-top: rem(25px)
    padding-left: 0
    padding-right: 0

  +gte_laptop
    margin-bottom: 100px
    padding-bottom: 76px
    padding-top: 29px

  &:before
    +gte_laptop
      content: ''
      position: absolute
      background-image: url(../assets/slide_05/skate.png)
      background-repeat: no-repeat
      background-size: contain
      z-index: 1

      .webp &
        background-image: url(../assets/slide_05/skate.webp)

    +laptop
      width: scale-laptop(352px, 438px)
      height: scale-laptop(342px, 426px)
      right: scale-laptop(-65px, 0px)
      top: scale-laptop(66px, 0px)

    +gte_desktop
      width: 438px
      height: 426px
      top: 0
      right: 0

.container
  +ipad
    display: flex
    justify-content: center

  +gte_laptop
    padding: 0

h2
  +lte_ipad
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 51px
    max-width: 827px

.details
  position: relative
  background: #5096ff
  border-radius: 0px 40px 40px 0px
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05)

  +iphone
    margin-bottom: rem(24px)
    padding: rem(24px) rem(16px)
    width: rem(219px)

  +ipad
    margin-bottom: rem(38px)
    padding: rem(24px) rem(32px)
    width: rem(480px)

  +gte_laptop
    height: 331px
    margin-bottom: 57px
    padding: 60px 0
    width: 826px

    &:after
      content: ''
      background: #5096ff
      position: absolute
      left: -99999px
      width: 99999px
      height: 100%
      top: 0

  .cc-2
    display: flex
    height: 100%

    +iphone
      flex-direction: column

    .c-column
      display: flex
      flex-direction: column
      height: 100%
      justify-content: space-between

      +ipad
        flex-grow: 1

      +gte_laptop
        width: 354px

      &:not(:last-child)
        +iphone
          margin-bottom: rem(24px)

        +gte_laptop
          margin-right: 30px

      div
        color: #fff
        display: flex
        align-items: center

        +lte_ipad
          font-size: rem(12px)
          line-height: rem(16px)

          &:not(:last-child)
            margin-bottom: rem(24px)

        +gte_laptop
          font-size: 16px
          font-weight: bold
          line-height: 23px

        &:before
          background-repeat: no-repeat
          background-size: contain
          content: ''

          +lte_ipad
            height: rem(35px)
            margin-right: rem(16px)
            width: rem(35px)

          +gte_laptop
            height: 50px
            margin-right: 40px
            width: 50px

      @each $icon in type-1, type-2, type-3, type-4, type-5, type-6
        .#{$icon}:before
          background-image: url(../assets/slide_05/#{$icon}.svg)

.background-details
  +lte_ipad
    position: relative

  .background
    position: absolute
    z-index: -1

    +iphone
      left: rem(-194px)

    +ipad
      right: rem(-268px)

    +lte_ipad
      display: block
      height: 100%
      min-width: 100%
      max-width: none

    +gte_laptop
      transform: translateX(50%)
      bottom: 0

    @media screen and (min-width: 1024px) and (max-width: 1200px)
      right: scale-laptop(81px, 242px)

    @media screen and (min-width: 1201px)
      right: 242px

a.navigation
  text-decoration: none
</style>
