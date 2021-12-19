<template>
  <div id='slide_04' class='background-cutter'>
    <article>
      <div class='switchers'>
        <div
          class='switcher'
          :class='{ "is-active": isOwner }'
          @click='() => switchswitcher("owner")'
        >
          {{ t('slide_04.switcher.owner') }}
        </div>
        <div
          class='switcher'
          :class='{ "is-active": isTenant }'
          @click='() => switchswitcher("tenant")'
        >
          {{ t('slide_04.switcher.tenant') }}
        </div>
      </div>
      <div v-if='isOwner' class='slide slide-owner'>
        <h2>{{ t('slide_04.owner.h2') }}</h2>
        <div class='note'>{{ t('slide_04.owner.note') }}</div>
        <ul>
          <li>
            <div>{{ t('slide_04.owner.list_1.title') }}</div>
            <p>{{ t('slide_04.owner.list_1.body') }}</p>
          </li>
          <li>
            <div>{{ t('slide_04.owner.list_2.title') }}</div>
            <p v-html='t("slide_04.owner.list_2.body")' />
          </li>
          <li>
            <div>{{ t('slide_04.owner.list_3.title') }}</div>
            <p>{{ t('slide_04.owner.list_3.body') }}</p>
          </li>
          <li>
            <div>{{ t('slide_04.owner.list_4.title') }}</div>
          </li>
        </ul>
        <picture>
          <source srcset='../assets/slide_04/laptop.webp' type='image/webp'>
          <img
            class='laptop'
            loading='lazy'
            src='../assets/slide_04/laptop.png'
          >
        </picture>
      </div>
      <div v-if='isTenant' class='slide slide-tenant'>
        <h2 v-html='t("slide_04.tenant.h2")' />
        <div class='note'>{{ t('slide_04.tenant.note') }}</div>
        <ul>
          <li>
            <p>{{ t('slide_04.tenant.list_1') }}</p>
          </li>
          <li>
            <p>{{ t('slide_04.tenant.list_2') }}</p>
          </li>
          <li>
            <p>{{ t('slide_04.tenant.list_3') }}</p>
          </li>
          <li>
            <p v-html='t("slide_04.tenant.list_4")' />
          </li>
          <li>
            <p>{{ t('slide_04.tenant.list_5') }}</p>
          </li>
          <li>
            <p v-html='t("slide_04.tenant.list_6")' />
          </li>
          <li>
            <p>{{ t('slide_04.tenant.list_7') }}</p>
          </li>
        </ul>
        <picture>
          <source srcset='../assets/slide_04/ipad.webp' type='image/webp'>
          <img
            class='ipad'
            loading='lazy'
            src='../assets/slide_04/ipad.png'
          >
        </picture>
      </div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide4',
  data: () => ({
    switcher: 'owner'
  }),
  computed: {
    isOwner() {
      return this.switcher === 'owner';
    },
    isTenant() {
      return this.switcher === 'tenant';
    }
  },
  methods: {
    t,
    switchswitcher(switcher) {
      this.switcher = switcher;
    }
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  overflow: hidden

  +gte_laptop
    min-height: 1146px

article
  +lte_ipad
    padding-top: rem(25px)
    /* padding-top: rem(185px) */
    padding-bottom: rem(424px)
    margin-bottom: rem(-25px)

  +gte_laptop
    padding-top: 125px
    padding-bottom: 151px

  &:before
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    z-index: -1

    +lte_ipad
      background-image: url(../assets/slide_04/circles-mobile.svg)
      height: rem(124px)
      left: 0
      margin-top: rem(-26px)
      width: rem(105px)

    +gte_laptop
      background-image: url(../assets/slide_04/circles-desktop.svg)
      height: 104px
      margin-top: 152px
      width: 105px

    +laptop
      margin-left: scale-laptop(0px, 62px)

    +gte_desktop
      margin-left: 62px

.switchers
  align-items: center
  background: #f4f4f4
  border-radius: rem(40px)
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.15)
  display: flex
  margin: 0 auto

  +lte_ipad
    height: rem(48px)
    margin-bottom: rem(40px)
    padding: rem(4px)
    width: rem(288px)

  +gte_laptop
    height: 65px
    margin-bottom: 52px
    padding: 5px
    width: 350px

  .switcher
    -webkit-tap-highlight-color: transparent
    align-items: center
    background-color: transparent
    border-radius: 40px
    color: #939393
    display: flex
    height: 100%
    justify-content: center
    text-align: center
    transition: box-shadow 0.25s, color 0.25s, background-color 0.25s
    user-select: none
    width: 50%

    +lte_ipad
      font-size: rem(12px)

    +gte_laptop
      font-size: 16px

    &.is-active
      background-color: #f44f0c
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25)
      color: #FFF
      font-weight: bold

    &:not(.is-active)
      cursor: pointer

      +gte_laptop
        &:hover
          color: #f44f0c

    &:active
      background-color: #5096ff
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25)
      color: #fff !important
      font-weight: bold

h2
  color: #4b4b4b

  +lte_ipad
    margin-bottom: rem(12px)

  +gte_laptop
    margin: 0 auto 21px
    max-width: 796px
    text-align: center

.note
  color: #6c6c6c
  letter-spacing: -0.01em
  text-align: center

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(18px)
    margin-bottom: rem(40px)

  +gte_laptop
    font-size: 18px
    line-height: 23px
    margin: 0 auto 84px
    max-width: 340px

.slide
  +ipad
    padding-top: rem(20px)

  +gte_laptop
    position: relative

  &-owner:before
    background-image: url(../assets/slide_04/circle_red.svg)

  &-tenant:before
    background-image: url(../assets/slide_04/circle_blue.svg)

  &:before
    background-repeat: no-repeat
    background-size: contain
    content: ''
    pointer-events: none
    position: absolute

    +lte_ipad
      bottom: rem(70px)
      height: rem(330px)
      left: rem(76px)
      width: rem(330px)

    +ipad
      margin-left: rem(120px)

    +laptop
      height: scale-laptop(500px, 652px)
      right: scale-laptop(-182px, -237px)
      top: scale-laptop(222px, 122px)
      width: scale-laptop(500px, 652px)

    +gte_desktop
      height: 652px
      right: -237px
      top: 122px
      width: 652px

  .laptop
    max-width: none
    pointer-events: none
    position: absolute
    z-index: 1

    +lte_ipad
      bottom: rem(70px)
      height: rem(300px)
      left: rem(-55px)
      width: rem(460px)

    +ipad
      margin-left: rem(120px)

    +laptop_desktop
      right: scale-between(-180px, -324px, 1024px, 1440px)
      top: scale-between(136px, 82px, 1024px, 1440px)
      width: scale-between(793px, 1081px, 1024px, 1440px)

    +gte_hd
      top: 82px
      width: 1081px
      right: -324px

  .ipad
    max-width: none
    pointer-events: none
    position: absolute
    z-index: 1

    +lte_ipad
      bottom: rem(45px)
      left: rem(-39px)
      transform: scaleX(-1)
      width: rem(393px)

    +ipad
      margin-left: rem(120px)

    +gte_laptop
      top: 62px

    +laptop
      right: scale-laptop(-64px, -146px)
      margin-top: scale-between(0, -34px, 1024px, 1200px)
      width: scale-laptop(700px, 775px)

    +gte_desktop
      right: -146px
      margin-top: -34px
      width: 775px

  ul li
    position: relative

    +lte_ipad
      padding-left: rem(48px)

    +gte_laptop
      padding-left: 84px

    &:before
      content: ''
      background-image: url(../assets/checkmark.svg)
      background-repeat: no-repeat
      background-size: contain
      position: absolute
      left: 0

      +lte_ipad
        height: rem(24px)
        width: rem(24px)

      +gte_laptop
        top: rem(-7px)
        height: 40px
        width: 40px

    &:not(:last-child)
      +lte_ipad
        margin-bottom: rem(24px)

      +gte_laptop
        margin-bottom: 38px

    div
      font-weight: bold
      letter-spacing: 0.01em

      +lte_ipad
        color: #4b4b4b
        font-size: rem(14px)
        line-height: rem(18px)

      +gte_laptop
        color: #333333
        font-size: 18px
        line-height: 23px

      &:not(:last-child)
        margin-bottom: rem(8px)

    p
      color: #6c6c6c
      letter-spacing: -0.01em

      +lte_ipad
        font-size: rem(12px)
        line-height: rem(18px)

      +gte_laptop
        font-size: 16px
        line-height: 23px

      span
        font-weight: 300

  &-owner ul li p
    +gte_laptop
      max-width: 386px

  &-tenant ul
    +gte_laptop
      margin-top: -16px

    li
      +gte_laptop
        align-items: center
        display: flex
        min-height: 58px

        &:not(:last-child)
          margin-bottom: 21px

        &:before
          top: 50%
          transform: translateY(-50%)

      p
        +lte_ipad
          font-size: rem(14px)
          line-height: rem(18px)

        +gte_laptop
          max-width: 271px
  </style>
