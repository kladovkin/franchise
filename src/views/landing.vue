<template>
  <section>
    <Slide01 />
    <Slide02 />
    <Slide03 />
    <Slide04 />
    <Slide05 />
    <Slide06 />
    <Slide07 />
    <Slide08 />
    <Slide09 />
    <Slide10 />
    <Footer />
  </section>
</template>

<script>
import Slide01 from '@/components/slide_01';
import Slide02 from '@/components/slide_02';
import Slide03 from '@/components/slide_03';
import Slide04 from '@/components/slide_04';
import Slide05 from '@/components/slide_05';
import Slide06 from '@/components/slide_06';
import Slide07 from '@/components/slide_07';
import Slide08 from '@/components/slide_08';
import Slide09 from '@/components/slide_09';
import Slide10 from '@/components/slide_10';
import Footer from '@/components/footer';

export default {
  name: 'Landing',
  components: {
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide10,
    Footer
  }
};
</script>

<style scoped lang='sass'>
</style>
