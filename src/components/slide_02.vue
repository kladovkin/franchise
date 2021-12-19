<template>
  <article id='slide_02'>
    <h2>
      <span>{{ t('slide_02.h2.red') }}</span> {{ t('slide_02.h2.other') }}
    </h2>
    <div class='note'>
      <span>{{ t('slide_02.note.red') }}</span> {{ t('slide_02.note.other') }}
    </div>
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
</style>
