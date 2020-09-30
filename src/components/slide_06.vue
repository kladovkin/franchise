<template>
  <article>
    <h2>
      Станьте партнером и откройте автоматизированный бизнес под ключ
      <span>за&nbsp;2&nbsp;месяца</span>
    </h2>
    <div class='area'>
      <div class='entry'>
        <div class='circle'>2 дня</div>
        <div class='info'>
          <b>Сбор предварительной информации о помещении</b>
          <p>и расчет технико-экономических показателей склада</p>
        </div>
      </div>
      <div class='entry'>
        <div class='circle'>2 дня</div>
        <div class='info'>
          <b>Подготовка документов</b>
          <p>и заключение договора</p>
          <div>
            <b>0 рублей</b>
            <p>концессионный взнос</p>
          </div>
        </div>
      </div>
      <div class='entry'>
        <div class='circle top'>7 дней</div>
        <div class='info'>
          <b>Разработка и согласование дизайн-проекта</b>
          <p>
            Сбор предварительной информации о помещениии, расчет
            технико-экономических показателей склада
          </p>
        </div>
      </div>
      <div class='entry'>
        <div class='circle'>45 дней</div>
        <div class='info'>
          <b>Изготовление, поставка и монтаж оборудования</b>
          <p>
            Изготовим и произведем поставку оборудования собственной
            разработки с гарантией качества и сроков оснащения
          </p>
          <div>
            <b>7000 руб./м²</b>
            <p>переоборудование помещения</p>
          </div>
        </div>
      </div>
      <div class='entry'>
        <div class='circle top'>7 дней</div>
        <div class='info'>
          <b>
            Пуско-наладочные работы охранной системы, интеграция с IT-платформой
          </b>
          <p>
            Служба монтажа быстро и качественно установит и настроит
            оборудование, систему контроля и управления доступом и
            обеспечит интеграцию склада с сайтом
          </p>
        </div>
      </div>
      <div class='entry'>
        <div class='circle top logo' />
        <div class='info'>
          <b>Открытие склада и поддержание бизнеса</b>
          <p class='final-bold'>Возьмем все управление на себя:</p>
          <p class='list'>
            &ndash; маркетинг и рекламу<br>
            &ndash; службу заботы о клиентах 24/7<br>
            &ndash; техническое обслуживание<br>
            &ndash; управление персоналом<br>
            &ndash; круглосуточное<br>&nbsp;&nbsp;&nbsp;видеонаблюдение<br>
          </p>
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

  &:before
    background-repeat: no-repeat
    content: ''
    background-size: contain
    position: absolute
    z-index: -1

    +lte_ipad
      background: #f6f5fe
      height: rem(845px)
      left: rem(35px)
      top: rem(42px)
      width: rem(16px)

.entry
  display: flex

  &:first-child
    align-items: center

    +gte_laptop
      flex-direction: row-reverse

  +lte_ipad
    color: #4b4b4b
    margin-bottom: 40px

  +gte_laptop
    color: #333

  .circle
    align-items: center
    align-self: flex-end
    background-image: url(../assets/slide_06/circle.svg)
    background-repeat: no-repeat
    background-size: contain
    display: flex
    flex-shrink: 0
    font-weight: 900
    justify-content: center
    position: relative
    z-index: 1

    &.top
      align-self: flex-start

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
    b
      display: block
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
        color: #6c6c6c
        font-size: rem(12px)
        line-height: rem(16px)

      +gte_laptop
        color: #4B4B4B
        font-size: 16px
        font-weight: 300
        line-height: 23px

      &.final-bold
        font-weight: 800
        color: inherit

        +lte_ipad
          margin-top: rem(8px)
          margin-bottom: rem(12px)

      &.list
        white-space: nowrap

      &:not(:last-child)
        +lte_ipad
          margin-bottom: rem(12px)

    div
      justify-content: center
      background: #f44f0c
      border-radius: 10px
      display: flex
      flex-direction: column

      +lte_ipad
        height: rem(52px)
        width: rem(255px)
        margin-left: rem(-68px)
        padding-left: rem(68px)

      +gte_laptop
        height: rem(95px)

      b
        color: #fff
        font-weight: 700

        +lte_ipad
          font-size: rem(18px)
          line-height: rem(24px)
          margin-bottom: rem(1px)

        +gte_laptop
          font-size: 18px
          line-height: 23px
          margin-bottom: -3px

      p
        color: #fff

        +gte_laptop
          font-weight: normal
</style>
