<template>
  <div class='background' id='slide_03'>
    <article>
      <h2 v-html='t("slide_03.h2")' />
      <div class='details'>
        <div class='line'>
          <div class='entry'>
            <div class='value'>7+</div>
            <div class='label' v-html='t("slide_03.entries.age")' />
          </div>
          <div class='entry'>
            <div class='value'>7 000+</div>
            <div class='label' v-html='t("slide_03.entries.customers")' />
          </div>
        </div>
        <div class='line'>
          <div class='entry'>
            <div class='value'>33</div>
            <div class='label' v-html='t("slide_03.entries.storages")' />
          </div>
          <div class='entry'>
            <div class='value'>24&nbsp;000+&nbsp;м²</div>
            <div class='label final' v-html='t("slide_03.entries.square")' />
          </div>
        </div>
        <picture class='picture'>
          <source srcset='../assets/slide_03/picture.webp' type='image/webp'>
          <img loading='lazy' src='../assets/slide_03/picture.png' />
        </picture>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide3',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
.background
  background: #5096ff

  +lte_ipad
    margin-bottom: rem(160px)

  +gte_laptop
    overflow: hidden

article
  display: flex
  flex-direction: column
  padding-right: 0

  +iphone
    height: rem(444px)

  +ipad
    height: rem(400px)

  +lte_ipad
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
      +iphone
        width: rem(100px)

      +ipad
        width: rem(150px)

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

.picture
  position: absolute
  z-index: 1

  +lte_ipad
    max-width: rem(266px)
    right: rem(7px)
    margin-top: rem(135px)

  +gte_laptop
    margin-top: -225px
    margin-left: 589px
</style>
