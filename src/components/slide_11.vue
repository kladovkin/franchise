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
            class='faq-item'
            @click='toggleFaq(faqChunkIndex, faqIndex)'
          >
            <div class='question'>
              <span>{{ faq.q }}</span>
              <div
                class='trigger'
                :class='{ "is-expanded": isFaqExpanded[faqChunkIndex][faqIndex] }'
              />
            </div>
            <TransitionHeight :duration='350'>
              <div
                v-show='isFaqExpanded[faqChunkIndex][faqIndex]'
                class='answer'
              >
                <p>{{ faq.a }}</p>
              </div>
            </TransitionHeight>
          </div>
        </div>
      </div>
      <div class='container'>
        <a :href='faqUrl'>
          <Button
            type='red'
            :text='t("slide_11.button")'
          />
        </a>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';
import chunk from 'lodash/chunk';
import TransitionHeight from '@/components/transition_height';
import Button from '@/components/button';

export default {
  name: 'Slide11',
  components: { TransitionHeight, Button },
  data() {
    const faqs = t('slide_11.faqs');
    const faqChunks = chunk(faqs, Math.ceil(faqs.length / 2));

    return {
      faqChunks,
      faqUrl: 'https://kladovkin.ru/faq/',
      isFaqExpanded: faqChunks.map(chunk => chunk.map(_ => false))
    };
  },
  methods: {
    t,
    toggleFaq(faqChunkIndex, faqIndex) {
      this.isFaqExpanded[faqChunkIndex][faqIndex] =
        !this.isFaqExpanded[faqChunkIndex][faqIndex];
    }
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  // added in order to avoid cutting <article> background circles
  padding-bottom: 100px
  margin-bottom: -100px

article
  +slide_offset_default

  +gte_laptop
    &:before
      background-image: url(../assets/slide_11/circles_background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 671px
      pointer-events: none
      position: absolute
      width: 984px

  +laptop
    &:before
      top: scale-laptop(100px, 160px)
      left: scale-laptop(27px, 102px)

  +gte_desktop
    &:before
      top: 160px
      left: 102px

h2
  text-align: center
  margin-bottom: rem(58px)

$circle-size: 457px
$circle-offset: 24px
$box-shadow-mobile: 26px
$box-shadow-desktop: 15px
.items-container
  position: relative

  +lte_ipad
    padding-bottom: rem($box-shadow-mobile) // compensates box-shadow
    min-height: rem($circle-size + $box-shadow-mobile - $circle-offset)
    margin-bottom: rem(32px - $box-shadow-mobile)

  +gte_laptop
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 30px
    padding-bottom: $box-shadow-desktop // compensates box-shadow
    min-height: $circle-size + $box-shadow-desktop - $circle-offset
    margin-bottom: 42px - $box-shadow-desktop

  &:before
    background: #5096ff
    border-radius: $circle-size
    content: ''
    height: $circle-size
    left: 50%
    pointer-events: none
    position: absolute
    top: rem(-$circle-offset)
    transform: translateX(-50%)
    width: $circle-size
    z-index: -1

  .items-column
    &:not(last-child)
      +lte_ipad
        margin-bottom: rem(12px)

  .faq-item
    background: #ffffff
    border-radius: rem(12px)
    cursor: pointer
    user-select: none

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
        flex-shrink: 0
        height: rem(20px)
        position: relative
        width: rem(20px)

        +lte_ipad
          margin-left: 40px

        +laptop
          margin-left: scale-laptop(41px, 47px)

        +gte_desktop
          margin-left: 47px

        &:before,
        &:after
          background: #5f5f5f
          bottom: 0
          content: ''
          display: block
          left: 0
          margin: auto
          position: absolute
          right: 0
          top: 0
          transition: .3s ease

        &:before
          width: rem(1px)
          height: rem(20px)

        &:after
          width: rem(20px)
          height: rem(1px)

        &.is-expanded
          &:before
            transform: rotate(90deg)

          &:after
            transform: rotate(180deg)
            opacity: 0

    .answer
      overflow: hidden
      position: relative
      transition: 250ms ease-out

      p
        font-size: rem(15px)
        font-weight: 300
        line-height: 1.3

        +lte_ipad
          padding-top: rem(9px)

        +gte_laptop
          padding-top: 12px

.container
  display: flex
  justify-content: center
  padding: 0

  a
    display: flex
    text-decoration: none
    width: rem(212px)

    button
      height: rem(40px)
      font-size: rem(12px)
</style>
