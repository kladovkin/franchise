<template>
  <article id='slide_12'>
    <h2>{{ t('slide_12.h2') }}</h2>
    <div class='note'>{{ t('slide_12.note') }}</div>
    <div v-if='isSubmitted' class='success-container'>
      <div>
        <div class='headline'>
          <span>{{ t('slide_12.thanks') }}</span>
          {{ t('slide_12.success') }}
        </div>
        <div class='text'>{{ t('slide_12.success_note') }}</div>
      </div>
    </div>
    <div v-else class='form-container'>
      <div class='cc-form'>
        <div class='c-left'>
          <Input
            v-model='client'
            :placeholder='t("slide_12.client")'
            name='client'
            :is-error='isValidated && !client'
          />
          <Input
            v-model='email'
            placeholder='E-mail'
            name='email'
            type='email'
            :is-error='isValidated && !email'
          />
          <Input
            v-model='phone'
            :placeholder='t("slide_12.phone")'
            name='phone'
            type='tel'
            :is-error='isValidated && !phone'
          />
        </div>
        <div class='c-right'>
          <Input
            v-model='comment'
            :placeholder='t("slide_12.message")'
            name='comment'
            type='textarea'
          />
        </div>
      </div>
      <div class='submit'>
        <div v-if='isError' class='error mobile'>*Обязательное поле для заполения</div>
        <Button type='red' :text='t("slide_12.submit")' @click='submit' />
        <div class='privacy'>
          {{ t('slide_12.privacy_note') }}
          <a
            href='https://kladovkin.ru/selfstorage/privacy/'
            target='_blank'
          >
            {{ t('slide_12.privacy_link') }}
          </a>
        </div>
      </div>
      <div v-if='isError' class='error desktop'>{{ t('slide_12.error') }}</div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';

import Button from '@/components/button';
import Input from '@/components/input';
import t from '@/utils/locale';

export default {
  name: 'Slide09',
  components: {
    Button,
    Input
  },
  data: () => ({
    client: '',
    phone: '',
    email: '',
    comment: '',
    isValidated: false,
    isSubmitted: false
  }),
  computed: {
    url() {
      return process.env.NODE_ENV === 'development' ?
        'http://ms.local/selfstorage/leads/' :
        'https://kladovkin.ru/selfstorage/leads/';
    },
    isError() {
      return this.isValidated && (
        !this.client || !this.email || !this.phone
      );
    }
  },
  methods: {
    t,
    submit() {
      this.isValidated = true;

      if (!this.isError) {
        this.isSubmitted = true;
        axios.post(this.url, {
          crm_lead: {
            phone: this.phone,
            client: this.client,
            email: this.email,
            lead_type: 'franchise',
            rent_note: this.comment
          }
        });
      }
    }
  }
};
</script>

<style scoped lang='sass'>
article
  +lte_ipad
    margin-bottom: 80px
    overflow: hidden
    padding-top: rem(81px)

  +gte_laptop
    margin-bottom: 125px
    padding-bottom: 6px
    padding-top: 96px

  &:before
    background-repeat: no-repeat
    background-size: contain
    content: ''
    position: absolute
    top: 0
    z-index: -1

    +lte_ipad
      background-image: url(../assets/slide_12/circles-mobile.svg)
      height: rem(207px)
      left: 0
      width: rem(127px)

    +gte_laptop
      background-image: url(../assets/slide_12/circles-desktop.svg)
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
      background-image: url(../assets/logo.svg)
      background-repeat: no-repeat
      background-size: contain
      content: ''
      height: 62px
      position: absolute
      width: 226px
      margin: -46px 0 0 77px

.form-container
  .cc-form
    +lte_ipad
      margin-bottom: rem(24px)

    +gte_laptop
      display: flex
      margin-bottom: 26px

    .c-left
      +lte_ipad
        margin-bottom: rem(12px)

      +gte_laptop
        flex-shrink: 0
        margin-right: 32px
        width: 350px

    .c-right
      +gte_laptop
        flex-grow: 1

        ::v-deep(textarea)
          height: 257px

  .submit
    +gte_laptop
      display: flex
      align-items: center

    .button
      +lte_ipad
        margin-bottom: rem(24px)

      +gte_laptop
        width: 350px
        margin-right: 29px

    .privacy
      letter-spacing: -0.01em

      +lte_ipad
        color: #6c6c6c
        font-size: rem(12px)
        line-height: rem(18px)
        text-align: center

      +gte_laptop
        font-size: 14px
        line-height: 20px
        color: #a5a5a5

      a
        text-decoration: none

        +lte_ipad
          color: #f44f0c

          &:active
            text-decoration: underline

        +gte_laptop
          font-weight: bold
          color: inherit

          &:hover
            text-decoration: underline

  .error
    color: #f00
    letter-spacing: -0.01em

    +lte_ipad
      font-size: 13px
      line-height: 18px
      margin-top: rem(-4px)
      margin-bottom: rem(16px)

      &.desktop
        display: none

    +gte_laptop
      font-size: 14px
      line-height: 20px
      margin-top: 14px
      position: absolute

      &.mobile
        display: none

.success-container
  background: #fff
  border-radius: 40px
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15)
  display: flex
  align-items: center
  justify-content: center

  +lte_ipad
    flex-direction: column
    text-align: center
    padding: rem(27px) 0 rem(35px)
    margin-bottom: 15px

  &:before
    background-image: url(../assets/slide_12/ok.png)
    background-repeat: no-repeat
    background-size: contain
    content: ''

    +lte_ipad
      margin-bottom: rem(26px)
      height: rem(math.div(130px, 1.0306748466))
      width: rem(130px)

    +gte_laptop
      height: 163px
      margin-right: 79px
      margin-top: -30px
      width: 168px

    +laptop
      margin-left: scale-laptop(0px, -70px)

    +gte_desktop
      margin-left: -70px

  +gte_laptop
    height: 293px
    margin-top: 60px

  .headline
    color: #333
    font-weight: bold

    +lte_ipad
      font-size: rem(20px)
      line-height: rem(22px)
      margin-bottom: rem(13px)

    +gte_laptop
      font-size: 32px
      line-height: 35px
      margin-bottom: 16px

    span
      color: #f44f0c

      +lte_ipad
        display: block
        margin-bottom: rem(8px)

  .text
    color: #6c6c6c
    +lte_ipad
      font-size: rem(14px)
      line-height: rem(16px)
      text-align: center
      padding: 0 rem(30px)

    +gte_laptop
      font-size: 18px
      letter-spacing: -0.01em
      line-height: 23px

    span
      font-weight: 300
</style>
