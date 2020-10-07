<template>
  <article>
    <h2>Контакты</h2>
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
          center: [55.7540471, 37.620405],
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
  +default_padding_right
  +default_padding_left

  +lte_ipad
    text-align: left
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 45px

.map
  +lte_ipad
    height: rem(195px)

  +gte_laptop
    height: 550px
</style>
