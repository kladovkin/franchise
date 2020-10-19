import 'intersection-observer';

export default {
  beforeMount(_el, _binding, _vnode, _prevVnode) {},
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {}, // new
  unmounted() {}
};
