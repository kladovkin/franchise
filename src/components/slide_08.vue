<template>
  <div id='slide_08' class='background-cutter'>
    <article>
      <h2 v-html='t("slide_08.h2")' />
      <div class='zigzag-container'>
        <div
          v-for='(block, blockIndex) in blocks'
          :key='blockIndex'
          class='block-wrapper'
          :class='{
            [`block-wrapper-${blockIndex}`]: true,
          }'
        >
          <div
            class='block'
            :class='{
              [`block-${blockIndex}`]: true,
              "block-right": (blockIndex % 2) === 0,
              "block-left": (blockIndex % 2) === 1,
              "block-price": !!block.price
            }'
          >
            <picture>
              <source
                :srcset='`/slide_08/block-${blockIndex}.webp, /slide_08/block-${blockIndex}@2x.webp 2x`'
                type='image/webp'
              >
              <img
                class='laptop'
                :src='`/slide_08/block-${blockIndex}.png`'
                :srcset='`/slide_08/block-${blockIndex}@2x.png 2x`'
                @click='enlarge(blockIndex)'
              >
            </picture>
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
    async enlarge(blockIndex) {
      if (blockIndex !== 1) { return; }

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
    margin-bottom: 188px
    text-align: center

$laptop-scale-factor: 964 / 1096
$circle-laptop-size: 160px

.zigzag-container
  position: relative

  +gte_laptop
    margin: 0 auto

  +laptop
    max-width: 100%
    height: scale-laptop($laptop-scale-factor*2773px, 2773px)

  +gte_desktop
    height: 2773px

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
      top: $laptop-scale-factor*80px
      height: scale-laptop($laptop-scale-factor*2773px, 2773px)
      width: scale-laptop($laptop-scale-factor*1096px, 1096px)

    +gte_desktop
      height: 2773px
      top: 80px
      width: 1096px

=realign_wrapper($block-height)
  $offset: $block-height - $circle-laptop-size
  margin-top: -$offset
  margin-bottom: $offset

.block-wrapper
  +laptop
    height: scale-laptop($laptop-scale-factor*440px, 440px)

  +gte_desktop
    height: 440px

  +gte_laptop
    position: relative

    &-1
      +realign_wrapper(247px)

    &-2
      +realign_wrapper(167px)

    &-3
      +realign_wrapper(247px)

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
    position: relative

    &-right
      flex-direction: row-reverse

    &-price
      align-items: flex-end

    &:not(.block-price)
      align-items: center

    &-0
      .info
        width: 270px

    &-1
      .info
        width: 351px

    &-2
      .info
        width: 371px

    &-3 .info
      width: 350px

    &-4 .info
      width: 360px

    &-5 .info
      width: 205px

// cp public/slide_08/original/* public/slide_08/; for image in public/slide_08/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
picture
  align-self: center

  +lte_ipad
    display: none

  img
    position: absolute
    transform: translateY(-50%)

    +laptop
      transform: scale($laptop-scale-factor) translateY(-50%)

    +laptop
      .block-0 &
        left: scale-laptop(-26px, 0px)

      .block-1 &
        cursor: pointer
        right: scale-laptop(-26px, 0px)

      .block-2 &
        left: scale-laptop(-360px, -253px)
        margin-top: scale-laptop(-50px, -35px)

      .block-3 &
        right: scale-laptop($laptop-scale-factor*(-370px), -370px)

      .block-4 &
        left: scale-laptop(-207px / $laptop-scale-factor, -207px)
        margin-top: scale-laptop(-60px, 0)
        transform: scale(0.8) translateY(-50%)

      .block-5 &
        right: 0

    +gte_desktop
      .block-0 &
        left: 0

      .block-1 &
        right: 0

      .block-2 &
        left: -253px
        margin-top: -35px

      .block-3 &
        right: -370px

      .block-4 &
        left: -207px

      .block-5 &
        margin-top: 50px

      .block-5 &
        right: 0

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
      .block-left &
        margin-left: 28px

      .block-right &
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
    height: $circle-laptop-size
    line-height: 25px
    width: $circle-laptop-size

  .block-wrapper:last-child &
    background-image: url(../assets/slide_08/circle_logo.svg)

    +gte_laptop
      align-self: center

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

    .block-left &
      border-radius: 0 10px 10px 0
      margin-left: -80px
      padding-left: 80px

    .block-right &
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
