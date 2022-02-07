<template>
  <div id='slide_7' class='background-cutter'>
    <article>
      <h2 v-html='t("slide_07.h2")' />
      <div
        v-for='(column, columnIndex) in columns'
        :key='columnIndex'
        :class='`column column-${columnIndex}`'
      >
        <div class='headline'>{{ column.headline }}</div>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide6',
  data: () => ({
    columns: t('slide_07.columns')
  }),
  methods: { t }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(120px, 180px)

    &:before
      top: scale-laptop(177px, 237px)

  +gte_desktop
    padding-top: 180px

    &:before
      top: 237px

  +gte_laptop
    &:before
      background-image: url(../assets/slide_07/circles_background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 774px
      left: -111px
      pointer-events: none
      position: absolute
      width: 1405px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(32px)

  +gte_laptop
    margin-bottom: 72px

.column
  .headline
    color: #333

    +lte_ipad
      font-size: rem(16px)
      line-height: rem(20px)
      margin-bottom: rem(24px)

    +gte_laptop
      font-size: 20px
      line-height: 24px
      margin-bottom: 32px
</style>
