<template>
  <transition
    :duration='duration'
    @before-enter='beforeEnter'
    @enter='enter'
    @after-enter='afterEnter'
    @before-leave='beforeLeave'
    @leave='leave'
    @after-leave='afterLeave'
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'TransitionHeight',
  props: {
    duration: { type: [Number, Object], required: true }
  },
  data: () => ({
    height: undefined
  }),
  methods: {
    beforeEnter(el) {
      this.verifyMissingMarginsPaddings(el);
      el.style.willChange = 'height';

      el.style.height = '0';
      el.style.overflow = 'hidden';
    },
    enter(el) {
      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + 'px';
      });
    },
    afterEnter(el) {
      this.cleanup(el);
    },
    beforeLeave(el) {
      this.verifyMissingMarginsPaddings(el);
      el.style.overflow = 'hidden';
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      requestAnimationFrame(() => {
        el.style.height = '0';
      });
    },
    afterLeave(el) {
      this.cleanup(el);
    },
    cleanup(el) {
      el.style.height = '';
      el.style.overflow = '';
      el.style.willChange = '';
    },
    verifyMissingMarginsPaddings(el) {
      if (process.env.NODE_ENV === 'development') {
        const {
          paddingTop,
          paddingBottom
          // marginTop,
          // marginBottom,
          // height
        } = getComputedStyle(el);

        // if (paddingTop || paddingBottom, marginTop, marginBottom) {
        if (parseInt(paddingTop) || parseInt(paddingBottom)) {
          console.warn( // eslint-disable-line no-console
            el,
            "Has vertical padding(s) - animation won't be smooth"
          );
        }
      }
    }
  }
};
</script>

<style scoped lang='sass'>
</style>
