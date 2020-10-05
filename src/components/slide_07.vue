<template>
  <div class='outer'>
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
.outer
  +laptop
    margin-top: scale-laptop(-167px, -23px)

  +gte_desktop
    margin-top: -23px

h2
  text-align: center

  +lte_ipad
    margin-bottom: rem(40px)

  +gte_laptop
    margin-bottom: 45px

.background
  background: #5096FF
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.05)

article
  +gte_laptop
    height: 223px

.circle
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  z-index: 1

  +gte_laptop
    background-image: url(../assets/slide_07/circle-desktop.svg)
    background-repeat: no-repeat
    background-size: cover

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
    font-weight: 900

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
