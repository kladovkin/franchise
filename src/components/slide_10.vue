<template>
  <article>
    <h2>Контакты</h2>
    <div class='popup'>
      <div class='person'>
        <img
          loading='lazy'
          src='../assets/slide_10/person_1.png'
        />

        <div class='info'>
          <div>
            <span>Основатель</span>
            <span><b>Карпушин Михаил</b></span>
          </div>

          <div>
            <span>
              <a href='mailto:m.karpushin@kladovkin.ru'>
                m.karpushin@kladovkin.ru
              </a>
            </span>
            <span>
              <a href='tel:+7-916-305-22-05'>+7-916-305-22-05</a>
            </span>
          </div>
        </div>
      </div>

      <div class='person'>
        <img
          loading='lazy'
          src='../assets/slide_10/person_2.png'
        />

        <div class='info'>
          <div>
            <span>Руководитель отдела франчайзинга</span>
            <span><b>Никитина Наталья</b></span>
          </div>

          <div>
            <span>
              <a href='mailto:n.nikitina@kladovkin.ru'>
                n.nikitina@kladovkin.ru
              </a>
            </span>
            <span>
              <a href='tel:+7-495-181-55-45'>+7-495-181-55-45</a>
            </span>
          </div>
        </div>
      </div>

      <div class='address'>
        <b>Юридический адрес:</b>г. Москва, ул. Беломорская, 36
      </div>
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
article
  +lte_ipad
    padding: 0

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
    padding: rem(24px) rem(45px) rem(24px) rem(16px)

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
      margin-bottom: 23px

    &:not(:first-child)
      margin-bottom: 33px

    img
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

      +gte_laptop
        color: #6c6c6c
        font-size: 16px
        font-weight: 300
        height: 100px
        letter-spacing: -0.01em
        line-height: 20px

      b
        color: #333

      a
        color: inherit
        text-decoration: none

        +lte_ipad
          color: #f2642b

          &:active
            text-decoration: underline

        +gte_laptop
          &:hover
            text-decoration: underline

      & > div
        &:first-child
          margin-bottom: auto

        & > span
          display: block

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
  +lte_ipad
    height: rem(195px)

  +gte_laptop
    height: 550px
</style>
