<template>
  <article>
    <h2>Остались вопросы?</h2>
    <div class='note'>Оставьте свои контакты и мы с вами свяжемся</div>
    <div class='cc-form'>
      <div class='c-left'>
        <Input
          placeholder='Имя и Фамилия'
          name='client'
        />
        <Input
          placeholder='E-mail'
          name='email'
          type='email'
        />
        <Input
          placeholder='Мобильный телефон'
          name='phone'
          type='tel'
        />
      </div>
      <div class='c-right'>
        <Input
          placeholder='Сообщение'
          name='payload'
          type='textarea'
        />
      </div>
    </div>
  </article>
</template>

<script>
import Input from '@/components/input';

export default {
  name: 'Slide9',
  data: () => ({
    client: '',
    phone: '',
    email: '',
    payload: ''
  }),
  components: { Input }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    overflow: hidden
    padding-top: rem(81px)

  +gte_laptop
    padding-top: 96px

  &:before
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    top: 0

    +lte_ipad
      background-image: url(../assets/slide_09/circles-mobile.svg)
      height: rem(207px)
      left: 0
      width: rem(127px)

    +gte_laptop
      background-image: url(../assets/slide_09/circles-desktop.svg)
      height: 239px
      width: 622px

    +laptop
      left: scale-laptop(305px, 405px)

    +gte_desktop
      left: 405px

h2
  +lte_ipad
    margin-bottom: rem(12px)

  +gte_laptop
    margin-bottom: rem(16px)

.note
  color: #6c6c6c
  letter-spacing: -0.01em

  +lte_ipad
    font-size: rem(14px)
    line-height: rem(16px)
    text-align: center
    margin-bottom: rem(40px)

  +gte_laptop
    font-size: 18px
    line-height: 23px
    margin-bottom: 42px

    &:after
      background-image: url(../assets/slide_09/logo.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 62px
      position: absolute
      width: 226px
      margin: -46px 0 0 77px
</style>
