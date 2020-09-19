<template>
  <Landing />
</template>

<script>
import Landing from '@/views/landing.vue';
import requireFonts from '@/utils/require_fonts';

export default {
  name: 'App',
  components: {
    Landing
  },
  created() {
    requireFonts('yjq4zkd');
  }
};
</script>

<style scoped lang='sass'>
</style>
