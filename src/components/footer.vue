<template>
  <footer class='container'>
    <img
      class='logo'
      loading='lazy'
      src='../assets/logo.svg'
    />
    <ul>
      <li>
        <a href='https://kladovkin.ru/o-minisklade/'>{{ t('footer.about') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/self-storage/'>Self Storage</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/selfstorage/'>{{ t('footer.units') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/dostavka/'>{{ t('footer.delivery') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/karyera/'>{{ t('footer.career') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/partneram/'>{{ t('footer.partners') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kak-khranit-veshchi/'>{{ t('footer.how_to') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kak-khranit-veshchi/'>{{ t('footer.business') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/lichnye-veschi/'>{{ t('footer.personal') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/kontakty/'>{{ t('footer.contacts') }}</a>
      </li>
      <li>
        <a href='https://kladovkin.ru/sitemap/'>{{ t('footer.sitemap') }}</a>
      </li>
    </ul>
    <div class='copy-wrapper'>
      <div class='copy'>
        © <b>{{ t('footer.brand') }}</b> 2019-{{ year }}<br>{{ t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>

<script>
import t from '@/utils/locale';

export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  },
  methods: {
    t
  }
};
</script>

<style scoped lang='sass'>
footer
  +lte_ipad
    padding-bottom: rem(24px)
    padding-top: rem(40px)

  +gte_laptop
    align-items: flex-start
    display: flex
    height: 340px
    padding-top: 107px

.logo
  +lte_ipad
    margin-bottom: rem(41px)
    width: rem(187px)

  +gte_laptop
    margin-top: -13px
    width: rem(242px)

  +laptop
    margin-right: scale-laptop(50px, 107px)

  +gte_desktop
    margin-right: 107px
ul
  +lte_ipad
    +fcolumn(2, rem(30px), rem(17px), 'li')

  +gte_laptop
    +fcolumn(4, 44px, 36px, 'li')
    width: 100%
    max-height: 177px
    flex-direction: column

  li
    flex-shrink: 0

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
.copy-wrapper
  +gte_laptop
    position: relative
    order: -1

.copy
  color: #6c6c6c
  font-weight: 300
  letter-spacing: -0.01em

  +lte_ipad
    font-size: rem(12px)
    line-height: rem(18px)
    margin-top: rem(24px)

  +gte_laptop
    position: absolute
    left: 0
    font-size: 16px
    line-height: 23px
    width: 253px
    margin-top: 95px
</style>
