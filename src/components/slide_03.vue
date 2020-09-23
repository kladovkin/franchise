<template>
  <div class='background'>
    <article>
      <h2>
        Кладовкин &mdash; технологический лидер российского
        рынка Self&nbsp;Storage
      </h2>
      <div class='details'>
        <div class='line'>
          <div class='entry'>
            <div class='value'>4+</div>
            <div class='label'>Года&nbsp;на&nbsp;рынке</div>
          </div>
          <div class='entry'>
            <div class='value'>3 500+</div>
            <div class='label'>Благодарных арендаторов</div>
          </div>
        </div>
        <div class='line'>
          <div class='entry'>
            <div class='value'>7</div>
            <div class='label'>Складов в&nbsp;Москве</div>
          </div>
          <div class='entry'>
            <div class='value'>20&nbsp;000&nbsp;м²</div>
            <div class='label final'>Площадь&nbsp;складов</div>
          </div>
        </div>
      </div>
      <img
        class='content'
        loading='lazy'
        src='../assets/slide_03/content.png'
      />
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
  display: flex
  flex-direction: column
  justify-content: space-between

  +lte_ipad
    padding: rem(22px) 0 rem(22px) rem(51px)

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

  .line
    display: flex

    .entry
      +lte_ipad
        width: 100px

      +gte_laptop
        width: 240px

      .value
        font-weight: 900
        color: #5096ff
        white-space: nowrap

        +lte_ipad
          font-size: rem(30px)
          line-height: rem(30px)
          margin-bottom: rem(2px)

        +gte_laptop
          font-size: 50px
          line-height: 35px
          margin-bottom: 21px

      .label
        color: #6c6c6c

        +lte_ipad
          font-size: rem(12px)
          line-height: rem(16px)

          &.final
            height: rem(32px)
            display: flex
            align-items: center
            margin-top: rem(-2px)

        +gte_laptop
          font-size: 18px
          line-height: 23px

  img.content
</style>
