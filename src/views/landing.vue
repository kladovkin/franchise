<template>
  <Menu />
  <Slide01 />
  <Slide02 />
  <Slide03 />
  <Slide04 />
  <Slide05 />
  <Slide06 />
  <Slide08 />
  <Slide09 />
  <Slide10 />
  <Slide11 />
  <Slide12 />
  <Footer />
</template>

<script>
// import { defineAsyncComponent } from 'vue';

import Menu from '@/components/menu';
import Slide01 from '@/components/slide_01';
import Slide02 from '@/components/slide_02';
import Slide03 from '@/components/slide_03';
import Slide04 from '@/components/slide_04';
import Slide05 from '@/components/slide_05';
import Slide06 from '@/components/slide_06';
import Slide08 from '@/components/slide_08';
import Slide09 from '@/components/slide_09';
import Slide10 from '@/components/slide_10';
import Slide11 from '@/components/slide_11';
import Slide12 from '@/components/slide_12';
import Footer from '@/components/footer';

export default {
  name: 'Landing',
  components: {
    Menu,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide08,
    Slide09,
    Slide10,
    Slide11,
    Slide12,
    // Slide11: defineAsyncComponent(
    //   () => import(/* webpackChunkName: "map" */ '@/components/slide_12')
    // ),
    Footer
  }
};
</script>

<style scoped lang='sass'>
</style>
