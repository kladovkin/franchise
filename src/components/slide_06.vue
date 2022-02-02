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
              {{ t('slide_06.commission.headline') }} <span class='commission-note-icon' />
            </div>
            <div class='note'>{{ t('slide_06.commission.note') }}</div>
          </div>
        </div>
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

    +lte_ipad
      flex-direction: column

    &:before
      background-repeat: no-repeat
      background-size: contain
      content: ''
      display: block
      pointer-events: none

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
      overflow: hidden
      display: flex

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
      .headline
        font-weight: 900

        +lte_ipad
          font-size: rem(16px)
          line-height: rem(20px)
          margin-bottom: rem(4px)

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
          max-width: 250px

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
          margin-top: 292px

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
        width: 24px
        position: absolute
        margin: 1px 0 0 9px
</style>
