<template>
  <div class='outer' id='slide_07'>
    <div class='container'>
      <h2>Комиссия&nbsp;управляющей компании</h2>
    </div>
    <div class='background'>
      <article>
        <div class='circle'>
          <b>5 лет</b>
          <span>срок окупаемости</span>
          <span>первоначальных</span>
          <span>инвестиций (РР)</span>
        </div>
        <ul>
          <li>
            <b>10 %</b>
            <div>
              <span>валовой выручки</span>
              <span>на управление складом</span>
            </div>
          </li>
          <li>
            <b>5 %</b>
            <div>
              <span>валовой выручки</span>
              <span>на мракетинговые услуги</span>
            </div>
          </li>
          <li>
            <b>5 %</b>
            <div>
              <span>валовой выручки</span>
              <span>на услуги IT</span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide7'
};
</script>

<style scoped lang='sass'>
$mobile-circle-radius: 117px
.outer
  +lte_ipad
    margin-bottom: rem(26px)

  +gte_laptop
    margin-bottom: 82px

  +laptop
    margin-top: scale-laptop(-167px, -23px)

  +gte_desktop
    margin-top: -23px

h2
  +lte_ipad
    margin-bottom: rem($mobile-circle-radius + 40px)

  +gte_laptop
    margin-bottom: 45px
    text-align: center
    width: 500px

  +laptop
    margin-left: scale-laptop(270px, 334px)

  +gte_desktop
    margin-left: 334px

.background
  background: #5096FF
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.05)

article
  +lte_ipad
    padding-bottom: rem(40px)

  +gte_laptop
    height: 223px

  ul
    color: #fff
    display: flex

    +lte_ipad
      flex-direction: column
      padding-top: rem($mobile-circle-radius + 8px)

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

    li
      display: flex
      flex-shrink: 0

      +lte_ipad
        &:not(:last-child)
          margin-bottom: rem(24px)

      +gte_laptop
        flex-direction: column

      &:not(:last-child)
        +laptop
          margin-right: scale-laptop(41px, 86px)

        +gte_desktop
          margin-right: 86px

      b
        font-weight: bold

        +lte_ipad
          font-size: rem(30px)
          line-height: rem(30px)
          width: rem(85px)
          margin-right: rem(16px)

        +gte_laptop
          font-size: 50px
          line-height: 35px
          margin-bottom: 11px

      div
        display: flex
        flex-direction: column

      span
        +lte_ipad
          font-size: rem(14px)
          line-height: rem(18px)

        +gte_laptop
          font-size: 18px
          line-height: 23px

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
    background-image: url(../assets/slide_07/circle-mobile.svg)
    height: rem(218px)
    left: 50%
    transform: translateX(-50%)
    width: rem(218px)
    margin-top: rem(-$mobile-circle-radius)

  +gte_laptop
    background-image: url(../assets/slide_07/circle-desktop.svg)

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

  b
    color: #5096ff
    font-weight: bold

    +lte_ipad
      font-size: rem(44px)
      line-height: rem(44px)
      margin-bottom: rem(8px)

    +gte_laptop
      font-size: 50px
      line-height: 35px
      margin-bottom: 12px

  span
    color: #4b4b4b
    +lte_ipad
      font-size: rem(12px)
      line-height: rem(14px)

    +gte_laptop
      font-size: 18px
      line-height: 23px
</style>
