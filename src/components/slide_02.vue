<template>
  <article>
    <h2>
      <span>Self Storage</span> &mdash; новый подход к бизнесу в сфере недвижимости
    </h2>
    <div class='note'>
      Ставки доходности основных сегментов арендной недвижимости в России:
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

  +gte_laptop
    padding-top: 118px
    height: 983px

  &:before
    +laptop
      // 82.5%
      width: scale-between(550px, 645px, 1024px, 1280px)
      height: scale-between(550px, 645px, 1024px, 1280px)

    +gte_laptop
      background-image: url(../assets/slide_02/background-desktop.svg )
      background-repeat: no-repeat
      background-size: contain
      bottom: 0
      content: ''
      left: 0
      position: absolute
      z-index: -1

    +gte_desktop
      width: 645px
      height: 645px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(12px)

  +gte_laptop
    max-width: 540px
    margin: 0 auto 22px

.note
  color: #6c6c6c
  letter-spacing: -0.01em
  text-align: center

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(18px)

  +gte_laptop
    font-size: 18px
    font-weight: 300
    line-height: 23px
    max-width: 406px
    margin: 0 auto

img.girl
  position: absolute
  bottom: 0
</style>
