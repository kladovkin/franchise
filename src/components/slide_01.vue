<template>
  <div class='background' :class='{ "is-opened": isOpened }'>
    <article>
      <router-link to='/' class='logo' />
      <div class='outer'>
        <div class='content'>
          <h1>Технологичный бизнес на&nbsp;вашей территории</h1>
          <p>Станьте партнером и зарабатывайте на&nbsp;своей&nbsp;недвижимости</p>
        </div>
        <div class='collapsed'>
          <div class='lock' @click='open'>
            <p class='first'>Включи</p>
            <p class='second'>свой бизнес</p>
          </div>
          <div class='yield'>
            <p>Ставка доходности с Кладовкин</p>
          </div>
          <div class='start' />
          <div class='middle' />
          <div class='end' />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Slide1',
  data: () => ({
    isOpened: false
  }),
  methods: {
    open() {
      this.isOpened = true;
    }
  }
};
</script>

<style scoped lang='sass'>
.background
  position: relative
  background-repeat: no-repeat
  background-size: contain
  background-position: right
  overflow: hidden // to prevent .collapsed:before overflow

  +gte_laptop
    background-image: url(../assets/slide_01/background_right.png)

  +laptop
    background-position-x: scale-between(400px, 571px, 1024px, 1280px)

  +desktop_hd
    background-position-x: scale-between(571px, 925px, 1280px, 1920px)

  +uhd
    background-position-x: scale-between(925px, 1224px, 1920px, 2520px)

  // red background
  &:before
    +gte_laptop
      background: #f44f0c
      content: ''
      height: 100%
      left: 0
      position: absolute
      top: 0
      width: 100%
      z-index: -1

  // shade for image under opened lock
  &:after
    background: rgba(#000, 0.2)
    height: 600px
    opacity: 0
    pointer-events: none
    position: absolute
    top: 0
    width: 1024px

    +laptop
      left: scale-between(400px, 571px, 1024px, 1280px)
      transition: opacity 0.75s ease 0.85s

    +gte_laptop
      content: ''

    +desktop_hd
      left: scale-between(571px, 925px, 1280px, 1920px)

    +gte_hd
      transition: opacity 1s ease 1.1s

    +uhd
      left: scale-between(925px, 1224px, 1920px, 2520px)

  &.is-opened:after
    opacity: 1

article
  color: #fff

  +lte_ipad
    text-align: center
    padding-top: rem(110px)
    background-image: url(../assets/slide_01/background_upper-mobile.svg)
    background-repeat: no-repeat
    background-size: contain
    min-height: rem(313px)

  +gte_laptop
    padding-right: 0

.outer
  +gte_laptop
    display: flex
    min-height: 600px
    position: relative

    &:before
      content: ''
      background-image: url(../assets/slide_01/background_circles-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      height: 100%
      left: 0
      position: absolute
      top: 0
      width: 100%
      z-index: 2
      pointer-events: none

  .content
    +gte_laptop
      background: #f44f0c
      padding-top: 200px
      position: relative
      max-width: 565px
      z-index: 1

    h1
      +lte_ipad
        margin-bottom: 20px

      +gte_laptop
        max-width: 520px
        margin-bottom: 24px

    p
      letter-spacing: -0.01em

      +lte_ipad
        font-size: rem(14px)
        line-height: rem(20px)

      +gte_laptop
        font-size: 24px
        line-height: 28px

    &:after
      +gte_laptop
        background-image: url(../assets/slide_01/expanded-half_ellipse-desktop.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 100%
        pointer-events: none
        position: absolute
        right: -176px
        top: 0
        width: 177px
        z-index: 2

  .collapsed
    display: flex
    flex-grow: 1
    position: relative

    .is-opened &
      &:before
        opacity: 0

      .start,
      .middle,
      .end
        opacity: 0

      .lock
        opacity: 0
        left: 100%

      .yield
        margin-top : 0
        opacity: 1
        pointer-events: auto

    +laptop_desktop
      max-width: scale-between(306px, 425px, 1024px, 1440px)

    +gte_hd
      max-width: 425px

    &:before
      background: linear-gradient(to right, #fff, rgba(#fff, 0))
      content: ''
      height: 100%
      left: 0
      pointer-events: none
      position: absolute
      width: 200%

      +laptop_hd
        transition: opacity 0.75s ease-in 0.4s

      +gte_hd
        transition: opacity 1s ease-in 0.5s

    .start,
    .middle,
    .end
      background-position: left
      background-repeat: no-repeat
      pointer-events: none
      position: relative
      z-index: 2

      +laptop_hd
        transition: opacity 0.75s ease-in 0.4s

      +gte_hd
        transition: opacity 1s ease-in 0.5s

    .start
      background-image: url(../assets/slide_01/collapsed-start-desktop.svg)
      width: 78px

    .middle
      background-image: url(../assets/slide_01/collapsed-middle-desktop.svg)
      background-repeat: repeat-x
      flex-grow: 1
      margin-left: -1px // NOTE: fix browser glitches

    .end
      background-image: url(../assets/slide_01/collapsed-end-desktop.svg)
      margin-left: -1px // NOTE: fix browser glitches
      width: 42px

    $lock-size: 127px
    .lock
      align-items: center
      background-image: url(../assets/slide_01/lock.svg)
      background-repeat: no-repeat
      background-size: contain
      border-radius: $lock-size
      cursor: pointer
      display: flex
      flex-direction: column
      height: $lock-size
      justify-content: center
      position: absolute
      left: 15px
      top: 50%
      transform: translateY(-50%)
      user-select: none
      width: $lock-size
      -webkit-tap-highlight-color: transparent

      +laptop_hd
        transition: left 1.15s ease-out, opacity 1s ease-in 0.15s

      +gte_hd
        transition: left 1s ease-out, opacity 0.85s ease-in 0.15s

      +lte_ipad
        display: none

      p.first
        font-size: 16px
        font-weight: 900
        line-height: 18px
        margin-top: 20px

      p.second
        font-weight: 400
        font-size: 10px
        line-height: 18px

    .yield
      margin-top: 35px
      opacity: 0
      pointer-events: none
      position: absolute
      top: 50%
      transform: translateY(-50%)
      z-index: 2

      +laptop
        left: scale-between(68px, 156px, 1024px, 1280px)
        transition: opacity 0.75s ease 0.85s, margin-top 0.75s ease 0.85s

      +desktop_hd
        left: scale-between(156px, 290px, 1280px, 1920px)

      +gte_hd
        transition: opacity 1s ease 1.1s, margin-top 1s ease 1.1s

      +uhd
        left: 290px

      &:before
        background-image: url(../assets/slide_01/yield-desktop.svg)
        background-position: bottom
        background-repeat: no-repeat
        background-size: contain
        content: ''
        display: block
        height: 182px
        margin-bottom: 12px

        +laptop
          margin-top: scale-between(-20px, 0px, 1024px, 1280px)
          width: scale-between(380px, 456px, 1024px, 1280px)

        +gte_desktop
          width: 456px

      p
        letter-spacing: -0.01em

        +lte_ipad
          font-weight: 500
          font-size: rem(14px)
          line-height: rem(14px)

        +gte_laptop
          font-size: 18px
          font-weight: bold
          line-height: 23px

.logo
  background-image: url(../assets/slide_01/logo.svg)
  background-repeat: no-repeat
  background-size: contain
  position: absolute
  z-index: 2

  +lte_ipad
    height: rem(52px)
    left: rem(16px)
    top: rem(14px)
    width: rem(198px)

  +laptop
    left: scale-between(31px, 47px, 1024px, 1280px)

  +gte_laptop
    height: 53px
    top: 42px
    width: 200px

  +gte_desktop
    left: 47px
</style>
