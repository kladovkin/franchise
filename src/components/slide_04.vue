<template>
  <article>
    <div class='tabs'>
      <div
        class='tab'
        :class='{ "is-active": isOwner }'
        @click='() => switchTab("owner")'
      >
        Собственникам
      </div>
      <div
        class='tab'
        :class='{ "is-active": isTenant }'
        @click='() => switchTab("tenant")'
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
    tab: 'owner'
  }),
  computed: {
    isOwner() {
      return this.tab === 'owner';
    },
    isTenant() {
      return this.tab === 'tenant';
    }
  },
  methods: {
    switchTab(tab) {
      this.tab = tab;
    }
  }
};
</script>

<style scoped lang='sass'>
article
  +gte_laptop
    padding-top: 125px

.tabs
  align-items: center
  background: #f4f4f4
  border-radius: 40px
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.15)
  display: flex
  margin: 0 auto

  +lte_ipad
    height: rem(48px)
    width: rem(288px)
    padding: rem(4px)

  +gte_laptop
    height: 65px
    width: 350px
    padding: 5px

  .tab
    flex-grow: 1
    text-align: center
    color: #939393
    display: flex
    align-items: center
    justify-content: center
    height: 100%

    +gte_laptop
      font-size: 16px

    &.is-active
      background: #f44f0c
      border-radius: 40px
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25)
      color: #FFF
      font-weight: 700

      +lte_ipad
        font-size: 12px

      +gte_laptop
        font-size: 16px

    &:not(.is-active)
    cursor: pointer

h2
  color: #4b4b4b

  +gte_laptop
    margin: 0 auto
    max-width: 796px
    text-align: center
</style>
