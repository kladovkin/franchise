<template>
  <div class='background'>
    <article>
      <h2>
        Кладовкин &mdash; технологический лидер российского
        рынка Self&nbsp;Storage
      </h2>
      <div class='details'>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Slide3'
};
</script>

<style scoped lang='sass'>
.background
  background: #5096ff
  overflow: hidden

article
  display: flex
  flex-direction: column
  padding-right: 0

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
  background: #fff
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.05)
  border-radius: rem(40px) 0px 0px rem(40px)
  flex-grow: 1
  position: relative

  +lte_ipad
    padding: rem(24px) 0 rem(24px) rem(51px)

  +gte_laptop
    padding: 52px 0 46px 48px

  &:after
    content: ''
    background: #fff
    position: absolute
    right: -99999px
    width: 99999px
    height: 100%
    top: 0
</style>
