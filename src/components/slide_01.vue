<template>
  <div class='background is-opened' id='slide_01'>
    <article>
      <a class='logo' href='https://kladovkin.ru'></a>
      <div class='outer'>
        <div class='content'>
          <h1 v-html='t("slide_01.h1")' />
          <p v-html='t("slide_01.h2")' />
        </div>
        <div class='collapsed'>
          <div class='yield'>
            <p>{{ t('slide_01.collapsed') }}</p>
          </div>
          <div class='start' />
          <div class='middle' />
          <div class='end' />
        </div>
      </div>
      <Button
        :text='t("slide_01.button")'
        type='white'
        @click='lead'
      />
    </article>
  </div>
</template>

<script>
import Button from '@/components/button';
import SweetScroll from '@/utils/sweet_scroll';
import t from '@/utils/locale';

export default {
  name: 'Slide1',
  components: { Button },
  data: () => ({
    isOpened: false
  }),
  methods: {
    t,
    open() {
      this.isOpened = true;
    },
    async lead() {
      (await SweetScroll.asyncInstance()).toElement(
        document.getElementById('slide_02'), { duration: 450 }
      );
    }
  }
};
</script>

<style scoped lang='sass'>
.background
  position: relative
  background-repeat: no-repeat
  background-size: contain
  overflow: hidden // to prevent .collapsed:before overflow

  +iphone
    background-image: url(../assets/slide_01/background_bottom-iphone.png)

    .webp &
      background-image: url(../assets/slide_01/background_bottom-iphone.webp)

  +ipad
    background-image: url(../assets/slide_01/background_bottom-ipad.png)

    .webp &
      // background-image: url(../assets/slide_01/background_bottom-ipad.webp)

  +lte_ipad
    background-position: bottom
    margin-bottom: rem(55px)

  +gte_laptop
    background-image: url(../assets/slide_01/background_right.png)
    background-position: right

    .webp &
      background-image: url(../assets/slide_01/background_right.webp)

  +laptop
    background-position-x: scale-laptop(400px, 571px)

  +desktop_hd
    background-position-x: scale-between(571px, 925px, 1200px, 1920px)

  +uhd
    background-position-x: scale-between(925px, 1224px, 1920px, 2520px)

  // red background
  &:before
    +gte_laptop
      background: #f44f0c
      content: ''
      height: 100%
      left: 0
      position: absolute
      top: 0
      width: 100%
      z-index: -1

  // shade for image under opened lock
  &:after
    background: rgba(#000, 0.2)
    content: ''
    pointer-events: none
    position: absolute
    top: 0

    +lte_ipad
      height: 100%
      width: 100%

    +laptop
      left: scale-laptop(400px, 571px)
      transition: opacity 0.75s ease 0.85s

    +gte_laptop
      height: 600px
      opacity: 0
      width: 1024px

    +gte_desktop
      transition: opacity 1s ease 1.1s

    +desktop_hd
      left: scale-between(571px, 925px, 1200px, 1920px)

    +uhd
      left: scale-between(925px, 1224px, 1920px, 2520px)

  &.is-opened:after
    opacity: 1

article
  color: #fff

  +iphone
    background-image: url(../assets/slide_01/background_upper-iphone.svg)
    padding-bottom: rem(82px)
    padding-top: rem(110px)

  +ipad
    background-image: url(../assets/slide_01/background_upper-ipad.svg)
    padding-bottom: rem(123px)
    padding-top: rem(160px)

  +lte_ipad
    background-repeat: no-repeat
    background-size: contain
    text-align: center
    z-index: 1

  +gte_laptop
    padding-right: 0

.logo
  background-image: url(../assets/slide_01/logo.svg)
  background-repeat: no-repeat
  background-size: contain
  position: absolute
  z-index: 3

  +lte_ipad
    height: rem(52px)
    left: rem(16px)
    top: rem(14px)
    width: rem(198px)

  +laptop
    left: scale-laptop(31px, 47px)

  +gte_laptop
    height: 53px
    top: 42px
    width: 200px

  +gte_desktop
    left: 47px

.outer
  +gte_laptop
    display: flex
    min-height: 600px
    position: relative

    &:before
      content: ''
      background-image: url(../assets/slide_01/background_circles-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      height: 100%
      left: 0
      position: absolute
      top: 0
      width: 100%
      z-index: 2
      pointer-events: none

  .content
    position: relative
    z-index: 1

    +iphone
      margin-bottom: rem(150px)

    +ipad
      margin-bottom: rem(170px)

    +gte_laptop
      background: #f44f0c
      padding-top: 200px
      max-width: 565px

    h1
      +ipad
        font-size: rem(22px)

      +lte_ipad
        margin-bottom: rem(20px)

      +gte_laptop
        max-width: 520px
        margin-bottom: 24px

    p
      letter-spacing: -0.01em

      +lte_ipad
        font-size: rem(14px)
        line-height: 1.42

      +gte_laptop
        font-size: 24px
        line-height: 28px

    &:after
      +gte_laptop
        background-image: url(../assets/slide_01/expanded-half_ellipse-desktop.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 100%
        pointer-events: none
        position: absolute
        right: -176px
        top: 0
        width: 177px
        z-index: 2

  .collapsed
    position: relative

    +gte_laptop
      display: flex
      flex-grow: 1

    .is-opened &
      &:before
        opacity: 0

      .start,
      .middle,
      .end
        opacity: 0

      .lock
        opacity: 0
        left: 100%

      .yield
        margin-top : 0
        opacity: 1
        pointer-events: auto

    +laptop_desktop
      max-width: scale-between(306px, 425px, 1024px, 1440px)

    +gte_hd
      max-width: 425px

    &:before
      +gte_laptop
        background: linear-gradient(to right, #fff, rgba(#fff, 0))
        content: ''
        height: 100%
        left: 0
        pointer-events: none
        position: absolute
        width: 200%

      +laptop_hd
        transition: opacity 0.75s ease-in 0.4s

      +gte_hd
        transition: opacity 1s ease-in 0.5s

    .start,
    .middle,
    .end
      background-position: left
      background-repeat: no-repeat
      pointer-events: none
      position: relative
      z-index: 2

      +laptop_hd
        transition: opacity 0.75s ease-in 0.4s

      +gte_hd
        transition: opacity 1s ease-in 0.5s

    .start
      background-image: url(../assets/slide_01/collapsed-start-desktop.svg)
      width: 78px

    .middle
      background-image: url(../assets/slide_01/collapsed-middle-desktop.svg)
      background-repeat: repeat-x
      flex-grow: 1
      margin-left: -1px // NOTE: fix browser glitches

    .end
      background-image: url(../assets/slide_01/collapsed-end-desktop.svg)
      margin-left: -1px // NOTE: fix browser glitches
      width: 42px

    .yield
      +lte_ipad
        align-items: center
        display: flex
        flex-direction: column
        margin-bottom: rem(53px)

      +gte_laptop
        margin-top: 35px
        opacity: 0
        pointer-events: none
        position: absolute
        top: 50%
        transform: translateY(-50%)
        z-index: 2

      +laptop
        left: scale-laptop(68px, 156px)
        transition: opacity 0.75s ease 0.85s, margin-top 0.75s ease 0.85s

      +gte_desktop
        transition: opacity 1s ease 1.1s, margin-top 1s ease 1.1s

      +desktop_hd
        left: scale-between(156px, 290px, 1200px, 1920px)

      +uhd
        left: 290px

      &:before
        content: ''
        display: block

        +lte_ipad
          background-image: url(../assets/slide_01/yield-mobile.svg)
          background-repeat: no-repeat
          background-size: contain
          width: rem(185px)
          height: rem(88px)
          margin-bottom: rem(18px)

        +gte_laptop
          background-image: url(../assets/slide_01/yield-desktop.svg)
          background-position: bottom
          background-repeat: no-repeat
          background-size: contain
          height: 182px
          margin-bottom: 12px

        +laptop
          margin-top: scale-laptop(-20px, 0px)
          width: scale-laptop(380px, 456px)

        +gte_desktop
          width: 456px

      p
        letter-spacing: -0.01em
        font-weight: bold

        +lte_ipad
          font-size: rem(14px)
          line-height: 1

        +gte_laptop
          font-size: 18px
          line-height: 23px

.button
  +ipad
    margin: 0 auto

  +gte_laptop
    margin-top: -160px
    position: absolute
    z-index: 2
    opacity: 0

    .is-opened &
      opacity: 1
      margin-top: -170px

  +laptop
    transition: opacity 0.75s ease-in 0.85s, margin-top 0.5s ease-in 0.85s

  +gte_desktop
    transition: opacity 1s ease-in 1.1s, margin-top 0.5s ease-in 1.1s

a.navigation
  text-decoration: none
</style>
