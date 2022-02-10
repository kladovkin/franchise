<template>
  <div id='slide_09' class='outer'>
    <div class='background'>
      <article>
        <div class='circle'>
          <div class='title'>{{ t('slide_09.circle.title') }}</div>
          <div class='subtitle'>{{ t('slide_09.circle.subtitle') }}</div>
        </div>
        <div class='content'>
          <div class='headline'>{{ t('slide_09.headline') }}</div>
          <Button
            type='white'
            :text='t("slide_09.button")'
            @click='lead'
          />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button';

import t from '@/utils/locale';
import SweetScroll from '@/utils/sweet_scroll';

export default {
  name: 'Slide7',
  components: { Button },
  methods: {
    t,
    async lead() {
      (await SweetScroll.asyncInstance()).toElement(
        document.getElementById('slide_11'), { duration: 450 }
      );
    }
  }
};
</script>

<style scoped lang='sass'>
$mobile-circle-radius: 109px
.outer
  +lte_ipad
    margin-top: 32px
    padding-top: 115px

.background
  background: #5096FF
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.05)

article
  +ipad
    display: flex
    justify-content: center

  +lte_ipad
    padding-bottom: rem(32px)

  +gte_laptop
    height: 223px

.circle
  align-items: center
  background-repeat: no-repeat
  background-size: contain
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  z-index: 1

  +lte_ipad
    background-image: url(../assets/slide_09/circle-mobile.svg)
    height: rem(218px)
    left: 50%
    margin-top: rem(-$mobile-circle-radius)
    transform: translateX(-50%)
    width: rem(218px)

  +gte_laptop
    background-image: url(../assets/slide_09/circle-desktop.svg)

  +laptop
    height: scale-laptop(310px, 367px)
    margin-top: scale-laptop(-44px, -72px)
    margin-left: scale-laptop(-92px, -100px)
    width: scale-laptop(310px, 367px)

  +gte_desktop
    height: 367px
    margin-left: -100px
    margin-top: -72px
    width: 367px

  .title,
  .subtitle
    color: #5096ff
    font-weight: 900
    line-height: 1
    text-align: center

  .title
    +lte_ipad
      font-size: rem(44px)
      margin-bottom: rem(7px)

    +gte_laptop
      font-size: 56px
      margin-bottom: 17px

  .subtitle
    +lte_ipad
      font-size: rem(24px)

    +gte_laptop
      font-size: 32px

.content
  display: flex

  +ipad
    display: inline-flex

  +lte_ipad
    flex-direction: column
    padding-top: rem($mobile-circle-radius + 12px)

  +gte_laptop
    justify-content: center
    align-items: center
    height: 100%

  +laptop
    margin-left: scale-laptop(270px, 334px)
    width: scale-laptop(635px, 728px)

  +gte_desktop
    margin-left: 334px
    width: 728px

  .headline
    color: #ffffff
    font-weight: bold

    +lte_ipad
      font-size: rem(20px)
      line-height: rem(24px)
      margin-bottom: rem(24px)
      text-align: center

    +gte_laptop
      font-size: 24px
      line-height: 28px

  .button
    color: #5096ff

    +lte_ipad
      font-size: rem(14px)
      line-height: rem(23px)

    +gte_laptop
      flex-shrink: 0
      height: 56px
      max-width: none
      width: 290px

    &:active
      background: #5096ff
      color: #fff
</style>
