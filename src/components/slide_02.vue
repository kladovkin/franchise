<template>
  <article id='slide_02'>
    <div class='header'>
      <h2>
        <span>{{ t('slide_02.h2.red') }}</span> {{ t('slide_02.h2.other') }}
      </h2>
      <div class='note'>
        <span>{{ t('slide_02.note.red') }}</span> {{ t('slide_02.note.other') }}
      </div>
    </div>
    <ul class='blocks'>
      <li>
        <div class='headline'>{{ t('slide_02.block_1.headline') }}</div>
        <div class='note'>{{ t('slide_02.block_1.note') }}</div>
      </li>
      <li>
        <div class='headline'>{{ t('slide_02.block_2.headline') }}</div>
        <div class='note'>{{ t('slide_02.block_2.note') }}</div>
      </li>
      <li>
        <div class='headline'>{{ t('slide_02.block_3.headline') }}</div>
        <div class='note'>{{ t('slide_02.block_3.note') }}</div>
      </li>
    </ul>

    <div ref='swiper' class='swiper'>
      <div class='slides'>
        <div class='slide slide_1'>
          <div class='note'>{{ t('slide_02.slide_1.note') }}</div>
        </div>
        <div class='slide slide_2'>
          <div class='note'>{{ t('slide_02.slide_2.note') }}</div>
        </div>
        <div class='slide slide_3'>
          <div class='note'>{{ t('slide_02.slide_3.note') }}</div>
        </div>
      </div>
      <div ref='swiper_pagination' class='swiper-pagination' data-slide='1'/>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';
import Swiper from 'swiper';

export default {
  name: 'Slide2',
  mounted() {
    // const innerNode = node.querySelector('.inner');
    const swiperNode = this.$refs.swiper;
    debugger
    // const paginationNode = this.$refs.swiper_pagination;

    // const swiper =
    new Swiper(swiperNode, {
      // wrapperClass: 'slides',
      // slideClass: 'slide',
      // grabCursor: false,
      // allowTouchMove: true,
      // slidesPerView: 1,
      // spaceBetween: 0,
      // navigation: {
      //   nextEl: '.b-slider-next',
      //   prevEl: '.b-slider-prev'
      // },
      // pagination: {
      //   el: '.b-slider-pagination',
      //   modifierClass: 'slider-pagination-',
      //   bulletClass: 'slider-pagination-bullet',
      //   bulletActiveClass: 'slider-pagination-bullet-active',
      //   clickable: true
      // },
      // loop: true,
      // on: {
      //   slideChange() {
      //     const INDEX_ATTRIBUTE = 'data-swiper-slide-index';
      //     const index = swiper ?
      //       parseInt(
      //         swiper.slides[swiper.activeIndex].getAttribute(INDEX_ATTRIBUTE)
      //       ) :
      //       0;
      //
      //     const n1Index = parseInt(index) + 1;
      //     innerNode.setAttribute('data-slide', n1Index);
      //     paginationNode.setAttribute('data-slide', n1Index);
      //   }
      // }
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
    padding-top: rem(72px)

  +gte_laptop
    padding-top: 96px

  &:before
    +gte_laptop
      background-image: url(../assets/slide_02/circles_left-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      z-index: -1
      position: absolute
      transform: translateX(-100%)

    +laptop_hd
      height: scale-between(232px, 346px, 1024px, 1920px)
      left: 144px
      top: 191px
      width: scale-between(198px, 296px, 1024px, 1920px)

    +hd
      left: scale-between(144px, 0px, 1440px, 1920px)
      top: scale-between(191px, 161px, 1440px, 1920px)

    +uhd
      height: 346px
      left: 0
      top: 161px
      width: 296px

  &:after
    +gte_laptop
      background-image: url(../assets/slide_02/circles_right-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      z-index: -1
      position: absolute

    +laptop_hd
      height: scale-between(77px, 109px, 1024px, 1920px)
      right: -7px
      top: 125px
      width: scale-between(102px, 144px, 1024px, 1920px)

    +hd
      right: scale-between(-7px, -187px, 1440px, 1920px)
      top: scale-between(125px, 178px, 1440px, 1920px)

    +uhd
      height: 109px
      right: -187px
      top: 178px
      width: 144px

.header
  h2
    +lte_ipad
      margin-bottom: rem(24px)

    +gte_laptop
      margin: 0 auto 35px
      max-width: 610px
      text-align: center

  .note
    font-weight: 300
    letter-spacing: -0.01em
    text-align: center

    +lte_ipad
      font-size: rem(14px)
      line-height: rem(20px)
      margin-bottom: rem(37px)

    +gte_laptop
      font-size: 16px
      line-height: 23px
      margin: 0 auto 72px
      max-width: 640px

    span
      color: #f2642b
      font-weight: bold

ul.blocks
  +lte_ipad
    margin-bottom: rem(72px)

  +gte_laptop
    +fcolumn(3, 30px, 0, 'li')
    margin-bottom: 72px

  li
    background: #eef5ff
    border-radius: rem(12px)
    padding: rem(20px)

    +lte_ipad
      font-size: rem(44px)
      height: rem(180px)

      &:not(:last-child)
        margin-bottom: 12px

    +laptop
      height: scale-laptop(247px, 260px)

    +gte_desktop
      height: 260px

    &:nth-child(2),
    &:nth-child(3)
      position: relative
      overflow: hidden

      &:before
        background-position: bottom
        background-repeat: no-repeat
        background-size: contain
        bottom: 0
        content: ''
        height: 100%
        left: 0
        pointer-events: none
        position: absolute
        width: 100%

    &:nth-child(2):before
      background-image: url(../assets/slide_02/block_2_background.svg)

    &:nth-child(3):before
      background-image: url(../assets/slide_02/block_3_background.svg)

    .headline
      color: #5096ff
      font-weight: bold
      line-height: 1.2

      +lte_ipad
        font-size: rem(44px)
        margin-bottom: rem(12px)

      +gte_laptop
        font-size: 72px
        margin-bottom: 8px

    .note
      color: #5f5f5f
      font-size: rem(14px)
      line-height: 1.4

.slider-pagination
  display: flex

  +lte_ipad
    justify-content: center

  .slider-pagination-bullet
    -webkit-tap-highlight-color: transparent
    -webkit-appearance: none
    background: $secondary
    border-radius: 12px
    cursor: pointer
    flex-shrink: 0
    height: 12px
    transition: background 0.25s
    width: 12px

    &-active
      background: $primary

    &:not(:last-child)
      margin-right: 11px

    +gte_laptop
      &:hover
        background: $primary-hover

    &:active
      background: $primary-active
</style>
