<template>
  <div class='background is-opened' id='slide_01'>
    <article>
      <a class='logo' href='https://kladovkin.ru'></a>
      <div class='outer'>
        <div class='left-content'>
          <h1 v-html='t("slide_01.h1")' />
          <p v-html='t("slide_01.h2")' />
        </div>
        <div class='right-content'>
          <div class='yield'>
            <p v-html="t('slide_01.yield')" />
          </div>
        </div>
      </div>
      <div class='lead-container'>
        <Button
          :text='t("slide_01.button")'
          type='white'
          @click='lead'
        />
        <div>
          <p>{{ t('slide_01.learn_more') }}</p>
        </div>
      </div>
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
  overflow: hidden

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

  @media screen and (min-width: 1024px) and (max-width: 1090px)
    background-size: cover

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
    content: ''
    pointer-events: none
    position: absolute
    top: 0

    +lte_ipad
      background: rgba(#000, 0.4)
      height: 100%
      width: 100%

    +laptop
      left: scale-laptop(400px, 571px)

    +gte_laptop
      background: rgba(#000, 0.2)
      height: 640px
      width: 1024px

    +desktop_hd
      left: scale-between(571px, 925px, 1200px, 1920px)

    @media screen and (min-width: 1920px) and (max-width: 1999px)
      left: scale-between(925px, 1024px, 1920px, 1999px)

    @media screen and (min-width: 2000px)
      left: calc(50% + 25px)
      width: 1032px

article
  color: #fff

  +iphone
    background-image: url(../assets/slide_01/background_upper-iphone.svg)
    padding-bottom: rem(52px)
    padding-top: rem(110px)

  +ipad
    background-image: url(../assets/slide_01/background_upper-ipad.svg)
    padding-bottom: rem(60px)
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
    min-height: 640px
    position: relative

    &:before
      background-image: url(../assets/slide_01/background_circles-desktop.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 100%
      left: 0
      pointer-events: none
      position: absolute
      top: 0
      width: 100%
      z-index: 2

  .left-content
    position: relative
    z-index: 1

    +iphone
      margin-bottom: rem(90px)

    +ipad
      margin-bottom: rem(130px)

    +gte_laptop
      background: #f44f0c
      padding-top: 149px

    +desktop
      width: scale-between(520px, 580px, 1200px, 1400px)

    +gte_hd
      width: 580px

    h1,
    p
      +gte_laptop
        max-width: 520px

    h1
      +iphone
        font-size: rem(20px)
        padding-left: rem(5px)
        padding-right: rem(5px)

      +ipad
        font-size: rem(22px)

      +lte_ipad
        margin-bottom: rem(20px)

      +gte_laptop
        margin-bottom: 24px

    p
      letter-spacing: -0.01em

      +lte_ipad
        font-size: rem(14px)
        line-height: 1.42

      +gte_laptop
        font-weight: 300
        font-size: 18px
        line-height: 26px

    &:after
      +gte_laptop
        background-image: url(../assets/slide_01/expanded-half_ellipse-desktop.svg)
        background-repeat: no-repeat
        background-size: contain
        content: ''
        height: 100%
        pointer-events: none
        position: absolute
        right: -177px
        top: 0
        width: 177px
        z-index: 2

  .right-content
    position: relative

    +gte_laptop
      display: flex
      flex-grow: 1

    .is-opened &
      .yield
        margin-top : 0
        opacity: 1
        pointer-events: auto

    .yield
      +lte_ipad
        align-items: center
        display: flex
        flex-direction: column
        margin-bottom: rem(37px)

      +gte_laptop
        left: 50%
        margin-top: 35px
        opacity: 0
        pointer-events: none
        position: absolute
        top: 50%
        transform: translateX(-50%) translateY(-50%)
        z-index: 2

        +desktop
          margin-left: scale-between(0px, 30px, 1200px, 1440px)

        +gte_hd
          margin-left: 30px

      &:before
        content: ''
        display: block

        +lte_ipad
          background-image: url(../assets/slide_01/yield-mobile.svg)
          background-repeat: no-repeat
          background-size: contain
          width: rem(191px)
          height: rem(89px)
          margin-bottom: rem(29px)

        +gte_laptop
          background-image: url(../assets/slide_01/yield-desktop.svg)
          background-position: bottom
          background-repeat: no-repeat
          background-size: contain
          margin-bottom: 28px

        +laptop
          margin-top: scale-laptop(-20px, 0px)
          width: scale-laptop(306px, 380px)
          height: scale-laptop(143px, 172px)

        +gte_desktop
          width: 380px
          height: 172px

      p
        letter-spacing: -0.01em
        font-weight: bold

        +lte_ipad
          font-size: rem(14px)
          line-height: rem(23px)

        +gte_laptop
          font-size: 18px
          line-height: 23px

.lead-container
  +gte_laptop
    align-items: center
    display: flex
    margin-top: -160px
    position: absolute
    z-index: 2

  .button
    +ipad
      margin: 0 auto

    +gte_laptop
      max-width: none
      margin-right: 50px

    +laptop_hd
      height: scale-between(48px, 57px, 1024px, 1920px)
      width: scale-between(254px, 295px, 1024px, 1920px)

    +uhd
      height: 57px
      width: 295px

  p
    border-bottom: 1px solid rgba(#fff, 0.5)
    cursor: pointer
    font-size: 14px
    line-height: 1.2

    &:hover
      border-bottom-color: #fff

    +lte_ipad
      display: none

a.navigation
  text-decoration: none
</style>
