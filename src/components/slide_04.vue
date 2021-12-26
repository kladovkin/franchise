<template>
  <div id='slide_04' class='background-cutter'>
    <article>
      <div class='headline'>{{ t('slide_04.headline') }}</div>
    </article>
  </div>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Slide4',
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
.background-cutter
  overflow: hidden

.headline
  color: #ffffff
  font-weight: bold

  +lte_ipad
    font-size: rem(24px)
    line-height: rem(32px)

  +gte_laptop
    font-size: 32px
    line-height: 56px
</style>
