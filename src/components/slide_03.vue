<template>
  <article id='slide_03'>
    <h2>
      <span>{{ t('slide_03.h2.red') }}</span> {{ t('slide_03.h2.other') }}
    </h2>

    <div class='h2-note'>{{ t('slide_03.h2_note') }}</div>

    <div class='picture-container'>
      <ul>
        <li>
          <div class='headline'>{{ t('slide_03.picture_block_1.headline') }}</div>
          <div class='note'>{{ t('slide_03.picture_block_1.note') }}</div>
        </li>
        <li>
          <div class='headline'>{{ t('slide_03.picture_block_2.headline') }}</div>
          <div class='note'>{{ t('slide_03.picture_block_2.note') }}</div>
        </li>
        <li>
          <div class='headline'>{{ t('slide_03.picture_block_3.headline') }}</div>
          <div class='note'>{{ t('slide_03.picture_block_3.note') }}</div>
        </li>
        <li>
          <div class='headline'>{{ t('slide_03.picture_block_4.headline') }}</div>
          <div class='note'>{{ t('slide_03.picture_block_4.note') }}</div>
        </li>
      </ul>
      <picture>
        <source
          srcset='../assets/slide_03/picture_background-mobile.webp, ../assets/slide_03/picture_background-mobile@2x.webp 2x'
          type='image/webp'
          media='(max-width: 1023px)'
        >
        <source
          srcset='../assets/slide_03/picture_background-desktop.webp, ../assets/slide_03/picture_background-desktop@2x.webp 2x'
          type='image/webp'
        >
        <img
          class='laptop'
          loading='lazy'
          src='../assets/slide_03/picture_background-desktop.png'
          srcset='../assets/slide_03/picture_background-desktop@2x.png 2x'
        >
      </picture>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide3',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +gte_laptop
    padding-top: 166px

h2
  +lte_ipad
    margin-bottom: rem(50px)

  +gte_laptop
    max-width: 635px
    text-align: center
    margin: 0 auto 36px

.h2-note
  +lte_ipad
    display: none

  +gte_laptop
    color: #6c6c6c
    font-size: 16px
    line-height: 20px
    margin-bottom: 56px
    text-align: center

.picture-container
  position: relative

  +lte_ipad
    height: rem(223px)

  +gte_laptop
    height: 248px

  ul
    color: #fff
    display: flex
    height: 100%

    +lte_ipad
      flex-wrap: wrap
      padding: rem(35px) rem(21px) 0

    +gte_laptop
      align-items: center
      justify-content: space-between
      padding-top: 10px

    +laptop
      padding-left: scale-laptop(61px, 81px)
      padding-right: scale-laptop(61px, 81px)

    +gte_desktop
      padding-left: 81px
      padding-right: 81px

    li
      +lte_ipad
        width: 50%
        height: rem(90px)

  .headline
    font-weight: bold
    white-space: nowrap

    +lte_ipad
      font-size: rem(28px)
      line-height: rem(35px)
      margin-bottom: rem(8px)

    +gte_laptop
      font-size: 44px
      line-height: 35px
      margin-bottom: 20px

  .note
    +lte_ipad
      font-size: rem(12px)
      line-height: rem(16px)

    +gte_laptop
      font-size: 18px
      line-height: 23px

  // cp src/assets/slide_03/original/* src/assets/slide_03/; for image in src/assets/slide_03/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
  picture
    height: 100%
    left: 0
    position: absolute
    top: 0
    width: 100%
    z-index: -1

    img
      border-radius: 12px
      overflow: hidden
</style>
