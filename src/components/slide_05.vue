<template>
  <article>
    <h2>
      Мы работаем с юридическими лицами и ИП &mdash; собственниками
      помещений от 100 м²
    </h2>
    <div class='details'>
      <div class='cc-2'>
        <div class='c-column'>
          <div class='type-1'>Отдельно стоящее<br>складское помещение</div>
          <div class='type-2'>Складское помещение<br>в жилом доме</div>
          <div class='type-3'>Здания<br>бывших АТС</div>
        </div>
        <div class='c-column'>
          <div class='type-4'>Подвальные<br>помещения</div>
          <div class='type-5'>Подземный паркинг<br>торгового центра</div>
          <div class='type-6'>Другие<br>помещения</div>
        </div>
      </div>
    </div>
    <Button type='red' text='Узнать больше' @click='lead'/>
  </article>
</template>

<script>
import Button from '@/components/button';

export default {
  name: 'Slide5',
  components: { Button },
  methods: {
    lead() {
      alert('not implemented');
    }
  }
};
</script>

<style scoped lang='sass'>
article
  +gte_laptop
    padding-top: 29px

h2
  +lte_ipad
    margin-bottom: rem(40px)
    text-align: center

  +gte_laptop
    margin-bottom: 51px
    max-width: 827px

.details
  position: relative
  background: #5096ff
  border-radius: 0px 40px 40px 0px
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05)

  +gte_laptop
    height: 331px
    margin-bottom: 57px
    padding: 60px 0
    width: 826px

    &:after
      content: ''
      background: #5096ff
      position: absolute
      left: -99999px
      width: 99999px
      height: 100%
      top: 0

  .cc-2
    display: flex
    height: 100%

    .c-column
      display: flex
      flex-direction: column
      height: 100%
      justify-content: space-between
      width: 354px

      &:not(:last-child)
        margin-right: 30px

      div
        color: #fff
        font-size: 16px
        font-weight: 800
        line-height: 23px
        display: flex
        align-items: center

        &:before
          background-repeat: no-repeat
          background-size: contain
          content: ''
          width: 50px
          height: 50px
          margin-right: 40px

      @each $icon in type-1, type-2, type-3, type-4, type-5, type-6
        .#{$icon}:before
          background-image: url(../assets/slide_05/#{$icon}.svg)

.button
  +gte_laptop
    margin-bottom: 46px
    max-width: 255px
</style>
