<template>
  <article>
    <router-link to='/' class='logo' />
    <div class="fc">
      <div class="f-left">
        <h1>Технологичный бизнес на вашей территории</h1>
        <p>Станьте партнером и зарабатывайте на&nbsp;своей недвижимости</p>
      </div>
      <div class="f-right">
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Slide1'
};
</script>

<style scoped lang='sass'>
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
    /* background: #f44f0c */
    padding-top: 200px
    min-height: 600px

.fc
  +gte_laptop
    display: flex

  .f-left
    +gte_laptop
      background-image: url(../assets/slide_01/background_left-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
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
