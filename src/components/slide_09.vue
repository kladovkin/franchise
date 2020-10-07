<template>
  <article>
    <h2>Остались вопросы?</h2>
    <div class='note'>Оставьте свои контакты и мы с вами свяжемся</div>
  </article>
</template>

<script>
export default {
  name: 'Slide9'
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    overflow: hidden
    padding-top: rem(81px)

  +gte_laptop
    padding-top: 96px

h2
  +lte_ipad
    margin-bottom: rem(12px)

  +gte_laptop
    margin-bottom: rem(16px)

.note
  color: #6c6c6c
  letter-spacing: -0.01em

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(16px)
    text-align: center
    margin-bottom: rem(40px)

  +gte_laptop
    font-size: 18px
    line-height: 23px
    margin-bottom: 42px

    &:after
      background-image: url(../assets/slide_09/logo.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 62px
      position: absolute
      width: 226px
</style>
