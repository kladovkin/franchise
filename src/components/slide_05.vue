<template>
  <div id='slide_05' class='background-cutter'>
    <article>
      <h2>
        <span>{{ t('slide_05.h2.red') }}</span> {{ t('slide_05.h2.other') }}
      </h2>
      <div class='h2-note'>{{ t('slide_05.h2_note') }}</div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide5',
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
      background-image: url(../assets/slide_03/circles_background-desktop.svg)
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

  span
    display: block

.h2-note
  +lte_ipad
    display: none

  +gte_laptop
    color: #6c6c6c
    font-size: 16px
    line-height: 20px
    margin-bottom: 56px
    text-align: center
</style>
