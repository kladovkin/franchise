<template>
  <div id='slide_08' class='background-cutter'>
    <article>
      <h2 v-html='t("slide_08.h2")' />
      <div class='area'>
        <div
          v-for='(block, blockIndex) in blocks'
          :key='blockIndex'
          class='block-wrapper'
        >
          <div
            class='block'
            :class='{
              [`block-${blockIndex}`]: true,
              "block-even": (blockIndex % 2) === 0,
              "block-odd": (blockIndex % 2) === 1,
              "block-price": !!block.price
            }'
          >
            <div class='circle'>{{ block.days }}</div>
            <div class='info'>
              <div class='headline' v-html='block.headline' />
              <div v-if='block.note' class='note' v-html='block.note' />
              <div v-if='block.price' class='red'>
                <div class='red-price'>{{ block.price }}</div>
                <div v-if='block.price_note' class='red-note'>{{ block.price_note }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide6',
  data: () => ({
    blocks: t('slide_08.blocks')
  }),
  methods: {
    t,
    async enlarge() {
      const { default: SimpleLightbox } = await import(
        /* webpackChunkName: "lightbox" */ 'simple-lightbox'
      );

      SimpleLightbox.open({
        items: ['/schema.png']
      });
    }
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(50px, 110px)

  +gte_desktop
    padding-top: 110px

h2
  +lte_ipad
    margin-bottom: 54px

  +gte_laptop
    margin-bottom: 88px
    text-align: center

.area
  position: relative

  +gte_laptop
    margin: 0 auto

  +laptop
    max-width: 100%
    height: scale-laptop(2587px, 2913px)

  +gte_desktop
    height: 2913px

  &:before
    content: ''
    position: absolute
    z-index: -1

    +lte_ipad
      background: #f6f5fe
      height: rem(840px)
      left: rem(35px)
      top: rem(42px)
      width: rem(16px)

    +gte_laptop
      background-image: url(../assets/slide_08/background_line-desktop.svg)
      background-repeat: no-repeat
      background-size: cover
      left: 50%
      top: 0
      transform: translateX(-50%)

    +laptop
      width: scale-laptop(964px, 1096px)
      height: scale-laptop(2587px, 2913px)
      /* top: scale-laptop(108px, 130px) // it is intentionally 15px less than on desktop */
      /* margin-top: scale-laptop(53px, 39px) */

    +gte_desktop
      background-size: 1096px 2773px
      /* margin-top: 39px */
      /* top: 145px */
      top: 80px
      width: 1096px
      height: 2773px

.block-wrapper
  +gte_laptop
    height: 440px
    /* display: flex             */
    /* flex-direction: column    */
    /* justify-content: flex-end */
    /* width: 100%               */

    /* &:first-child             */
    /*   height: 160px           */

.block
  display: flex

  +iphone
    margin-bottom: rem(40px)

  +ipad
    margin-bottom: rem(55px)

  +lte_ipad
    color: #4b4b4b

  +gte_laptop
    color: #333

    &-even
      flex-direction: row-reverse

    &-price
      align-items: flex-end

    &:not(.block-price)
      align-items: center

.circle
  align-items: center
  align-self: flex-end
  background-repeat: no-repeat
  background-size: contain
  display: flex
  flex-shrink: 0
  font-weight: bold
  justify-content: center
  position: relative
  z-index: 1

  +lte_ipad
    background-image: url(../assets/slide_08/circle-mobile.svg)
    font-size: rem(14px)
    height: rem(85px)
    line-height: rem(16px)
    margin-right: rem(16px)
    width: rem(85px)

  +gte_laptop
    background-image: url(../assets/slide_08/circle-desktop.svg)
    font-size: 24px
    height: 160px
    line-height: 25px
    width: 160px

  .block-wrapper:last-child &
    background-image: url(../assets/slide_08/circle_logo.svg)

    +gte_laptop
      align-self: center

.info
  +ipad
    max-width: rem(360px)

  +lte_ipad
    display: flex
    flex-direction: column
    justify-content: center

  .headline
    font-weight: bold

    +lte_ipad
      font-size: rem(14px)
      line-height: rem(18px)
      margin-bottom: rem(4px)

    +gte_laptop
      font-size: 18px
      line-height: 23px

  .headline,
  .note
    +gte_laptop
      .block-odd &
        margin-left: 28px

      .block-even &
        margin-right: 26px

  .note
    +lte_ipad
      color: #6c6c6c
      font-size: rem(12px)
      line-height: rem(16px)

    +gte_laptop
      color: #4B4B4B
      font-size: 16px
      line-height: 23px
      margin-top: 11px

    &:not(:last-child)
      +lte_ipad
        margin-bottom: rem(12px)

.red
  justify-content: center
  background: #f44f0c
  display: flex
  flex-direction: column

  +lte_ipad
    height: rem(52px)
    border-radius: rem(10px)
    width: rem(255px)
    margin-left: rem(-68px)
    padding-left: rem(68px)

  +gte_laptop
    height: 95px
    margin-top: 26px

    .block-odd &
      border-radius: 0 10px 10px 0
      margin-left: -80px
      padding-left: 80px

    .block-even &
      border-radius: 10px 0 0 10px
      margin-left: -31px
      padding-left: 31px
      margin-right: -80px
      padding-right: 80px

.red-price
  color: #fff
  font-weight: bold

  +lte_ipad
    font-size: rem(18px)
    line-height: rem(24px)
    margin-bottom: rem(1px)

  +gte_laptop
    font-size: 20px
    line-height: 23px

  &:first-child:last-child
    align-self: center
    width: 369px

.red-note
  color: #fff

  +gte_laptop
    font-size: 16px
    font-weight: 300
    line-height: 23px
    margin-top: 5px
</style>

<style lang='sass'>
@import ../../node_modules/simple-lightbox/dist/simpleLightbox.css
</style>
