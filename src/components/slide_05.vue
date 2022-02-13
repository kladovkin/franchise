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
          <svg
            slot='handle'
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z' fill='#F44F0C' stroke='white' stroke-width='2'/>
            <path d='M30 43.2099V39.12C30 38.8385 29.8854 38.5776 29.6994 38.4371L22.1032 32.6831C21.7027 32.3793 21.7027 31.6204 22.1032 31.3166L29.6994 25.5626C29.8854 25.4216 30 25.1612 30 24.8797V20.7899C30 20.1828 29.499 19.8031 29.0984 20.1069L14.3005 31.3166C13.8998 31.6204 13.8998 32.3793 14.3005 32.6831L29.0984 43.8933C29.499 44.1966 30 43.8174 30 43.2099Z' fill='white'/>
            <path d='M34 20.7901L34 24.88C34 25.1615 34.1146 25.4224 34.3006 25.5629L41.8968 31.3169C42.2973 31.6207 42.2973 32.3796 41.8968 32.6834L34.3006 38.4374C34.1146 38.5784 34 38.8388 34 39.1203L34 43.2101C34 43.8172 34.501 44.1969 34.9016 43.8931L49.6995 32.6834C50.1002 32.3796 50.1002 31.6207 49.6995 31.3169L34.9016 20.1067C34.501 19.8034 34 20.1826 34 20.7901Z' fill='white'/>
          </svg>
          <!-- eslint-enable -->
        </ImgComparisonSlider>
        <ul>
          <li
            v-for='block in 6'
            :key='block'
            class='item'
          >
            <div class='headline'>{{ t(`slide_05.block_${block}.headline`) }}</div>
            <div class='note'>{{ t(`slide_05.block_${block}.note`) }}</div>
          </li>
          <li class='summary'>
            <div class='headline'>
              <b>{{ t('slide_05.block_summary.headline.number') }}</b>
              {{ t('slide_05.block_summary.headline.text') }}
            </div>
            <div class='note'>{{ t('slide_05.block_summary.note') }}</div>
          </li>
        </ul>
      </div>
      <div class='container'>
        <Button
          type='red'
          styling='conversion'
          :text='t("slide_05.button")'
          @click='lead'
        />
      </div>
    </article>
  </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

import Button from '@/components/button';

import SweetScroll from '@/utils/sweet_scroll';
import t from '@/utils/locale';

export default {
  name: 'Slide05',
  components: {
    Button,
    ImgComparisonSlider
  },
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
.background-cutter
  +slide_offset_default

article
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
      top: 106px
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
    color: #282828
    font-size: rem(14px)
    font-weight: 300
    letter-spacing: -0.01em
    line-height: rem(20px)
    margin-bottom: rem(24px)
    text-align: center

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
    margin-bottom: rem(32px)

  +laptop
    margin-bottom: scale-laptop(56px, 72px)

  +gte_desktop
    margin-bottom: 72px

  img-comparison-slider
    flex-shrink: 0
    border-radius: 21px
    --divider-width: 2px
    --divider-color: #fff

    +lte_ipad
      height: rem(240px)
      margin: 32px auto 0
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

  ul
    display: flex
    flex-wrap: wrap

    +lte_ipad
      font-size: 20px
      line-height: 36px
      row-gap: rem(16px)

    +gte_laptop
      font-size: 32px
      line-height: 36px
      row-gap: 32px

    li
      &.item
        flex-basis: 50%

        .headline
          color: #333333
          font-weight: bold

          +lte_ipad
            font-size: 20px
            line-height: 36px

          +gte_laptop
            font-size: 32px
            line-height: 36px

        .note
          font-weight: 300
          color: #5f5f5f

          +lte_ipad
            font-size: rem(12px)
            line-height: rem(16px)

          +gte_laptop
            font-size: 14px
            line-height: 20px

      &.summary
        background: rgba(#5096ff, 0.1)
        border-radius: 12px
        flex-basis: 100%

        +lte_ipad
          padding: rem(12px) 0 rem(16px)
          text-align: center
          margin-top: rem(16px)

        +gte_laptop
          padding: 16px 32px
          display: flex
          height: 81px
          margin-top: auto

        .headline
          color: #5096ff
          font-weight: bold
          white-space: nowrap

          +lte_ipad
            font-size: 14px
            line-height: 36px
            margin-bottom: 8px

          +gte_laptop
            margin-right: rem(24px)
            font-size: 16px
            line-height: 48px

          b
            +lte_ipad
              margin-right: rem(2px)
              font-size: rem(24px)

            +gte_laptop
              font-size: 44px
              margin-right: 5px

        .note
          color: #000

          +lte_ipad
            font-size: rem(12px)
            line-height: rem(16px)
            max-width: rem(186px)
            margin: 0 auto

          +gte_laptop
            font-size: 16px
            line-height: 24px

.container
  display: flex
  justify-content: center
  padding: 0
</style>
