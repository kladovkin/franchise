<template>
  <article
    id='slide_10'
    v-waypoint='{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions
    }'
  >
    <h2>{{ t('slide_10.h2') }}</h2>
    <div class='popup'>
      <div class='person'>
        <img
          loading='lazy'
          src='../assets/slide_10/person_1.png'
        >

        <div class='info'>
          <div class='name'>
            <div>{{ t('slide_10.founder') }}</div>
            <div><b>{{ t('slide_10.founder_name') }}</b></div>
          </div>

          <div class='contacts'>
            <div>
              <a href='mailto:m.karpushin@kladovkin.ru'>
                m.karpushin@kladovkin.ru
              </a>
            </div>
            <div>
              <a href='tel:+7-916-305-22-05'>+7-916-305-22-05</a>
            </div>
          </div>
        </div>
      </div>

      <div class='person'>
        <img
          loading='lazy'
          src='../assets/slide_10/person_2.png'
        >

        <div class='info'>
          <div class='name'>
            <div>{{ t('slide_10.staff') }}</div>
            <div><b>{{ t('slide_10.staff_name') }}</b></div>
          </div>

          <div class='contacts'>
            <div>
              <a href='mailto:n.nikitina@kladovkin.ru'>
                n.nikitina@kladovkin.ru
              </a>
            </div>
            <div>
              <a href='tel:+7-495-181-55-45'>+7-495-181-55-45</a>
            </div>
          </div>
        </div>
      </div>

      <div class='address' v-html='t("slide_10.address")' />
    </div>
  </article>
  <div ref='map' class='map' />
</template>

<script>
import isMobile from '@/utils/is_mobile';
import t from '@/utils/locale';

export default {
  name: 'Slide10',
  data: () => ({
    isMapInitialized: false,
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),
  computed: {
    mapCenter() {
      return isMobile() ? [55.85, 37.57] : [55.754, 37.27];
    },
    iconOptions() {
      return isMobile() ?
        { iconImageSize: [35, 43], iconImageOffset: [-17, -43] } :
        { iconImageSize: [74, 95], iconImageOffset: [-37, -95] };
    }
  },
  methods: {
    t,
    async onWaypoint({ going }) {
      if (going !== 'in') { return; }
      if (this.isMapInitialized) { return; }
      this.isMapInitialized = true;

      const { default: ymaps } = await import(
        /* webpackChunkName: "ymaps" */
        'ymaps'
      );
      ymaps
        .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
        .then(maps => {
          const map = new maps.Map(this.$refs.map, {
            center: this.mapCenter,
            zoom: 10,
            controls: [
              'geolocationControl',
              'typeSelector',
              'fullscreenControl',
              'zoomControl',
              'rulerControl'
            ]
          });
          map.behaviors.disable('scrollZoom');

          const marker = new window.ymaps.Placemark(
            [55.866516, 37.480508],
            { },
            {
              iconLayout: 'default#imageWithContent',
              iconImageHref: '/marker.svg',
              ...this.iconOptions
            }
          );
          map.geoObjects.add(marker);
        });
    }
  }
};
</script>

<style scoped lang='sass'>
article
  padding: 0

.map
  background: #f7f7f7

h2
  +default_padding_left
  +default_padding_right

  +lte_ipad
    text-align: left
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 45px

.popup
  background: #fff
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.25)
  +default_margin_left

  +lte_ipad
    padding: rem(24px) rem(24px) rem(24px) rem(16px)
    margin: 0

  +gte_laptop
    border-radius: 25px
    padding: 45px 49px 37px 46px
    margin-top: 77px
    position: absolute
    z-index: 1

  +laptop
    width: scale-laptop(538px, 636px)

  +gte_desktop
    width: 636px

  .person
    display: flex
    align-items: center

    &:first-child
      +lte_ipad
        margin-bottom: rem(28px)

      +gte_laptop
        margin-bottom: 23px

    &:not(:first-child)
      +lte_ipad
        margin-bottom: rem(23px)

      +gte_laptop
        margin-bottom: 33px

    img
      +lte_ipad
        width: rem(85px)
        height: rem(85px)
        margin-right: rem(16px)

      +gte_laptop
        width: 120px
        height: 120px

      +laptop
        margin-right: scale-laptop(59px, 70px)

      +gte_desktop
        margin-right: 70px

    .info
      display: flex
      flex-direction: column
      letter-spacing: -0.01em

      +lte_ipad
        color: #4b4b4b
        font-size: rem(14px)
        line-height: rem(20px)

      +gte_laptop
        color: #6c6c6c
        font-size: 16px
        font-weight: 300
        height: 100px
        line-height: 20px

      b
        +lte_ipad
          font-weight: bold
          font-size: 16px
          line-height: 20px
          letter-spacing: -0.01em
          color: #4b4b4b

        +gte_laptop
          color: #333

      a
        color: inherit
        text-decoration: none

        +lte_ipad
          &:active
            text-decoration: underline

        +gte_laptop
          &:hover
            text-decoration: underline

      .name
        +lte_ipad
          margin-bottom: rem(8px)

        +gte_laptop
          margin-bottom: auto

        & > div:first-child
          +lte_ipad
            color: #6c6c6c
            font-size: rem(10px)
            line-height: rem(16px)

  .address
    font-weight: 300
    letter-spacing: -0.01em

    +lte_ipad
      color: #4B4B4B
      font-size: rem(14px)
      line-height: rem(24px)

    +gte_laptop
      color: #333
      font-size: 18px
      line-height: 23px

    b
      +lte_ipad
        display: block

      +gte_laptop
        margin-right: 10px

.map
  +iphone
    height: rem(195px)

  +ipad
    height: rem(350px)

  +gte_laptop
    height: 550px
</style>
