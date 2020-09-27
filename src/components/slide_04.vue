<template>
  <article>
    <div class='switchers'>
      <div
        class='switcher'
        :class='{ "is-active": isOwner }'
        @click='() => switchswitcher("owner")'
      >
        Собственникам
      </div>
      <div
        class='switcher'
        :class='{ "is-active": isTenant }'
        @click='() => switchswitcher("tenant")'
      >
        Арендаторам
      </div>
    </div>
    <div v-if='isOwner' class='slide'>
      <h2>Организуем эффективный бизнес Self Storage с помощью IT-технологий</h2>
      <div class='note'>
        Полная автоматизация бизнес-процессов для собственника
      </div>
      <ul>
        <li>
          <div>Автоматизированные процессы управления</div>
          <p>Автоматизированные процессы управления</p>
        </li>
        <li>
          <div>Личный кабинет собственника</div>
          <p>
            С доступом к ежедневным аналитическим отчетам и ключевым
            показателям эффективности (<span>EBITDA</span>, <span>LTV</span>,
            <span>IRR</span> и др.)
          </p>
        </li>
        <li>
          <div>Личный кабинет сотрудника</div>
          <p>
            С системой функциональных обязанностей
            и должностных инструкций, способной подсказать сотруднику
            его следующий шаг
          </p>
        </li>
        <li>
          <div>Сквозная веб-аналитика</div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
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
    switchswitcher(switcher) {
      this.switcher = switcher;
    }
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(185px)
    padding-bottom: rem(424px)

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
      margin-left: scale-between(0px, 62px, 1024px, 1280px)

    +gte_desktop
      margin-left: 62px

  &:after
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    background-image: url(../assets/slide_04/circle_red.svg)
    /* pointer-events: none */

    +lte_ipad
      left: rem(76px)
      bottom: rem(70px)
      width: rem(330px)
      height: rem(330px)

    +gte_laptop
      right: 0
      bottom: 100px

    +laptop_desktop
      width: scale-between(500px, 652px, 1024px, 1280px)
      height: scale-between(500px, 652px, 1024px, 1280px)

    +gte_desktop
      width: 652px
      height: 652px

.switchers
  align-items: center
  background: #f4f4f4
  border-radius: 40px
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
      font-size: 12px

    +gte_laptop
      font-size: 16px

    &.is-active
      background-color: #f44f0c
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25)
      color: #FFF
      font-weight: 700

    &:not(.is-active)
      cursor: pointer

      +gte_laptop
        &:hover
          color: #f44f0c

    &:active
      background-color: #5096ff
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25)
      color: #fff !important
      font-weight: 700

h2
  color: #4b4b4b
  text-align: center

  +lte_ipad
    margin-bottom: rem(12px)

  +gte_laptop
    margin: 0 auto 21px
    max-width: 796px

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
    margin-bottom: 84px

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
    font-weight: 900
    letter-spacing: -0.01em

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
    max-width: 386px

    +lte_ipad
      font-size: rem(12px)
      line-height: rem(18px)

    +gte_laptop
      font-size: 16px
      line-height: 23px

    span
      font-weight: 300
</style>
