<template>
  <div id='slide_09' class='outer'>
    <div class='background'>
      <article>
        <div class='circle'>
          <div class='title'>{{ t('slide_09.circle.title') }}</div>
          <div class='subtitle'>{{ t('slide_09.circle.subtitle') }}</div>
        </div>
        <div class='content'>
          <div class='headline' v-html='t("slide_09.headline")' />
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

  +ipad
    margin-top: 96px

  +gte_desktop
    margin-top: -133px

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
    height: 173px

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

  +laptop
    margin-left: scale-laptop(-96px, -82px)

  +gte_laptop
    height: 317px
    margin-top: -72px
    width: 317px
    background-image: url(../assets/slide_09/circle-desktop.svg)

  +gte_desktop
    margin-left: -82px

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
    padding-left: rem(80px)
    padding-right: rem(80px)
    text-align: center
    align-items: center

  +lte_ipad
    flex-direction: column
    padding-top: rem($mobile-circle-radius + 12px)

  +gte_laptop
    justify-content: center
    align-items: center
    height: 100%

  +laptop
    margin-left: scale-laptop(250px, 272px)

  +gte_desktop
    margin-left: 272px

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

    +laptop
      margin-right: scale-laptop(32px, 62px)

    +gte_desktop
      margin-right: 62px

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
