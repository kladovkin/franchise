<template>
  <article>
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
  +gte_laptop
    padding: 0
    height: 983px

  &:before
    +laptop
      // 82.5%
      width: scale-between(550px, 645px, 1024px, 1280px)
      height: scale-between(550px, 645px, 1024px, 1280px)

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
  text-align: center

  +lte_ipad
    padding-top: rem(80px)
    margin-bottom: rem(12px)

  +gte_laptop
    max-width: 540px
    padding-top: 118px
    margin: 0 auto 22px

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
    font-weight: 300
    line-height: 30px

  li
    display: flex
    align-items: center

    +lte_ipad
      margin-bottom: rem(8px)

    +gte_laptop
      margin-bottom: 21px

    &:before
      content: ''
      background-image: url(../assets/slide_02/checkmark.svg)
      background-repeat: no-repeat
      background-size: contain

      +lte_ipad
        height: rem(24px)
        margin-right: rem(27px)
        width: rem(24px)

      +gte_laptop
        height: 40px
        margin-right: 54px
        width: 40px

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

img.girl
  position: absolute
  bottom: 0

  +lte_ipad
    display: none

  +laptop
    width: scale-between(390px, 516px, 1024px, 1280px)
    left: scale-between(-85px, -185px, 1024px, 1280px)

  +gte_desktop
    left: -185px
</style>
