<template>
  <article>
    <h2>
      <span>Self Storage</span> &mdash; новый подход к бизнесу в сфере недвижимости
    </h2>
    <div class='note'>
      Ставки доходности основных сегментов арендной недвижимости в России:
    </div>
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
</style>
