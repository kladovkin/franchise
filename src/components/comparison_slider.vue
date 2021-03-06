<template>
  <div
    class='comparison-slider-wrapper'
    v-waypoint='{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions
    }'
  >
    <div class='comparison-slider' ref='container'>
      <img loading='lazy' src='../assets/comparison_slider/slide_before.jpg'>

      <div
        class='resize'
        ref='resize'
      >
        <img loading='lazy' src='../assets/comparison_slider/slide_after.jpg' >
      </div>
      <div
        class='divider'
        :class='{ "is-dragged": isDragged }'
        ref='divider'
      />
    </div>
  </div>
</template>

<script>
import offset from '@/utils/offset';
import isMobile from '@/utils/is_mobile';

export default {
  name: 'ComparisonSlider',
  data: () => ({
    isInitialized: false,
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    isTouched: false,
    isDragged: false,

    dragWidth: null,
    posX: null,
    containerOffset: null,
    containerWidth: null,
    minLeft: null,
    maxLeft: null,

    disablePageScroll: () => {},
    enablePageScroll: () => {}
  }),
  computed: {
    dividerNode() { return this.$refs.divider; },
    resizeNode() { return this.$refs.resize; },
    containerNode() { return this.$refs.container; }
  },
  beforeUnmount() {
    this.dragEnd();
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchend', this.touchEnd);
    window.removeEventListener('touchcancel', this.touchEnd);
  },
  methods: {
    async onWaypoint({ going }) {
      if (going !== 'in') { return; }
      if (this.isInitialized) { return; }
      this.isInitialized = true;

      this.initSlider();
    },
    async initSlider() {
      window.addEventListener('touchstart', this.touchStart);
      window.addEventListener('touchend', this.touchEnd);
      window.addEventListener('touchcancel', this.touchEnd);

      this.dividerNode.addEventListener('mousedown', this.dragStart);
      this.dividerNode.addEventListener('touchstart', this.dragStart);

      this.dividerNode.addEventListener('mouseup', this.dragEnd);
      this.dividerNode.addEventListener('touchend', this.dragEnd);
      this.dividerNode.addEventListener('touchcancel', this.dragEnd);

      const { disablePageScroll, enablePageScroll } = await import(
        /* webpackChunkName: "scroll-lock" */
        'scroll-lock'
      );

      this.disablePageScroll = disablePageScroll;
      this.enablePageScroll = enablePageScroll;
    },
    dragStart(e) {
      this.isDragged = true;

      window.addEventListener('mousemove', this.dragMove);
      window.addEventListener('touchmove', this.dragMove);

      window.addEventListener('mouseup', this.dragEnd);
      window.addEventListener('touchend', this.dragEnd);
      window.addEventListener('touchcancel', this.dragEnd);

      const minOffset = isMobile() ? 25 : 37;

      let startX = e.pageX ? e.pageX : e.touches[0].pageX;

      this.dragWidth = this.dividerNode.offsetWidth;
      this.posX = offset(this.dividerNode).left + this.dragWidth - startX;
      this.containerOffset = offset(this.containerNode).left;
      this.containerWidth = this.containerNode.offsetWidth;
      this.minLeft = this.containerOffset + minOffset;
      this.maxLeft = this.containerOffset + this.containerWidth -
        this.dragWidth - minOffset;

      this.disablePageScroll();
    },
    dragMove(e) {
      if (this.isTouched === false) {
        e.preventDefault();
      }

      let moveX = e.pageX ? e.pageX : e.touches[0].pageX;
      let leftValue = moveX + this.posX - this.dragWidth;

      // stop the divider from going over the limits of the containerNode
      if (leftValue < this.minLeft) {
        leftValue = this.minLeft;
      } else if (leftValue > this.maxLeft) {
        leftValue = this.maxLeft;
      }

      let widthValue = (
        leftValue + this.dragWidth / 2 - this.containerOffset
      ) * 100 / this.containerWidth + '%';


      this.dividerNode.style.left = widthValue;
      this.resizeNode.style.width = widthValue;
    },
    dragEnd() {
      this.isDragged = false;
      this.enablePageScroll();

      window.removeEventListener('mousemove', this.dragMove);
      window.removeEventListener('touchmove', this.dragMove);

      window.removeEventListener('mouseup', this.dragEnd);
      window.removeEventListener('touchend', this.dragEnd);
      window.removeEventListener('touchcancel', this.dragEnd);
    },
    touchStart() {
      this.isTouched = true;
    },
    touchEnd() {
      this.isTouched = false;
    }
  }
};
</script>

<style scoped lang='sass'>

.comparison-slider-wrapper
  position: relative
  overflow: hidden

  +lte_ipad
    border-radius: rem(40px)

  +gte_laptop
    border-radius: 50px

.comparison-slider
  box-sizing: border-box
  margin: 0
  position: relative
  width: 100%

  > img
    display: block
    height: auto
    user-select: none
    width: 100%

.resize
  height: 100%
  left: 0
  overflow: hidden
  position: absolute
  top: 0
  width: 50%

  > img
    display: block
    height: 100%
    user-select: none

  .overlay
    left: 20px
    right: auto
    text-align: left

.divider
  background-color: #f44f0c
  bottom: 0
  cursor: ew-resize
  height: 100%
  left: 50%
  margin-left: -1px
  position: absolute
  top: 0
  width: 2px

  &:before
    background-image: url(../assets/comparison_slider/divider.svg)
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    top: 50%

    +iphone
      left: rem(-21px)
      margin-top: rem(-22px)
      height: rem(44px)
      width: rem(44px)

    +ipad
      left: -29px
      margin-top: -30px
      height: 60px
      width: 60px

    +gte_laptop
      left: -32px
      margin-top: -33px
      height: 66px
      width: 66px

  &.is-dragged:before
    background-image: url(../assets/comparison_slider/divider-active.svg)
</style>
