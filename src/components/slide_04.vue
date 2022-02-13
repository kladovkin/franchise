<template>
  <div id='slide_04' class='background-cutter'>
    <picture @click='lead'>
      <source
        srcset='../assets/slide_04/background-mobile.webp, ../assets/slide_04/background-mobile@2x.webp 2x'
        type='image/webp'
        media='(max-width: 1023px)'
      >
      <source
        srcset='../assets/slide_04/background-desktop.webp, ../assets/slide_04/background-desktop@2x.webp 2x'
        type='image/webp'
      >
      <img
        class='laptop'
        loading='lazy'
        src='../assets/slide_04/background-desktop.png'
        srcset='../assets/slide_04/background-desktop@2x.png 2x'
      >
    </picture>
    <article @click='lead'>
      <div class='headline'>{{ t('slide_04.headline') }}</div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide04',
  methods: {
    t,
    lead() {
      alert('click');
    }
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  position: relative
  overflow: hidden

  +lte_ipad
    margin-top: rem(72px)

  +gte_laptop
    margin-top: 180px

// cp src/assets/slide_04/original/* src/assets/slide_04/; for image in src/assets/slide_04/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
picture img
  cursor: pointer
  left: 50%
  position: absolute
  top: 0
  transform: translateX(-50%)

  +lte_ipad
    height: rem(510px)

  +gte_laptop
    max-width: none

  +laptop
    height: scale-laptop(254px, 476px)

  +gte_desktop
    height: 476px

article
  cursor: pointer

  +lte_ipad
    height: rem(510px)

  +laptop
    height: scale-laptop(254px, 476px)

  +gte_desktop
    height: 476px

.headline
  color: #ffffff
  font-weight: bold

  +lte_ipad
    font-size: rem(24px)
    line-height: rem(32px)
    padding-top: rem(64px)
    text-align: center

  +laptop
    font-size: scale-laptop(27px, 32px)
    line-height: scale-laptop(48px, 56px)
    padding-top: scale-laptop(62px, 156px)
    max-width: scale-laptop(336px, 539px)

  +gte_desktop
    font-size: 32px
    line-height: 56px
    padding-top: 156px
    max-width: 539px
</style>
