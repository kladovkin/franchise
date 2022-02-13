<template>
  <div id='slide_05' class='background-cutter'>
    <article>
      <h2>{{ t('slide_11.h2') }}</h2>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide11',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    padding-top: rem(72px)

  +laptop
    padding-top: scale-laptop(106px, 174px)

  +gte_desktop
    padding-top: 174px

h2
  text-align: center
  margin-bottom: rem(58px)
</style>
