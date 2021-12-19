<template>
  <div id='slide_06' class='background-cutter'>
    <article>
      <h2 v-html='t("slide_06.h2")' />
      <div class='area'>
        <div class='entry-wrapper entry-wrapper-1'>
          <div class='entry entry-1'>
            <div class='circle'>2 {{ t('slide_06.days') }}</div>
            <div class='info'>
              <b v-html='t("slide_06.info_1.title")' />
              <p v-html='t("slide_06.info_1.body")' />
            </div>
          </div>
        </div>
        <div class='entry-wrapper entry-wrapper-2'>
          <div class='entry entry-2'>
            <div class='circle'>2 {{ t('slide_06.days') }}</div>
            <div class='info'>
              <b v-html='t("slide_06.info_2.title")' />
              <p v-html='t("slide_06.info_2.body")' />
              <div>
                <b>{{ t('slide_06.info_2.note.price') }}</b>
                <p>{{ t('slide_06.info_2.note.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class='entry-wrapper entry-wrapper-3'>
          <div class='entry entry-3'>
            <picture class='design-project' @click='enlarge'>
              <source src='../assets/slide_06/design_project.webp' type='image/webp'>
              <img loading='lazy' src='../assets/slide_06/design_project.jpg'>
            </picture>
            <div class='circle top'>7 {{ t('slide_06.days_2') }}</div>
            <div class='info'>
              <b v-html='t("slide_06.info_3.title")' />
              <p v-html='t("slide_06.info_3.body")' />
            </div>
          </div>
        </div>
        <div class='entry-wrapper entry-wrapper-4'>
          <div class='entry entry-4'>
            <div class='circle'>45 {{ t('slide_06.days_2') }}</div>
            <div class='info'>
              <b v-html='t("slide_06.info_4.title")' />
              <p v-html='t("slide_06.info_4.body")' />
              <div>
                <b>{{ t('slide_06.info_4.note.price') }}</b>
                <p>{{ t('slide_06.info_4.note.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class='entry-wrapper entry-wrapper-5'>
          <div class='entry entry-5'>
            <div class='circle top'>7 {{ t('slide_06.days_2') }}</div>
            <div class='info'>
              <b v-html='t("slide_06.info_5.title")' />
              <p v-html='t("slide_06.info_5.body")' />
            </div>
          </div>
        </div>
        <div class='entry-wrapper entry-wrapper-6'>
          <div class='entry entry-6'>
            <div class='circle top logo' />
            <div class='info'>
              <b v-html='t("slide_06.info_6.title")' />
              <p class='final-bold' v-html='t("slide_06.info_6.body")' />
              <p class='list' v-html='t("slide_06.info_6.list")' />
            </div>
            <img
              class='background'
              loading='lazy'
              src='../assets/slide_06/background_final.jpg'
            >
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide6',
  methods: {
    t,
    async enlarge() {
      const { default: SimpleLightbox } = await import(
        /* webpackChunkName: "lightbox" */ 'simple-lightbox'
      );

      SimpleLightbox.open({
        items: ['/schema.png']
      });
    }
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  overflow: hidden

article
  +lte_ipad
    padding-top: rem(25px)
    margin-bottom: rem(80px)

h2
  +lte_ipad
    margin-bottom: 54px

  +gte_laptop
    margin: 0 auto 82px
    max-width: 727px
    text-align: center

.area
  position: relative

  +gte_laptop
    margin: 0 auto

  +laptop
    max-width: 100%
    height: scale-laptop(2587px, 2913px)

  +gte_desktop
    height: 2913px

  &:before
    content: ''
    position: absolute
    z-index: -1

    +lte_ipad
      background: #f6f5fe
      height: rem(840px)
      left: rem(35px)
      top: rem(42px)
      width: rem(16px)

    +gte_laptop
      background-image: url(../assets/slide_06/background_line-desktop.svg)
      background-repeat: no-repeat
      background-size: cover
      left: 50%
      transform: translateX(-50%)

    +laptop
      width: scale-laptop(964px, 1096px)
      height: scale-laptop(2587px, 2913px)
      top: scale-laptop(108px, 130px) // it is intentionally 15px less than on desktop

    +gte_desktop
      background-size: 1096px 2913px
      top: 145px
      width: 1096px
      height: 2913px

.entry
  display: flex

  +iphone
    margin-bottom: rem(40px)

  +ipad
    margin-bottom: rem(55px)

  +lte_ipad
    color: #4b4b4b

    .entry-wrapper:last-child &
      margin-bottom: 0

  +gte_laptop
    color: #333

  .circle
    align-items: center
    align-self: flex-end
    background-repeat: no-repeat
    background-size: contain
    display: flex
    flex-shrink: 0
    font-weight: bold
    justify-content: center
    position: relative
    z-index: 1

    &.top
      align-self: flex-start

    +lte_ipad
      background-image: url(../assets/slide_06/circle-mobile.svg)
      font-size: rem(14px)
      height: rem(85px)
      line-height: rem(16px)
      margin-right: rem(16px)
      width: rem(85px)

    +gte_laptop
      background-image: url(../assets/slide_06/circle-desktop.svg)
      font-size: 30px
      height: 160px
      line-height: 23px
      margin-right: 28px
      width: 160px

    &.logo
      background-image: url(../assets/slide_06/circle_logo.svg)

      +gte_laptop
        align-self: center

  .info
    +ipad
      max-width: rem(360px)

    +lte_ipad
      display: flex
      flex-direction: column
      justify-content: center

    b
      display: block
      font-weight: bold

      +lte_ipad
        font-size: rem(14px)
        line-height: rem(18px)
        margin-bottom: rem(4px)

      +gte_laptop
        font-size: 18px
        line-height: 23px
        margin-bottom: rem(4px)

    p
      +lte_ipad
        color: #6c6c6c
        font-size: rem(12px)
        line-height: rem(16px)

      +gte_laptop
        color: #4B4B4B
        font-size: 16px
        line-height: 23px

      &.final-bold
        margin-top: rem(16px)
        font-weight: bold
        color: inherit

        +lte_ipad
          margin-top: rem(8px)
          margin-bottom: rem(12px)

      &.list
        white-space: nowrap

      &:not(:last-child)
        +lte_ipad
          margin-bottom: rem(12px)

    div
      justify-content: center
      background: #f44f0c
      border-radius: 10px
      display: flex
      flex-direction: column

      +lte_ipad
        height: rem(52px)
        width: rem(255px)
        margin-left: rem(-68px)
        padding-left: rem(68px)

      +gte_laptop
        height: rem(95px)
        margin-left: rem(-108px)
        padding-left: rem(108px)

      b
        color: #fff
        font-weight: bold

        +lte_ipad
          font-size: rem(18px)
          line-height: rem(24px)
          margin-bottom: rem(1px)

        +gte_laptop
          font-size: 18px
          line-height: 23px
          margin-bottom: -3px

      p
        color: #fff

        +gte_laptop
          font-weight: normal

  &-1
    +gte_laptop
      align-items: center
      flex-direction: row-reverse

      .circle
        margin-right: 0

      .info
        max-width: 250px

        & > b
          margin-bottom: 5px

    .info
      +laptop
        margin-right: scale-laptop(60px, 111px)

      +gte_desktop
        margin-right: 111px

  &-2
    +iphone
      margin-bottom: rem(50px)

    +ipad
      margin-bottom: rem(70px)

    +gte_laptop
      align-items: flex-end

      .info
        & > b
          margin-bottom: 3px

        & > p
          margin-bottom: 30px

        & > div
          width: 369px

    +laptop
      margin-top: scale-laptop(-80px, 107px)

    +gte_desktop
      margin-top: 107px

  &-3
    +iphone
      margin-bottom: rem(50px)

    +lte_ipad
      .design-project
        display: none

    +gte_laptop
      align-items: center
      flex-direction: row-reverse

      .design-project
        cursor: pointer

      .circle
        margin-right: 0

      .info
        max-width: 350px

        & > b
          max-width: 300px
          margin-bottom: 16px

    +laptop
      margin-top: scale-laptop(-233px, -4px)

      .info
        margin-right: scale-laptop(41px, 29px)

    +gte_desktop
      margin-top: -4px

      .info
        margin-right: 29px

  &-4
    +iphone
      margin-bottom: rem(50px)

    +ipad
      margin-bottom: rem(70px)

    +gte_laptop
      align-items: flex-end

      .info
        & > b
          margin-bottom: 13px
          max-width: 230px

        & > p
          margin-bottom: 37px
          max-width: 350px

        & > div
          width: 462px

    +laptop
      margin-top: scale-laptop(-381px, 61px)

    +gte_desktop
      margin-top: 61px

  &-5
    +ipad
      margin-bottom: rem(70px)

    +gte_laptop
      align-items: center
      flex-direction: row-reverse

      .circle
        margin-right: 0

      .info
        max-width: 360px

    +laptop
      margin-top: scale-laptop(-435px, 6px)

      .info
        margin-right: scale-laptop(32px, 20px)

    +gte_desktop
      margin-top: 6px

      .info
        margin-right: 20px

  &-6
    +iphone
      position: relative
      padding-bottom: rem(230px)

    +ipad
      position: relative
      padding-bottom: rem(300px)

    +laptop
      margin-top: scale-laptop(-587px, -73px)
      margin-left: -14px

    +gte_desktop
      margin-top: -73px

    .background
      +lte_ipad
        max-width: 100%
        bottom: 0
        position: absolute

      +gte_laptop
        position: absolute
        right: -87px

      +laptop
        width: scale-laptop(464px, 540px)
        margin-top: scale-laptop(-54px, -84px)

      +gte_desktop
        width: 540px
        margin-top: -84px
        right: -80px

.entry-wrapper
  position: relative
  display: flex
  align-items: center

  img.background
    border-radius: 50px

    +lte_ipad
      border-radius: 30px

  &:before
    content: ''
    background-repeat: no-repeat
    background-size: contain
    position: absolute

  &-1
    +laptop
      height: scale-laptop(279px, 341px)
      margin-bottom: scale-laptop(61px, -62px)

      &:before
        height: scale-laptop(279px, 341px)
        width: scale-laptop(451px, 491px)
        left: scale-laptop(-68px, -35px)

    +gte_desktop
      height: 341px
      justify-content: flex-end
      margin-bottom: -62px

      &:before
        height: 341px
        left: -35px
        width: 491px

    &:before
      +gte_laptop
        background-image: url(../assets/slide_06/entry_wrapper_1.png)

        .webp &
          background-image: url(../assets/slide_06/entry_wrapper_1.webp)

  &-2
    +laptop
      height: scale-laptop(409px, 531px)
      margin-bottom: scale-laptop(157px, 110px)

      &:before
        height: scale-laptop(407px, 531px)
        right: scale-laptop(-111px, -162px)
        width: scale-laptop(533px, 682px)
        top: scale-laptop(-44px, 33px)

    +gte_desktop
      height: 531px
      margin-bottom: 110px

      &:before
        height: 531px
        right: -162px
        width: 682px
        top: 33px

    &:before
      +gte_laptop
        background-image: url(../assets/slide_06/entry_wrapper_2.png)

        .webp &
          background-image: url(../assets/slide_06/entry_wrapper_2.webp)

  &-3
    +gte_laptop
      justify-content: flex-end

    +laptop
      height: scale-laptop(215px, 247px)
      margin-bottom: scale-laptop(205px, 70px)

      .design-project
        height: scale-laptop(215px, 247px)
        width: scale-laptop(384px, 443px)

    +gte_desktop
      height: 247px
      margin-bottom: 70px

      .design-project
        height: 247px
        width: 443px

    .design-project
      position: absolute
      left: 0

  &-4
    +laptop
      height: scale-laptop(297px, 435px)
      margin-bottom: scale-laptop(42px, 23px)

      &:before
        height: scale-laptop(297px, 337px)
        right: scale-laptop(-53px, -46px)
        top: scale-laptop(-127px, 82px)
        width: scale-laptop(446px, 506px)

    +gte_desktop
      height: 435px
      margin-bottom: 23px

    +desktop
      &:before
        height: scale-between(337px, 435px, 1200px, 1440px)
        width: scale-between(506px, 652px, 1200px, 1440px)
        right: scale-between(-46px, -403px, 1200px, 1440px)
        top: scale-between(82px, 50px, 1200px, 1440px)

    +gte_hd
      &:before
        height: 435px
        right: -403px
        top: 50px
        width: 652px

    &:before
      +gte_laptop
        background-image: url(../assets/slide_06/entry_wrapper_4.png)

        .webp &
          background-image: url(../assets/slide_06/entry_wrapper_4.webp)

  &-5
    +gte_laptop
      justify-content: flex-end

    +laptop
      height: 585px
      margin-bottom: scale-laptop(80px, 54px)

      &:before
        height: scale-laptop(445px, 575px)
        left: scale-laptop(-147px, -184px)
        width: scale-laptop(445px, 575px)
        top: scale-laptop(-158px, 33px)

    +gte_desktop
      height: 585px
      margin-bottom: 54px

      &:before
        height: 575px
        left: -184px
        width: 575px
        top: 33px

    &:before
      +gte_laptop
        background-image: url(../assets/slide_06/entry_wrapper_5.png)

        .webp &
          background-image: url(../assets/slide_06/entry_wrapper_5.webp)

  &-6
    +laptop
      height: scale-laptop(283px, 380px)

    +gte_desktop
      height: 380px
</style>

<style lang='sass'>
@import ../../node_modules/simple-lightbox/dist/simpleLightbox.css
</style>
