<template>
  <article
    id='slide_06'
  >
    <h2>
      {{ t('slide_06.h2.other') }} <span>{{ t('slide_06.h2.red') }}</span>
    </h2>
    <div class='group-container'>
      <div class='revenue'>
        <div class='graph'>
          <div class='income' data-value='85%' />
          <div class='commission' data-value='15%' />
        </div>
        <div class='texts'>
          <div class='income'>
            <div class='headline'>{{ t('slide_06.income.headline') }}</div>
            <div class='note'>{{ t('slide_06.income.note') }}</div>
          </div>
          <div class='commission'>
            <div class='headline'>
              {{ t('slide_06.commission.headline') }}
              <span ref='commission_note_icon' class='commission-note-icon' />
              <div ref='commission_note_tooltip' class='popper'>
                <div ref='commission_note_tooltip_popper_arrow' class='arrow' />
                {{ t('slide_06.commission.note') }}
              </div>
            </div>
            <div class='note'>{{ t('slide_06.commission.note') }}</div>
          </div>
        </div>
      </div>
      <div class='details'>
        <ul
          v-for='(block, blockIndex) in blocks'
          :key='block'
          :class='`block block-${blockIndex}`'
        >
          <li class='headline'>{{ block.headline }}</li>
          <li
            v-for='(text, textIndex) in block.texts'
            :key='textIndex'
            class='text'
          >
            {{ text }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import t from '@/utils/locale';
import { createPopper } from '@popperjs/core';

export default {
  name: 'Slide5',
  data: () => ({
    blocks: t('slide_06.blocks')
  }),
  mounted() {
    createPopper(this.$refs.commission_note_icon, this.$refs.commission_note_tooltip, {
      placement: 'right',
      modifiers: [{
        name: 'arrow',
        options: { element: this.$refs.commission_note_tooltip_popper_arrow }
      }, {
        name: 'offset',
        options: {
          offset: [0, 14]
        }
      }]
    });
  },
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
    position: relative

  .revenue
    display: flex
    flex-shrink: 0

    +lte_ipad
      flex-direction: column

    +gte_laptop
      width: 492px

    &:before
      background-repeat: no-repeat
      background-size: contain
      content: ''
      display: block
      pointer-events: none
      flex-shrink: 0

      +lte_ipad
        background-image: url(../assets/slide_06/line_top-mobile.svg)
        height: rem(18px)
        margin-bottom: rem(9px)
        width: rem(288px)

      +gte_laptop
        background-image: url(../assets/slide_06/line_left-desktop.svg)
        height: 807px
        margin-right: 26px
        width: 53px

    .graph
      display: flex
      flex-shrink: 0
      overflow: hidden

      +lte_ipad
        border-radius: rem(10px)
        height: rem(72px)
        margin-bottom: rem(24px)

      +gte_laptop
        border-radius: 20px
        flex-direction: column
        margin-right: 29px
        width: 129px

      .income,
      .commission
        align-items: center
        display: flex
        justify-content: center

        &:before
          content: attr(data-value)
          color: #fff
          font-weight: 900

          +lte_ipad
            font-size: rem(24px)
            line-height: rem(20px)

          +gte_laptop
            font-size: 40px
            line-height: 50px

      .income
        background: #5096ff
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2)

        +lte_ipad
          width: rem(233px)

        +gte_laptop
          height: 645px

      .commission
        background: #f44f0c
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2)
        flex-grow: 1

        &:before
          +lte_ipad
            font-size: rem(16px)
    .texts
      +gte_laptop
        display: flex
        flex-direction: column

      .headline
        font-weight: 900

        +lte_ipad
          font-size: rem(16px)
          line-height: rem(20px)


        +gte_laptop
          color: #333
          font-size: 32px
          line-height: 50px

      .note
        color: #5f5f5f

        +lte_ipad
          font-size: rem(12px)
          line-height: rem(16px)

        +gte_laptop
          font-size: 16px
          line-height: 20px

      .income
        +lte_ipad
          margin-bottom: rem(24px)

        +gte_laptop
          margin-top: 302px

        .headline
          +lte_ipad
            color: #5096ff

      .commission
        +gte_laptop
          margin-top: auto
          margin-bottom: 53px

        .headline
          +lte_ipad
            color: #f44f0c

        .note
          +gte_laptop
            display: none

    .commission-note-icon
      +gte_laptop
        background-image: url(../assets/slide_06/commission_note_icon-desktop.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 24px
        margin: 1px 0 0 9px
        position: absolute
        width: 24px

    .popper
      +lte_ipad
        display: none

      +gte_laptop
        visibility: hidden

        .arrow:before
          visibility: hidden

    .commission-note-icon:hover + .popper
      visibility: visible

      .arrow:before
        visibility: visible

  .details
    display: flex
    flex-direction: column

    &:before
      background-image: url(../assets/slide_06/line_right-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      bottom: 46px
      content: ''
      height: 686px
      left: 429px
      pointer-events: none
      position: absolute
      width: 182px

    .block
      position: relative

      @each $index in 0,1,2
        &-#{$index}:before
          background-image: url(../assets/slide_06/block_#{$index}_icon.svg)
          background-repeat: no-repeat
          background-size: contain
          content: ''
          display: block
          height: 65px
          left: 1px
          pointer-events: none
          position: absolute
          width: 65px

      &-0
        margin-top: 30px

      &-1
        margin-top: 75px

      &-2
        margin-top: auto
        margin-bottom: -17px // + 26px

        &:before
          bottom: 0

      .headline
        color: #333
        font-size: 18px
        font-weight: bold
        line-height: 23px
        margin-bottom: 16px

      .text
        color: #4b4b4b
        font-size: 16px
        font-weight: 300
        line-height: 20px
        margin-bottom: 8px
        padding-left: 8px

        &:before
          background-image: url(../assets/slide_06/li_text.svg)
          background-repeat: no-repeat
          background-size: contain
          content: ''
          height: 6px
          width: 6px
          position: absolute
          margin-top: 9px
          margin-left: -14px

.popper
  background: #474747
  border-radius: 10px
  color: #fff
  font-size: 14px
  font-weight: normal
  line-height: 18px
  padding: 12px 16px
  width: 253px

  .arrow,
  .arrow:before
    position: absolute
    width: 16px
    height: 16px
    background: inherit

  .arrow
    visibility: hidden

  .arrow:before
    visibility: visible
    content: ''
    transform: rotate(45deg)

  &[data-popper-placement^='top'] > .arrow
    bottom: -8px

  &[data-popper-placement^='bottom'] > .arrow
    top: -8px

  &[data-popper-placement^='left'] > .arrow
    right: -8px

  &[data-popper-placement^='right'] > .arrow
    left: -8px
</style>
