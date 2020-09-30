<template>
  <article>
    <h2>
      Станьте партнером и откройте автоматизированный бизнес под ключ
      <span>за&nbsp;2&nbsp;месяца</span>
    </h2>
    <div class='area'>
      <div class='background-line' />
      <div class='entry'>
        <div class='circle'>2 дня</div>
        <div class='info'>
          <div>Сбор предварительной информации о помещении</div>
          <p>и расчет технико-экономических показателей склада</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Slide6'
};
</script>

<style scoped lang='sass'>
h2
  text-align: center
  +lte_ipad
    margin-bottom: 54px

  +gte_laptop
    max-width: 727px
    margin: 0 auto 82px

.area
  position: relative

.background-line
  background-repeat: no-repeat
  background-size: contain
  position: absolute
  z-index: -1

  +lte_ipad
    background-image: url(../assets/slide_06/background_line-mobile.svg)
    height: rem(703px)
    left: rem(35px)
    top: rem(42px)
    width: rem(16px)

.entry
  display: flex
  align-items: center

  +lte_ipad
    color: #4b4b4b
    flex-direction: row

  +gte_laptop
    color: #333
    flex-direction: row-reverse

  .circle
    align-items: center
    background-image: url(../assets/slide_06/circle.svg)
    background-repeat: no-repeat
    background-size: contain
    display: flex
    font-weight: 900
    flex-shrink: 0
    justify-content: center

    +lte_ipad
      font-size: rem(14px)
      height: rem(85px)
      line-height: rem(16px)
      margin-right: rem(16px)
      width: rem(85px)

    +gte_laptop
      font-size: 30px
      height: 160px
      line-height: 23px
      width: 160px

    &.logo
      background-image: url(../assets/slide_06/circle-logo.svg)

  .info
    div
      font-weight: 800

      +lte_ipad
        font-size: rem(14px)
        line-height: rem(18px)
        margin-bottom: rem(4px)

      +gte_laptop
        font-size: 18px
        line-height: 23px

    p
      +lte_ipad
        font-size: rem(12px)
        line-height: rem(16px)
        color: #6C6C6C

      +gte_laptop
        color: #4B4B4B
        font-size: 16px
        font-weight: 300
        line-height: 23px
</style>
