<template>
  <article>
    <div class='content-container'>
      <h2>Кейсы</h2>
      <div class='text'>
        <div><b>Площадь:</b> 165 м²</div>
        <div><b>Расположение:</b> ул. Маршала Жукова, 76-2</div>
        <div><b>Дата запуска проекта:</b> май 2019 г.</div>
        <div><b>Инвестиции в переоборудование помещения:</b>&nbsp;1&nbsp;155&nbsp;000&nbsp;руб.</div>
        <div><b>Средняя арендная ставка:</b> 1 800 руб./м²</div>
        <div><b>Заполняемость:</b> 99%</div>
        <div><b>Срок окупаемости:</b> 17 месяцев</div>
        <div><b>IRR:</b> 105%</div>
      </div>
      <div class='dots' />
    </div>
    <div class='slider-container'>
      <img
        class='laptop'
        loading='lazy'
        src='../assets/slide_08/case_1.png'
      />
      <div class='dots' />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Slide8'
};
</script>

<style scoped lang='sass'>
article
  overflow: hidden

  +gte_laptop
    align-items: center
    display: flex
    margin-bottom: 70px
    padding-top: 67px

  &:before
    background-image: url(../assets/slide_08/circles.svg)
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    top: 0

    +lte_ipad
      height: rem(117px)
      right: rem(-20px)
      width: rem(179px)

    +gte_laptop
      height: 109px
      left: 50%
      transform: translateX(-50%)
      width: 144px

  .content-container
    +lte_ipad
      padding-top: rem(52px)

    +gte_laptop
      flex-shrink: 0
      // padding-top: 162px

    .text
      color: #4b4b4b

      +lte_ipad
        font-size: rem(14px)
        line-height: rem(18px)

      +gte_laptop
        font-size: 18px
        line-height: 30px
        max-width: 410px
        margin-right: 40px

      b
        font-weight: bold

    .dots
      // NOTE: remove when more cases are added
      &:empty
        display: none

      +lte_ipad
        display: none

      +gte_laptop
        margin-top: 45px

  .slider-container
    position: relative

    +gte_laptop
      margin-left: auto

    +laptop
      width: scale-laptop(514px, 635px)

    +gte_desktop
      width: 635px

    &:before
      background-image: url(../assets/slide_08/circle_red.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 100%
      position: absolute
      width: 100%

    img
      max-width: 100%

    .dots
      // NOTE: remove when more cases are added
      &:empty
        display: none

      +lte_ipad
        margin-top: rem(40px)

      +gte_laptop
        display: none

h2
  +lte_ipad
    margin-bottom: rem(50px)

  +gte_laptop
    margin-bottom: 41px
</style>
