<template>
  <article id='slide_08'>
    <div class='cases'>
      <div class='content-container'>
        <h2>{{ t('slide_08.h2') }}</h2>
        <div class='text'>
          <div v-html='t("slide_08.list_1")' />
          <div v-html='t("slide_08.list_2")' />
          <div v-html='t("slide_08.list_3")' />
          <div v-html='t("slide_08.list_4")' />
          <div v-html='t("slide_08.list_5")' />
          <div v-html='t("slide_08.list_6")' />
          <div v-html='t("slide_08.list_7")' />
          <div v-html='t("slide_08.list_8")' />
          <div><b>IRR:</b> 105%</div>
        </div>
        <div class='dots' />
      </div>
      <div class='outer-container'>
        <div class='inner'>
          <ComparisonSlider />
        </div>
        <div class='dots' />
      </div>
    </div>
  </article>
</template>

<script>
// convert -quality 100% -resize 635x418! ~/Downloads/IMG_0284.jpeg src/assets/slide_08/slide_after.jpg && convert -quality 100% -resize 635x418! ~/Downloads/0022_.jpg src/assets/slide_08/slide_before.jpg && tinypng src/assets/slide_08/slide_after.jpg && tinypng src/assets/slide_08/slide_before.jpg

import ComparisonSlider from '@/components/comparison_slider';
import t from '@/utils/locale';

export default {
  name: 'Slide8',
  components: {
    ComparisonSlider
  },
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  overflow: hidden

  +gte_laptop
    margin-bottom: 70px
    padding-top: 67px

  &:before
    background-image: url(../assets/slide_08/circles.svg)
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    top: 0
    z-index: -1

    +lte_ipad
      height: rem(117px)
      right: rem(-36px)
      width: rem(170px)

    +gte_laptop
      height: 109px
      left: 50%
      transform: translateX(-50%)
      width: 144px

  .cases
    +gte_laptop
      align-items: center
      display: flex

  .content-container
    +lte_ipad
      padding-top: rem(52px)

    +gte_laptop
      flex-shrink: 0
      // padding-top: 162px

    .text
      color: #4b4b4b

      +lte_ipad
        font-size: rem(14px)
        line-height: rem(21px)
        margin-bottom: rem(23px)

      +gte_laptop
        font-size: 18px
        line-height: 30px
        max-width: 410px
        margin-right: 40px

      b
        font-weight: bold

    .dots
      // NOTE: remove when more cases are added
      &:empty
        display: none

      +lte_ipad
        display: none

      +gte_laptop
        margin-top: 45px

  .outer-container
    +lte_ipad
      display: flex
      justify-content: center
      margin-bottom: rem(40px)

    .inner
      align-items: center
      display: flex
      position: relative

      +iphone
        height: rem(288px)
        width: rem(288px)

      +ipad
        height: rem(350px)
        width: rem(350px)

      +gte_laptop
        margin-left: auto

      +laptop
        height: scale-laptop(514px, 635px)
        width: scale-laptop(514px, 635px)

      +gte_desktop
        height: 635px
        width: 635px

      &:before
        background-image: url(../assets/slide_08/circle_red.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 100%
        position: absolute
        width: 100%
        z-index: -1

    img
      max-width: 100%

    .dots
      +lte_ipad
        margin-top: rem(40px)

      +gte_laptop
        display: none

h2
  +lte_ipad
    margin-bottom: rem(50px)
    text-align: left

  +gte_laptop
    margin-bottom: 41px
</style>
