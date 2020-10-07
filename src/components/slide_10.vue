<template>
  <article>
    <h2>Контакты</h2>
    <div class='popup'>
    </div>
  </article>
  <div ref='map' class='map' />
</template>

<script>
import ymaps from 'ymaps';

export default {
  name: 'Slide10',
  mounted() {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then(maps => {
        const map = new maps.Map(this.$refs.map, {
          center: [55.754, 37.27],
          zoom: 10,
          controls: []
        });

        const marker = new window.ymaps.Placemark(
          [55.866516, 37.480508],
          {
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '/marker.svg',
            iconImageSize: [74, 95],
            iconImageOffset: [-37, -95]
          }
        );
        map.geoObjects.add(marker);
      });
  }
};
</script>

<style scoped lang='sass'>
h2
  +lte_ipad
    text-align: left
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 45px

.popup
  background: #fff
  box-shadow: 5px 4px 15px rgba(0, 0, 0, 0.25)

  +lte_ipad

  +gte_laptop
    border-radius: 25px
    margin-top: 77px
    position: absolute
    z-index: 1

  +laptop
    width: scale-laptop(538px, 636px)
    height: scale-laptop(345px, 409px)

  +gte_desktop
    width: 636px
    height: 409px

.map
  +lte_ipad
    height: rem(195px)

  +gte_laptop
    height: 550px
</style>
