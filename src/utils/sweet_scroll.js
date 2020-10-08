let instance;

export default {
  async asyncInstance() {
    const { default: SweetScroll } =
      await import(/* webpackChunkName: "sweet-scroll" */ 'sweet-scroll');

    if (!instance) {
      instance = new SweetScroll();
    }

    return instance;
  }
};
