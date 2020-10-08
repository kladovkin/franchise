<template>
  <article id='slide_02'>
    <h2>
      <span>Self Storage</span> &mdash; новый подход к бизнесу в сфере недвижимости
    </h2>
    <div class='note'>
      Ставки доходности основных сегментов арендной недвижимости в России:
    </div>
    <div class='list-wrapper'>
      <ul>
        <li>Большее количество арендаторов</li>
        <li>Повышенная арендная ставка</li>
        <li>Постоянная заполненность склада</li>
        <li>Растущий рынок</li>
      </ul>
    </div>

    <div class='graph'>
      <div class='column column-1'>
        <div class='percent'>4%</div>
        <div class='bar' />
        <div class='label'>Жильё</div>
      </div>
      <div class='column column-2'>
        <div class='percent'>8%</div>
        <div class='bar' />
        <div class='label'>Офисы</div>
      </div>
      <div class='column column-3'>
        <div class='percent'>11%</div>
        <div class='bar' />
        <div class='label'>Стрит&nbsp;ритейл</div>
      </div>
      <div class='column column-4'>
        <div class='percent'>12%</div>
        <div class='bar' />
        <div class='label'>Склады</div>
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
      <strong>Self Storage — это склады, оборудованные боксами</strong>
      для хранения вещей или товаров физическими или юридическими лицами
    </div>

    <img
      class='girl'
      loading='lazy'
      src='../assets/slide_02/girl.png'
    />
  </article>
</template>

<script>
export default {
  name: 'Slide2'
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(80px)
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
    margin-bottom: rem(12px)

  +gte_laptop
    margin: 0 auto 22px
    max-width: 540px
    padding-top: 118px
    text-align: center

.note
  color: #6c6c6c
  letter-spacing: -0.01em
  text-align: center

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(18px)
    margin-bottom: rem(42px)

  +gte_laptop
    font-size: 18px
    font-weight: 300
    line-height: 23px
    max-width: 406px
    margin: 0 auto 68px

.list-wrapper
  display: flex
  justify-content: center

ul
  color: #4b4b4b

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

  +lte_ipad
    margin-bottom: rem(28px)
    margin-top: rem(-22px)

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
    font-weight: 700
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
    line-height: 1

    +lte_ipad
      font-size: rem(9px)
      font-weight: 500

    +gte_laptop
      font-size: 13px
      font-weight: 700

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
    font-weight: 700

img.girl
  position: absolute
  bottom: 0

  +lte_ipad
    display: none

  +laptop
    width: scale-laptop(390px, 516px)
    left: scale-laptop(-85px, -185px)

  +gte_desktop
    left: -185px
</style>
