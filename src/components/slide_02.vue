<template>
  <article id='slide_02'>
    <h2>
      <span>{{ t('slide_02.h2.red') }}</span> {{ t('slide_02.h2.other') }}
    </h2>
    <div class='note'>
      {{ t('slide_02.note') }}
    </div>
    <div class='list-wrapper'>
      <ul>
        <li>{{ t('slide_02.list_1') }}</li>
        <li>{{ t('slide_02.list_2') }}</li>
        <li>{{ t('slide_02.list_3') }}</li>
        <li>{{ t('slide_02.list_4') }}</li>
      </ul>
    </div>

    <div class='graph'>
      <div class='column column-1'>
        <div class='percent'>4%</div>
        <div class='bar' />
        <div class='label'>{{ t('slide_02.graph.residential') }}</div>
      </div>
      <div class='column column-2'>
        <div class='percent'>8%</div>
        <div class='bar' />
        <div class='label'>{{ t('slide_02.graph.offices') }}</div>
      </div>
      <div class='column column-3'>
        <div class='percent'>11%</div>
        <div class='bar' />
        <div class='label' v-html='t("slide_02.graph.street_retail")' />
      </div>
      <div class='column column-4'>
        <div class='percent'>12%</div>
        <div class='bar' />
        <div class='label'>{{ t('slide_02.graph.warehouses') }}</div>
      </div>
      <div class='column column-5'>
        <img
          class='crown'
          loading='lazy'
          src='../assets/slide_02/crown.png'
        />
        <div class='percent'>18%</div>
        <div class='bar' />
        <div class='label'>Self&nbsp;Storage</div>
      </div>
    </div>

    <div class='finale'>
      <strong>{{ t('slide_02.finale.strong') }}</strong>
      {{ t('slide_02.finale.description') }}
    </div>

    <picture class='girl'>
      <source srcset='../assets/slide_02/girl.webp' type='image/webp'>
      <img loading='lazy' src='../assets/slide_02/girl.png' />
    </picture>
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
    padding-top: rem(25px)
    padding-bottom: rem(80px)

  +gte_laptop
    padding: 0
    height: 983px

  &:before
    +laptop
      // 82.5%
      width: scale-laptop(550px, 645px)
      height: scale-laptop(550px, 645px)

    +gte_laptop
      background-image: url(../assets/slide_02/background-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      position: absolute
      z-index: -1
      top: 214px
      left: -287px

    +gte_desktop
      width: 645px
      height: 645px

h2
  +lte_ipad
    margin-bottom: rem(24px)

  +gte_laptop
    margin: 0 auto 35px
    max-width: 610px
    /* padding-top: 118px  */
    text-align: center

.note
  /* color: #282828 */
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

.list-wrapper
  display: flex

  +iphone
    justify-content: center

  +ipad
    margin-left: rem(22px)

  +gte_laptop
    justify-content: center

ul
  color: #4b4b4b

  +ipad
    margin-top: rem(20px)

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(18px)

  +gte_laptop
    font-size: 16px
    line-height: 30px

  li
    display: flex
    align-items: center

    +lte_ipad
      margin-bottom: rem(8px)

    +gte_laptop
      margin-bottom: 21px

    &:before
      background-image: url(../assets/checkmark.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      flex-shrink: 0

      +lte_ipad
        height: rem(24px)
        margin-right: rem(27px)
        width: rem(24px)

      +gte_laptop
        height: 40px
        margin-right: 54px
        width: 40px

.graph
  display: flex

  +iphone
    justify-content: center
    margin-bottom: rem(28px)
    margin-top: rem(-22px)

  +ipad
    justify-content: flex-end
    margin-bottom: rem(48px)
    margin-top: rem(-95px)

  +lte_ipad

  +laptop
    margin-right: scale-laptop(32px, 45px)

  +desktop
    margin-right: scale-between(45px, 0px, 1200px, 1440px)

  +gte_laptop
    justify-content: flex-end
    margin-bottom: 55px
    margin-top: -228px

  .column
    align-items: center
    display: flex
    flex-direction: column
    justify-content: flex-end

    &:not(:last-child)
      +lte_ipad
        margin-right: rem(9px)

      +gte_laptop
        margin-right: 16px

    +lte_ipad
      width: rem(51px)

    +gte_laptop
      width: 95px

  .crown
    +lte_ipad
      margin-bottom: rem(10px)
      max-width: rem(46px)

    +gte_laptop
      margin-bottom: 21px

  .percent
    color: #5096ff
    font-weight: bold
    line-height: 1
    text-align: center

    +lte_ipad
      font-size: rem(10px)
      margin-bottom: rem(5px)

    +gte_laptop
      font-size: 20px
      margin-bottom: 7px

  .bar
    background: #5096ff
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2)
    width: 100%

    +lte_ipad
      border-radius: 10px 10px 0px 0px
      margin-bottom: rem(9px)

    +gte_laptop
      border-radius: 20px 20px 0px 0px
      margin-bottom: 21px

  .column-1 .bar
    +lte_ipad
      height: rem(23px)
    +gte_laptop
      height: 43px

  .column-2 .bar
    +lte_ipad
      height: rem(44px)
    +gte_laptop
      height: 82px

  .column-3 .bar
    +lte_ipad
      height: rem(70px)
    +gte_laptop
      height: 130px

  .column-4 .bar
    +lte_ipad
      height: rem(83px)
    +gte_laptop
      height: 155px

  .column-5 .bar
    background: #f44f0c
    +lte_ipad
      height: rem(128px)
    +gte_laptop
      height: 241px

  .label
    color: #6c6c6c
    font-weight: bold
    line-height: 1

    +lte_ipad
      font-size: rem(9px)

    +gte_laptop
      font-size: 13px

.finale
  font-weight: 300
  letter-spacing: -0.01em

  +lte_ipad
    color: #6c6c6c
    font-size: rem(14px)
    line-height: rem(18px)

  +gte_laptop
    color: #a5a5a5
    font-size: 16px
    line-height: 21px
    margin: 0 auto
    max-width: 341px

  strong
    font-weight: bold

.girl
  position: absolute
  bottom: 0

  img
    margin-bottom: -2px

  +lte_ipad
    display: none

  +laptop
    width: scale-laptop(390px, 516px)
    left: scale-laptop(-85px, -185px)

  +gte_desktop
    left: -185px
</style>
