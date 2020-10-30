<template>
  <div class='background' id='slide_03'>
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
        <picture class='content'>
          <source srcset='../assets/slide_03/content.webp' type='image/webp'>
          <img loading='lazy' src='../assets/slide_03/content.png' />
        </picture>
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

  +lte_ipad
    margin-bottom: 160px

  +gte_laptop
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
    margin-bottom: rem(24px)

  +gte_laptop
    max-width: 585px
    margin-bottom: 52px

.details
  background: #fff
  border-radius: rem(40px) 0px 0px rem(40px)
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.05)
  display: flex
  flex-direction: column
  flex-grow: 1
  justify-content: space-between
  position: relative

  +lte_ipad
    padding: rem(22px) 0 rem(22px) rem(51px)

  +gte_laptop
    padding: 52px 0 46px 48px

    &:after
      background: #fff
      box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.05)
      content: ''
      height: 100%
      position: absolute
      right: -99999px
      top: 0
      width: 99999px

  .line
    display: flex

    .entry
      +lte_ipad
        width: 100px

      +gte_laptop
        width: 240px

      .value
        font-weight: bold
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

.content
  position: absolute
  z-index: 1

  +lte_ipad
    max-width: rem(266px)
    margin-left: rem(-20px)
    margin-top: rem(135px)

  +gte_laptop
    margin-top: -225px
    margin-left: 589px
</style>
