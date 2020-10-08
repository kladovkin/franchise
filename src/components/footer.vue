<template>
  <footer>
    <img
      class='logo'
      loading='lazy'
      src='../assets/logo.svg'
    />
    <ul>
      <li>
        <a href='https://kladovkin.ru/o-minisklade/'>О нас</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/self-storage/'>Self Storage</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/selfstorage/'>Боксы и цены</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/dostavka/'>Доставка</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/karyera/'>Карьера</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/partneram/'>Партнёры</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kak-khranit-veshchi/'>Как хранить вещи</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kak-khranit-veshchi/'>Бизнес-хранение</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/lichnye-veschi/'>Личное хранение</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kontakty/'>Контакты</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/sitemap/'>Карта сайта</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped lang='sass'>
footer
  +default_padding_left
  +default_padding_right
  +lte_ipad
    padding-bottom: rem(24px)
    padding-top: rem(40px)

  +gte_laptop
    padding-top: 107px
    height: 340px

.logo
  +lte_ipad
    width: rem(187px)
    margin-bottom: rem(41px)

  +gte_laptop
    width: rem(242px)

ul
  +lte_ipad
    +fcolumn(2, rem(30px), rem(17px), 'li')

  +gte_laptop
    +fcolumn(4, 30px, 36px, 'li')
    max-height: 177px
    flex-direction: column

  li
    a
      -webkit-tap-highlight-color: transparent
      letter-spacing: -0.01em
      text-decoration: none

      +lte_ipad
        color: #4b4b4b
        font-size: rem(12px)
        line-height: rem(16px)

        &:active
          color: #f44f0c

      +gte_laptop
        color: #333333
        font-size: 16px
        line-height: 23px

        &:hover
          color: #f44f0c
    </style>
