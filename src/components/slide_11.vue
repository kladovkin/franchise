<template>
  <div id='slide_05' class='background-cutter'>
    <article>
      <h2>{{ t('slide_11.h2') }}</h2>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Slide11'
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(120px, 180px)

  +gte_desktop
    padding-top: 180px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(32px)

  +laptop
    margin-bottom: scale-laptop(50px, 97px)

  +gte_desktop
    margin-bottom: 97px
</style>
