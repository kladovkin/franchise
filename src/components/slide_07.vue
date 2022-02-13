<template>
  <div id='slide_7' class='background-cutter'>
    <article>
      <h2 v-html='t("slide_07.h2")' />
      <div class='columns'>
        <div
          v-for='(column, columnIndex) in columns'
          :key='columnIndex'
          :class='`column column-${columnIndex}`'
        >
          <div class='headline'>{{ column.headline }}</div>
          <ul>
            <li
              v-for='(line, lineIndex) in column.lines'
              :key='lineIndex'
              :class='`line line-${columnIndex}-${lineIndex}`'
            >
              {{ line }}
            </li>
          </ul>
        </div>
      </div>
      <div class='container'>
        <Button
          type='red'
          styling='conversion'
          :text='t("slide_07.button")'
          @click='lead'
        />
      </div>
    </article>
  </div>
</template>

<script>
import Button from '@/components/button';

import SweetScroll from '@/utils/sweet_scroll';
import t from '@/utils/locale';

export default {
  name: 'Slide06',
  components: {
    Button
  },
  data: () => ({
    columns: t('slide_07.columns')
  }),
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
    padding-bottom: 70px // padding added in order to fit left bottom blue circle

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

.columns
  +gte_laptop
    +fcolumn(2, 29px, 0, '.column')
    display: flex
    margin-bottom: 56px

.column
  +lte_ipad
    margin-bottom: rem(32px)

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

.line
  align-items: center
  color: #5f5f5f
  display: flex
  font-size: rem(16px)
  height: rem(52px)
  line-height: 1.3

  &:not(:last-child)
    margin-bottom: rem(24px)

  @each $columnIndex in 0,1
    @each $lineIndex in 0,1,2,3,4,5
      &-#{$columnIndex}-#{$lineIndex}:before
        background-image: url(../assets/slide_07/line_#{$columnIndex}_#{$lineIndex}_icon.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        flex-shrink: 0
        height: rem(52px)
        width: rem(52px)

        +lte_ipad
          margin-right: rem(24px)

        +gte_laptop
          margin-right: rem(43px)

.container
  display: flex
  justify-content: center
  padding: 0
</style>
