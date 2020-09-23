<template>
  <article>
    <div class='container'>
      <h2>
        Кладовкин &mdash; технологический лидер российского
        рынка Self&nbsp;Storage
      </h2>
    </div>
    <div class='details'>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Slide3'
};
</script>

<style scoped lang='sass'>
article
  background: #5096ff
  display: flex
  flex-direction: column
  padding: 0

  +lte_ipad
    height: rem(444px)
    padding-bottom: rem(88px)
    padding-top: rem(40px)

  +gte_laptop
    height: 660px
    padding-bottom: 118px
    padding-top: 122px

h2
  color: #fff

  +lte_ipad
    text-align: center
    margin-bottom: rem(24px)

  +gte_laptop
    max-width: 585px
    margin-bottom: 52px

.details
  +default_margin-left
  background: #fff
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.05)
  border-radius: rem(40px) 0px 0px rem(40px)
  flex-grow: 1

  +lte_ipad
    padding: rem(24px) 0 rem(24px) rem(51px)

  +gte_laptop
    padding: 52px 0 46px 48px
</style>
