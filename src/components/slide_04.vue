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
    <h2>Организуем эффективный бизнес Self Storage с помощью IT-технологий</h2>
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

  +gte_laptop
    padding-top: 125px

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
</style>
