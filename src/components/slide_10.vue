<template>
  <article id='slide_10'>
    <h2>{{ t('slide_10.h2') }}</h2>

    <div class='swiper'>
      <div class='slides'>
      </div>
      <div class='slider-navigation'>
        <button class='slider-prev' />
        <button class='slider-next' />
      </div>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';
import swiper from '@/utils/swiper'

export default {
  name: 'Slide8',
  mounted() {
    const { default: Swiper } = await import(
      /* webpackChunkName: "swiper" */
      '@/utils/swiper'
    );

    this.swiper = new Swiper(this.$refs.navigationList, {
      grabCursor: true,
      slidesPerView: 'auto',
      spaceBetween: 0,
      wrapperClass: 'links',
      slideClass: 'link',
      navigation: false,
      speed: 500
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
</style>
