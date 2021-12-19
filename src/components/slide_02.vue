<template>
  <article id='slide_02'>
    <h2>
      <span>{{ t('slide_02.h2.red') }}</span> {{ t('slide_02.h2.other') }}
    </h2>
    <div class='note'>
      <span>{{ t('slide_02.note.red') }}</span> {{ t('slide_02.note.other') }}
    </div>
    <ul class='blocks'>
      <li>
        <div class='headline'>{{ t('slide_02.block_1.headline') }}</div>
        <div class='text'>{{ t('slide_02.block_1.text') }}</div>
      </li>
      <li>
        <div class='headline'>{{ t('slide_02.block_2.headline') }}</div>
        <div class='text'>{{ t('slide_02.block_2.text') }}</div>
      </li>
      <li>
        <div class='headline'>{{ t('slide_02.block_3.headline') }}</div>
        <div class='text'>{{ t('slide_02.block_3.text') }}</div>
      </li>
    </ul>
  </article>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide2',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)
    /* padding-bottom: rem(80px) */

  +gte_laptop
    padding-top: 96px
    /* height: 983px */

  /* &:before                                                             */
  /*   +laptop                                                            */
  /*     // 82.5%                                                         */
  /*     width: scale-laptop(550px, 645px)                                */
  /*     height: scale-laptop(550px, 645px)                               */

  /*   +gte_laptop                                                        */
  /*     background-image: url(../assets/slide_02/background-desktop.svg) */
  /*     background-repeat: no-repeat                                     */
  /*     background-size: contain                                         */
  /*     content: ''                                                      */
  /*     position: absolute                                               */
  /*     z-index: -1                                                      */
  /*     top: 214px                                                       */
  /*     left: -287px                                                     */

  /*   +gte_desktop                                                       */
  /*     width: 645px                                                     */
  /*     height: 645px                                                    */

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

    .text
      color: #5f5f5f
      font-size: rem(14px)
      line-height: 1.4
</style>
