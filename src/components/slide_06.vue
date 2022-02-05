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
        <div class='mobile-label'>{{ t('slide_06.mobile_label') }}</div>
        <div
          v-for='(block, blockIndex) in blocks'
          :key='blockIndex'
          :class='`block block-${blockIndex}`'
        >
          <div
            class='mobile-container'
            :class='{ "is-active": blockIsExpanded[blockIndex] }'
            @click='toggleBlock(blockIndex)'
          >
            <div class='icon' />
            <div class='headline'>{{ block.headline }}</div>
          </div>
          <TransitionHeight :duration='350'>
            <div v-show='blockIsExpanded[blockIndex]' class='texts'>
              <div
                v-for='(text, textIndex) in block.texts'
                :key='textIndex'
                class='text'
              >
                {{ text }}
              </div>
            </div>
          </TransitionHeight>
        </div>
      </div>
    </div>
    <div class='comparison'>
      <div class='headline' v-html='t("slide_06.comparison.headline")' />
      <div
        v-for='(block, index) in comparison'
        :key='index'
        :class='`block block-${index}`'
      >
        <div class='label'>{{ block.label }}</div>
        <div class='icon' />
        <div class='value'>{{ block.value }}</div>
      </div>
    </div>
  </article>
</template>

<script>
import { createPopper } from '@popperjs/core';

import TransitionHeight from '@/components/transition_height';

import isMobile from '@/utils/is_mobile';
import t from '@/utils/locale';

export default {
  name: 'Slide5',
  components: { TransitionHeight },
  data() {
    const blocks = t('slide_06.blocks');

    return {
      blocks,
      blockIsExpanded: blocks.map(_ => !isMobile()),
      comparison: t('slide_06.comparison.blocks')
    };
  },
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
    t,
    toggleBlock(blockIndex) {
      this.blockIsExpanded[blockIndex] = !this.blockIsExpanded[blockIndex];
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
  +lte_ipad
    margin-bottom: rem(56px)

  +gte_laptop
    display: flex
    position: relative
    margin-bottom: 120px

  .revenue
    display: flex
    flex-shrink: 0

    +lte_ipad
      flex-direction: column
      margin-bottom: rem(33px)

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
    +gte_laptop
      display: flex
      flex-direction: column
      margin-left: 132px

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

    .mobile-label
      +lte_ipad
        color: #333
        font-size: rem(14px)
        line-height: rem(23px)
        margin-bottom: rem(24px)

      +gte_laptop
        display: none

    .block
      +lte_ipad
        &:not(:last-child)
          margin-bottom: rem(17px)

      +gte_laptop
        position: relative
        padding-left: 100px

      @each $index in 0,1,2
        &-#{$index} .icon
          background-image: url(../assets/slide_06/block_#{$index}_icon.svg)
          background-repeat: no-repeat
          background-size: contain
          content: ''

          +lte_ipad
            display: block
            height: rem(32px)
            margin-right: rem(19px)
            width: rem(32px)

          +gte_laptop
            height: 65px
            left: 1px
            position: absolute
            width: 65px

      &-0
        +gte_laptop
          margin-top: 35px
          margin-bottom: 20px

      &-1
        +gte_desktop
          margin-top: auto

      &-2
        +gte_laptop
          margin-top: auto
          margin-bottom: 30px

          .icon
            bottom: 0

      .mobile-container
        +lte_ipad
          align-items: center
          cursor: pointer
          display: flex

          &.is-active:after
            transform: rotate(180deg)

          &:after
            background-image: url(../assets/slide_06/trigger-mobile.svg)
            background-repeat: no-repeat
            background-size: contain
            content: ''
            height: rem(13px)
            transition: transform 0.25s
            margin-left: auto
            width: rem(13px)

      .texts
        +lte_ipad
          padding-left: rem(58px)
          overflow: hidden
          transition: 250ms ease-out
          position: relative

          .text:first-child
            padding-top: rem(14px)

      .headline
        color: #333
        font-weight: bold

        +lte_ipad
          font-size: rem(14px)
          line-height: rem(23px)

        +gte_laptop
          font-size: 18px
          line-height: 23px
          margin-bottom: 16px

          &:after
            content: ':'

      .text
        color: #4b4b4b
        padding-left: rem(8px)

        +lte_ipad
          font-size: rem(12px)
          line-height: rem(16px)

        +gte_laptop
          font-size: 16px
          font-weight: 300
          line-height: 20px

        +laptop
          max-width: 240px

        +gte_desktop
          max-width: 337px

        &:not(:last-child)
          margin-bottom: 8px

        &:before
          background-image: url(../assets/slide_06/li_text.svg)
          background-repeat: no-repeat
          background-size: contain
          content: ''
          height: rem(6px)
          margin-left: rem(-14px)
          position: absolute
          width: rem(6px)

          +lte_ipad
            margin-top: rem(6px)

          +gte_laptop
            margin-top: 9px

.popper
  background: #474747
  border-radius: 10px
  color: #fff
  font-size: 14px
  font-weight: normal
  line-height: 18px
  padding: 12px 16px
  width: 253px
  z-index: 1

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

.comparison
  background: rgba(#5096ff, 0.1)
  border-radius: rem(12px)

  +lte_ipad
    padding: rem(24px) rem(16px) rem(23px)

  +gte_laptop
    align-items: center
    display: flex
    justify-content: space-between
    padding: 22px 55px 32px

  +laptop
    padding-right: scale-laptop(55px, 136px)

  +gte_desktop
    padding-right: 136px

  .headline
    color: #333
    font-weight: bold

    +lte_ipad
      font-size: rem(16px)
      line-height: rem(20px)
      margin-bottom: rem(26px)

    +gte_laptop
      font-size: 24px
      line-height: 28px
      max-width: 210px

  .block
    +lte_ipad
      position: relative

    &:not(:last-child)
      +lte_ipad
        margin-bottom: rem(26px)

    @each $index in 0,1,2
      &-#{$index} .icon
        background-image: url(../assets/slide_06/comparison_#{$index}.png)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        width: rem(100px)
        height: rem(52px)

        +lte_ipad
          position: absolute
          top: rem(2px)
          right: 0

    .label
      color: #000
      font-weight: 300

      +lte_ipad
        font-size: rem(16px)
        line-height: rem(20px)
        margin-bottom: rem(8px)

      +gte_laptop
        font-size: 16px
        line-height: 30px
        margin-bottom: 4px

    .icon
      +gte_laptop
        margin-bottom: 27px

    .value
      color: #f44f0c
      font-weight: 900

      +lte_ipad
        font-size: rem(20px)
        line-height: rem(24px)

      +gte_laptop
        font-size: 30px
        line-height: 30px
</style>
