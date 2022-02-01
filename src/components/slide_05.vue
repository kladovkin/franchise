<template>
  <div id='slide_05' class='background-cutter'>
    <article>
      <h2>
        <span>{{ t('slide_05.h2.red') }}</span> {{ t('slide_05.h2.other') }}
      </h2>
      <div class='h2-note'>{{ t('slide_05.h2_note') }}</div>
      <div class='group-container'>
        <ImgComparisonSlider>
          <!-- eslint-disable -->
          <img
            slot='first'
            style='max-width: 100%'
            src='../assets/slide_05/compare-left.svg'
          >
          <img
            slot='second'
            style='max-width: 100%'
            src='../assets/slide_05/compare-right.svg'
          >
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
    </article>
  </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import t from '@/utils/locale';

export default {
  name: 'Slide5',
  components: { ImgComparisonSlider },
  methods: { t }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(120px, 278px)

  +gte_desktop
    padding-top: 278px

  +gte_laptop
    &:before
      background-image: url(../assets/slide_05/circles_background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 620px
      left: 0px
      pointer-events: none
      position: absolute
      top: 0px
      width: 1483px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(16px)

  +gte_laptop
    margin-bottom: 32px

  span
    display: block

.h2-note
  text-align: center

  +lte_ipad
    margin-bottom: rem(24px)

  +gte_laptop
    color: #6c6c6c
    font-size: 16px
    line-height: 20px
    text-align: center
    max-width: 558px
    margin: 0 auto 72px

.group-container
  display: flex

  +lte_ipad
    flex-direction: column-reverse

  img-comparison-slider
    --divider-width: 2px
    --divider-color: #fff

    +lte_ipad
      height: rem(240px)
      margin-top: 32px
      width: rem(287px)

    +laptop
      height: scale-laptop(326px, 370px)
      margin-right: scale-laptop(104px, 126px)
      width: scale-laptop(391px, 444px)

    +gte_desktop
      height: 370px
      margin-right: 126px
      width: 444px

    &:focus
      outline: none
</style>
