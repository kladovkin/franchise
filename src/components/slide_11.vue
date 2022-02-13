<template>
  <div id='slide_11' class='background-cutter'>
    <article>
      <h2>{{ t('slide_11.h2') }}</h2>
      <div class='items-container'>
        <div
          v-for='(faqChunk, faqChunkIndex) in faqChunks'
          :key='faqChunkIndex'
          class='items-column'
        >
          <div
            v-for='(faq, faqIndex) in faqChunk'
            :key='faqIndex'
            class='item'
          >
            <div class='question'>
              <span>{{ faq.q }}</span>
              <div class='trigger' />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';
import chunk from 'lodash/chunk';

export default {
  name: 'Slide11',
  data() {
    const faqs = t('slide_11.faqs');

    return {
      faqChunks: chunk(faqs, Math.ceil(faqs.length / 2)),
      faqUrl: 'https://kladovkin.ru/faq/'
    };
  },
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +slide_offset_default

  +gte_laptop
    &:before
      background-image: url(../assets/slide_11/circles_background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 671px
      left: 0
      pointer-events: none
      position: absolute
      top: 0
      width: 984px

h2
  text-align: center
  margin-bottom: rem(58px)

$blue-circle-size: 457px
$box-shadow-mobile: 26px
$box-shadow-desktop: 15px
.items-container
  position: relative

  +lte_ipad
    padding-bottom: rem($box-shadow-mobile) // compensates box-shadow
    min-height: rem($blue-circle-size + $box-shadow-mobile)

  +gte_laptop
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 30px
    padding-bottom: $box-shadow-desktop // compensates box-shadow
    min-height: rem($blue-circle-size + $box-shadow-desktop)

  &:before
    background: #5096ff
    border-radius: $blue-circle-size
    content: ''
    height: $blue-circle-size
    left: 50%
    pointer-events: none
    position: absolute
    top: -24px
    transform: translateX(-50%)
    width: $blue-circle-size
    z-index: -1

  .items-column
    &:not(last-child)
      +lte_ipad
        margin-bottom: rem(12px)

  .item
    background: #ffffff
    border-radius: rem(12px)

    +lte_ipad
      box-shadow: 0px 8px $box-shadow-mobile rgba(119, 128, 158, 0.25)
      padding: rem(12px) rem(16px)

    +gte_laptop
      box-shadow: 0px 5px $box-shadow-desktop rgba(0, 0, 0, 0.1)
      padding: 16px 28px 16px 24px

    &:not(:last-child)
      margin-bottom: rem(12px)

    .question
      align-items: center
      display: flex

      span
        color: #333333
        font-size: rem(16px)
        line-height: 1.2
        margin-right: auto

      .trigger
        background: red
        height: rem(20px)
        width: rem(20px)
        flex-shrink: 0

        +lte_ipad
          margin-left: 40px

        +laptop
          margin-left: scale-laptop(41px, 47px)

        +gte_desktop
          margin-left: 47px
</style>
