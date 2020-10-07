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
          <div class='name'>
            <div>Основатель</div>
            <div><b>Карпушин Михаил</b></div>
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
        />

        <div class='info'>
          <div class='name'>
            <div>Руководитель отдела франчайзинга</div>
            <div><b>Никитина Наталья</b></div>
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
  padding: 0

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
          font-weight: 900
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
  +lte_ipad
    height: rem(195px)

  +gte_laptop
    height: 550px
</style>
