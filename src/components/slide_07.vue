<template>
  <div>
    <div class='container'>
      <h2>Комиссия&nbsp;управляющей компании</h2>
    </div>
    <div class='background'>
      <article>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide7'
};
</script>

<style scoped lang='sass'>
h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 45px

.background
  background: #5096FF
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.05)

article
  +gte_laptop
    height: 223px
</style>
