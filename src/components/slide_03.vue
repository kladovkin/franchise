<template>
  <div id='slide_03' class='background-cutter'>
    <article id='slide_03'>
      <h2>
        <span>{{ t('slide_03.h2.red') }}</span> {{ t('slide_03.h2.other') }}
      </h2>

      <div class='h2-note'>{{ t('slide_03.h2_note') }}</div>

      <div class='picture-container'>
        <div class='picture-cutter'>
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
      </div>
      <ul class='blocks'>
        <li>
          <div class='headline'>{{ t('slide_03.block_1.headline') }}</div>
          <div class='note'>{{ t('slide_03.block_1.note') }}</div>
          <a href='#' class='details'>{{ t('slide_03.details') }}</a>
        </li>
        <li>
          <div class='headline'>{{ t('slide_03.block_2.headline') }}</div>
          <div class='note'>{{ t('slide_03.block_2.note') }}</div>
          <a href='#' class='details'>{{ t('slide_03.details') }}</a>
        </li>
        <li>
          <div class='headline'>{{ t('slide_03.block_3.headline') }}</div>
          <div class='note'>{{ t('slide_03.block_3.note') }}</div>
          <a href='#' class='details'>{{ t('slide_03.details') }}</a>
        </li>
      </ul>
      <div class='block-note'>
        {{ t('slide_03.block_note.text') }}
        <a href='#'>{{ t('slide_03.block_note.link') }}</a>
      </div>
      <div class='container'>
        <Button
          type='red'
          styling='conversion'
          :text='t("slide_03.button")'
          @click='lead'
        />
      </div>
    </article>
  </div>
</template>

<script>
import Button from '@/components/button';
import SweetScroll from '@/utils/sweet_scroll';
import t from '@/utils/locale';

export default {
  name: 'Slide03',
  components: { Button },
  methods: {
    t,
    async lead() {
      (await SweetScroll.asyncInstance()).toElement(
        document.getElementById('slide_12'), { duration: 450 }
      );
    }
  }
};
</script>

<style scoped lang='sass'>
$offset: 40px
.background-cutter
  +slide_offset_default
  +gte_laptop
    margin-top: -$offset

article
  +gte_laptop
    padding-top: $offset

    &:before
      background-image: url(../assets/slide_03/circles_background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 1119px
      left: -10px
      pointer-events: none
      position: absolute
      top: -219px + $offset
      width: 1685px

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
    margin-bottom: rem(24px)

  +gte_laptop
    height: 248px
    margin-bottom: 56px

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

  .picture-cutter
    +gte_laptop
      border-radius: 12px
      height: 248px
      max-width: 1100px
      overflow: hidden
      position: absolute
      width: 100%

  // cp src/assets/slide_03/original/* src/assets/slide_03/; for image in src/assets/slide_03/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
  picture
    height: rem(248px)
    left: 0
    max-width: 100%
    position: absolute
    top: 0
    width: 1100px
    z-index: -1

    img
      overflow: hidden

      +lte_ipad
        width: 100%

ul.blocks
  +lte_ipad
    margin-bottom: rem(32px)

  +gte_laptop
    +fcolumn(3, 30px, 0, 'li')
    margin-bottom: 56px

  li
    background: #eef5ff
    border-radius: rem(12px)
    color: #333333
    display: flex
    flex-direction: column

    +lte_ipad
      height: rem(208px)
      padding: rem(20px)

      &:not(:last-child)
        margin-bottom: rem(12px)

    +gte_laptop
      height: 324px
      padding: rem(44px) rem(32px)

    .headline
      font-weight: bold

      +lte_ipad
        font-size: rem(16px)
        line-height: rem(24px)
        margin-bottom: rem(12px)

      +gte_laptop
        font-size: 24px
        line-height: 32px
        margin-bottom: 24px

    .note
      +lte_ipad
        font-size: rem(12px)
        line-height: rem(20px)

      +gte_laptop
        font-size: 16px
        line-height: 28px

    .details
      +link
      font-size: rem(12px)
      line-height: rem(16px)
      margin-top: auto

.block-note
  font-size: rem(14px)
  line-height: rem(20px)
  text-align: center

  +lte_ipad
    margin-bottom: rem(24px)

  +gte_laptop
    margin-bottom: rem(32px)

  a
    +link

.container
  display: flex
  justify-content: center
  padding: 0
</style>
