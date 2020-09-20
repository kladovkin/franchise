<template>
  <div class='background'>
    <article>
      <router-link to='/' class='logo' />
      <div class='outer' :class='{ "is-expanded": isExpanded }'>
        <div class='texts'>
          <h1>Технологичный бизнес на вашей территории</h1>
          <p>Станьте партнером и зарабатывайте на&nbsp;своей недвижимости</p>
        </div>
        <div class='collapsed'>
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
  })
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
    background-position-x: scale-between(400px, 579px, 1024px, 1200px)

  +desktop
    background-position-x: scale-between(578px, 701px, 1200px, 1440px)

  +gte_hd
    background-position-x: scale-between(701px, 942px, 1440px, 1920px)

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

  &.is-expanded
    .texts
      +gte_laptop
        background-image: url(../assets/slide_01/background_left_expanded-desktop.svg)

  .texts
    +gte_laptop
      background: #f44f0c
      padding-top: 200px
      position: relative
      width: 63.6%

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

  .collapsed
    display: flex
    flex-grow: 1

    .start
      background-position: right
      background-repeat: no-repeat
      background-image: url(../assets/slide_01/collapsed-start-desktop.svg)
      background-position: left
      width: 78px

    .middle
      background-position: right
      background-repeat-y: no-repeat
      background-repeat-x: repeat
      background-image: url(../assets/slide_01/collapsed-middle-desktop.svg)
      background-position: left
      flex-grow: 1

    .end
      background-position: right
      background-repeat: no-repeat
      background-image: url(../assets/slide_01/collapsed-end-desktop.svg)
      background-position: left
      width: 42px

      +laptop
        margin-right: scale-between(123px, 156px, 1024px, 1200px)

      +gte_desktop
        margin-right: 156px

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
