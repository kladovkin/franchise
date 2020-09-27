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

h2
  color: #4b4b4b

  +gte_laptop
    margin: 0 auto
    max-width: 796px
    text-align: center
</style>
