<template>
  <article>
    <h2>
      Станьте партнером и откройте автоматизированный бизнес под ключ
      <span>за&nbsp;2&nbsp;месяца</span>
    </h2>
    <div class='area'>
      <div class='entry-wrapper entry-wrapper-1'>
        <div class='entry entry-1'>
          <div class='circle'>2 дня</div>
          <div class='info'>
            <b>Сбор предварительной информации о&nbsp;помещении</b>
            <p>и расчет технико-экономических показателей&nbsp;склада</p>
          </div>
        </div>
      </div>
      <div class='entry-wrapper entry-wrapper-2'>
        <div class='entry entry-2'>
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
      </div>
      <div class='entry-wrapper entry-wrapper-3'>
        <div class='entry entry-3'>
          <div class='circle top'>7 дней</div>
          <div class='info'>
            <b>Разработка и согласование дизайн-проекта</b>
            <p>
              Сбор предварительной информации о помещениии, расчет
              технико-экономических показателей склада
            </p>
          </div>
        </div>
      </div>
      <div class='entry-wrapper entry-wrapper-4'>
        <div class='entry entry-4'>
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
      </div>
      <div class='entry-wrapper entry-wrapper-5'>
        <div class='entry entry-5'>
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
      </div>
      <div class='entry-wrapper entry-wrapper-6'>
        <div class='entry entry-6'>
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
          <img
            class='background'
            loading='lazy'
            src='../assets/slide_06/background_final.png'
          />
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

  +gte_laptop
    height: 2913px

  &:before
    content: ''
    position: absolute
    z-index: -1

    +lte_ipad
      background: #f6f5fe
      height: rem(845px)
      left: rem(35px)
      top: rem(42px)
      width: rem(16px)

    @media screen and (min-width: 1024px) and (max-width: 1200px)
      background-size: #{scale-between(821px, 958px, 1024px, 1200px)} 2913px
      top: scale-between(65px, 85px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      top: 85px

    +gte_laptop
      background-image: url(../assets/slide_06/background_line-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      height: 2913px
      left: 50%
      transform: translateX(-50%)
      width: 958px

.entry
  display: flex

  +lte_ipad
    color: #4b4b4b
    margin-bottom: 40px

  +gte_laptop
    color: #333

  .circle
    align-items: center
    align-self: flex-end
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
      background-image: url(../assets/slide_06/circle-mobile.svg)
      font-size: rem(14px)
      height: rem(85px)
      line-height: rem(16px)
      margin-right: rem(16px)
      width: rem(85px)

    +gte_laptop
      background-image: url(../assets/slide_06/circle-desktop.svg)
      font-size: 30px
      height: 160px
      line-height: 23px
      width: 160px

    &.logo
      background-image: url(../assets/slide_06/circle_logo.svg)

  .info
    +gte_laptop
      max-width: 350px

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
        margin-bottom: rem(4px)

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
        margin-left: rem(-80px)
        padding-left: rem(80px)

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

  +lte_ipad
    &-6
      position: relative
      padding-bottom: rem(248px)

    .background
      +lte_ipad
        max-width: 100%
        bottom: 0
        position: absolute

  +gte_laptop
    &-1,
    &-3,
    &-5
      align-items: center
      flex-direction: row-reverse

      .info
        max-width: 300px

    &-2,
    &-4
      align-items: flex-end

.entry-wrapper
  position: relative
  display: flex
  align-items: center

  &:before
    content: ''
    background-repeat: no-repeat
    background-size: contain
    position: absolute

  &-1
    justify-content: flex-end

    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: scale-between(279px, 341px, 1024px, 1200px)
      margin-bottom: scale-between(61px, -62px, 1024px, 1200px)

      &:before
        height: scale-between(279px, 341px, 1024px, 1200px)
        width: scale-between(451px, 491px, 1024px, 1200px)
        left: scale-between(-68px, -32px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 341px
      margin-bottom: -62px

      &:before
        height: 341px
        left: -32px
        width: 491px

    &:before
      background-image: url(../assets/slide_06/entry_wrapper_1_background.png)

  &-2
    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: scale-between(409px, 531px, 1024px, 1200px)
      margin-bottom: scale-between(157px, 110px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 531px
      margin-bottom: 110px

  &-3
    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: scale-between(215px, 247px, 1024px, 1200px)
      margin-bottom: scale-between(205px, 70px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 247px
      margin-bottom: 70px

  &-4
    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: scale-between(297px, 435px, 1024px, 1200px)
      margin-bottom: scale-between(42px, 23px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 435px
      margin-bottom: 23px

  &-5
    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: 585px
      margin-bottom: scale-between(80px, 54px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 585px
      margin-bottom: 54px

  &-6
    @media screen and (min-width: 1024px) and (max-width: 1200px)
      height: scale-between(283px, 380px, 1024px, 1200px)
      margin-bottom: scale-between(96px, 190px, 1024px, 1200px)

    @media screen and (min-width: 1200px)
      height: 380px
      margin-bottom: 190px
</style>
