<template>
  <article id='slide_10'>
    <h2>{{ t('slide_10.h2') }}</h2>

    <div ref='swiper' class='swiper'>
      <div class='slides'>
        <div
          v-for='imageIndex in images'
          :key='imageIndex'
          class='slide'
        >
          <picture>
            <source
              :srcset='`/slide_10/slide_image-${imageIndex}.webp, /slide_10/slide_image-${imageIndex}@2x.webp 2x`'
              type='image/webp'
            >
            <img
              class='laptop'
              :src='`/slide_10/slide_image-${imageIndex}.png`'
              :srcset='`/slide_10/slide_image-${imageIndex}@2x.png 2x`'
            >
          </picture>
        </div>
        <div
          v-for='imageIndex in images'
          :key='imageIndex + 5'
          class='slide'
        >
          <picture>
            <source
              :srcset='`/slide_10/slide_image-${imageIndex}.webp, /slide_10/slide_image-${imageIndex}@2x.webp 2x`'
              type='image/webp'
            >
            <img
              class='laptop'
              :src='`/slide_10/slide_image-${imageIndex}.png`'
              :srcset='`/slide_10/slide_image-${imageIndex}@2x.png 2x`'
            >
          </picture>
        </div>
      </div>
      <div class='navigation'>
        <button class='swiper-button-prev' />
        <button class='swiper-button-next' />
      </div>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide8',
  data: () => ({
    images: [0, 1, 2, 3]
  }),
  async mounted() {
    const { Swiper, Navigation } = await import('swiper');

    this.swiper = new Swiper(this.$refs.swiper, {
      wrapperClass: 'slides',
      slideClass: 'slide',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 0,
      initialSlide: 0,
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 16
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 23
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 28
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'is-disabled'
      },
      modules: [Navigation]
    });
  },
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(71px)

  +laptop
    padding-top: scale-laptop(153px, 190px)

  +gte_desktop
    padding-top: 190px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(24px)

  +laptop
    margin-bottom: scale-laptop(36px, 58px)

  +gte_desktop
    margin-bottom: 58px

.swiper
  list-style: none
  margin-left: auto
  margin-right: auto
  overflow: hidden
  padding: 0
  position: relative
  width: 100%
  z-index: 1

  &-pointer-events
    touch-action: pan-y

  .slides
    box-sizing: content-box
    display: flex
    position: relative
    transform: translate3d(0px, 0, 0)
    transition-property: transform
    z-index: 1

  .slide
    overflow: hidden
    flex-shrink: 0

    // cp public/slide_10/original/* public/slide_10/; for image in public/slide_10/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
    picture img
      border-radius: rem(12px)

      +lte_ipad
        width: rem(187px)

      +laptop
        width: scale-laptop(222px, 265px)

      +gte_desktop
        width: 265px

  .navigation
    display: flex
    padding-bottom: rem(10px)
    justify-content: center

    +lte_ipad
      margin-top: rem(24px)

    +gte_laptop
      margin-top: 34px

    .swiper-button-prev,
    .swiper-button-next
      -webkit-appearance: none
      -webkit-tap-highlight-color: transparent
      align-items: center
      background: $primary
      border-radius: rem(67px)
      border: rem(3.5px) solid #fff
      color: $primary
      cursor: pointer
      display: flex
      height: rem(67px)
      justify-content: center
      transition: color 0.25s, border-color 0.25s, background-color 0.25s, box-shadow 0.25s
      width: rem(67px)

      +gte_laptop
        &:hover
          box-shadow: 0px 3px 10px rgb(244 79 12 / 35%)
          color: #333

      &:active
        color: $primary
        box-shadow: none

      &:before
        content: ''
        background-repeat: no-repeat
        background-size: contain
        background: url('../assets/slide_10/navigation.svg')
        width: rem(16px)
        height: rem(25px)

      &.is-disabled
        background-color: #939393
        box-shadow: none
        cursor: default

    .swiper-button-prev
      +lte_ipad
        margin-right: rem(9px)

      +gte_laptop
        margin-right: 26px

      &:before
        transform: scale(-1)
</style>
