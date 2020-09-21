<template>
  <div class='background'>
    <article>
      <router-link to='/' class='logo' />
      <div class='outer' :class='{ "is-expanded": isExpanded }'>
        <div class='content'>
          <h1>Технологичный бизнес на&nbsp;вашей территории</h1>
          <p>Станьте партнером и зарабатывайте на&nbsp;своей&nbsp;недвижимости</p>
        </div>
        <div class='collapsed'>
          <div class='lock' @click='expand'>
            <p class='first'>Включи</p>
            <p class='second'>свой бизнес</p>
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
    isExpanded: false
  }),
  methods: {
    expand() {
      this.isExpanded = true;
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

  +gte_laptop
    background-image: url(../assets/slide_01/background_right.png)

  +laptop
    background-position-x: scale-between(400px, 571px, 1024px, 1280px)

  +desktop_hd
    background-position-x: scale-between(571px, 925px, 1280px, 1920px)

  +uhd
    background-position-x: scale-between(925px, 1224px, 1920px, 2520px)

  &:before
    background: #f44f0c
    content: ''
    height: 100%
    left: 0
    position: absolute
    top: 0
    width: 100%
    z-index: -1

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
    overflow: hidden // to prevent .collapsed:before overflow
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
      z-index: 1
      pointer-events: none

  .content
    +gte_laptop
      background: #f44f0c
      padding-top: 200px
      position: relative
      max-width: 565px

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
        background-image: url(../assets/slide_01/expanded_half_ellipse-desktop.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 100%
        pointer-events: none
        position: absolute
        right: -176px
        top: 0
        width: 177px
        z-index: 1

  $lock-size: 127px
  &.is-expanded
    .collapsed
      &:before
        opacity: 0

      .start,
      .middle,
      .end
        opacity: 0

      .lock
        opacity: 0
        left: 100%

  .collapsed
    display: flex
    flex-grow: 1
    position: relative

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
      z-index: 1

      +laptop_hd
        transition: opacity 0.75s ease-in 0.4s

      +gte_hd
        transition: opacity 1s ease-in 0.5s

    .start
      background-image: url(../assets/slide_01/collapsed-start-desktop.svg)
      width: 78px

    .middle
      background-image: url(../assets/slide_01/collapsed-middle-desktop.svg)
      background-repeat-x: repeat
      flex-grow: 1
      margin-left: -1px // NOTE: fix browser glitches

    .end
      background-image: url(../assets/slide_01/collapsed-end-desktop.svg)
      margin-left: -1px // NOTE: fix browser glitches
      width: 42px

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

.logo
  background-image: url(../assets/slide_01/logo.svg)
  background-repeat: no-repeat
  background-size: contain
  position: absolute

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
