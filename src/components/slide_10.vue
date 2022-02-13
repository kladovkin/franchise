<template>
  <article id='slide_10'>
    <h2>{{ t('slide_10.h2') }}</h2>

    <div ref='swiper' class='swiper'>
      <div class='slides'>
        <div
          v-for='imageIndex in images'
          :key='imageIndex'
        >
          <picture>
            <source
              :srcset='`/slide_10/slide_image-${blockIndex}.webp, /slide_10/slide_image-${blockIndex}@2x.webp 2x`'
              type='image/webp'
            >
            <img
              class='laptop'
              :src='`/slide_08/slide_image-${blockIndex}.png`'
              :srcset='`/slide_08/slide_image-${blockIndex}@2x.png 2x`'
              @click='enlarge(blockIndex)'
            >
          </picture>

      </div>
      <div class='navigation'>
        <button class='prev' />
        <button class='next' />
      </div>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';
import isMobile from '@/utils/is_mobile';

export default {
  name: 'Slide8',
  // components: {
  //   Swiper,
  //   SwiperSlidp
  // },
  data: () => ({
    images: [0, 1, 2, 3]
  }),
  async mounted() {
    const { Swiper, Navigation } = await import('swiper');

    this.swiper = new Swiper(this.$refs.swiper, {
      wrapperClass: 'slides',
      slideClass: 'slide',
      slidesPerView: isMobile() ? 'auto' : 4,
      spaceBetween: 0,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev'
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

.slide
  border-radius: rem(12px)

// cp public/slide_10/original/* public/slide_10/; for image in public/slide_10/*@2x.png; do; echo $image; convert -resize 50% $image ${image/@2x/}; convert -quality 95% $image ${image/\.png/.webp}; convert -resize 50% ${image/\.png/.webp} ${${image/\.png/.webp}/@2x/}; tinypng $image; tinypng ${image/@2x/}; done;
picture
  align-self: center
</style>
