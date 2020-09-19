<template>
  <article>
    <router-link to='/' class='logo' />
    Технологичный бизнес на вашей территории
  </article>
</template>

<script>
export default {
  name: 'Slide1'
};
</script>

<style scoped lang='sass'>
article
  background: #f44f0c

.logo
  background-image: url(../assets/slide_01/logo.svg)
  background-repeat: no-repeat
  background-size: contain
  position: absolute

  +gte_laptop
    height: 53px
    width: 200px
</style>
