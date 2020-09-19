<template>
  <article>
    <router-link to='/' class='logo' />
    <div class="fc">
      <div class="f-column">
        <h1>Технологичный бизнес на вашей территории</h1>
        <p>Станьте партнером и зарабатывайте на&nbsp;своей недвижимости</p>
      </div>
      <div class="f-column">
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
  background: #f44f0c
  color: #fff

  +lte_ipad
    text-align: center
    padding-top: rem(110px)

  +gte_laptop
    padding-top: 200px
    min-height: 600px

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
