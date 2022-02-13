<template>
  <article id='slide_10'>
    <h2>{{ t('slide_10.h2') }}</h2>

    <!-- <Swiper                              -->
    <!--   :slides-per-view='4'               -->
    <!--   :space-between='50'                -->
    <!-- >                                    -->
    <!--   <SwiperSlide>Slide 1</SwiperSlide> -->
    <!--   <SwiperSlide>Slide 2</SwiperSlide> -->
    <!--   <SwiperSlide>Slide 3</SwiperSlide> -->
    <!-- </swiper>                            -->
    <!-- <div ref='swiper' class='swiper'> -->
    <!--   <swiper-slide>                  -->
    <!--   <div class='slides'>            -->
    <!--   </div>                          -->
    <!--   <div class='navigation'>        -->
    <!--     <button class='prev' />       -->
    <!--     <button class='next' />       -->
    <!--   </div>                          -->
    <!-- </div>                            -->
  </article>
</template>

<script>
import t from '@/utils/locale';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import isMobile from '@/utils/is_mobile';

export default {
  name: 'Slide8',
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  // async mounted() {
  //   const { default: Swiper } = await import('swiper');
  //
  //   this.swiper = new Swiper(this.$refs.swiper, {
  //     wrapperClass: 'slides',
  //     slideClass: 'slide',
  //     slidesPerView: isMobile() ? 'auto' : 4,
  //     spaceBetween: 0,
  //     navigation: {
  //       nextEl: '.next',
  //       prevEl: '.prev'
  //     }
  //   });
  // },
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
