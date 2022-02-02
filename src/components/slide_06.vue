<template>
  <article
    id='slide_06'
  >
    <h2>
      {{ t('slide_06.h2.other') }} <span>{{ t('slide_06.h2.red') }}</span>
    </h2>
    <div class='group-container'>
      <div class='revenue'>
      </div>
      <div class='details'>
      </div>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide5',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(120px, 180px)

  +gte_desktop
    padding-top: 180px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(32px)

  +laptop
    margin-bottom: scale-laptop(50px, 97px)

  +gte_desktop
    margin-bottom: 97px

  span
    +gte_laptop
      display: block

.group-container
  +gte_laptop
    display: flex

  .revenue
    display: flex

    &:before
      background-repeat: no-repeat
      background-size: contain
      content: ''
      pointer-events: none
      display: block

      +lte_ipad
        background-image: url(../assets/slide_06/line_top-mobile.svg)
        width: rem(288px)
        height: rem(18px)

      +gte_laptop
        background-image: url(../assets/slide_06/line_left-desktop.svg)
        height: 807px
        width: 53px
</style>
