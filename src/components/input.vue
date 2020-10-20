<template>
  <div class='input'>
    <label>
      <span v-if='label'>{{ label }}</span>
      <textarea
        v-if='isTextarea'
        ref='textarea'
        :class='{
          "jis-error": isError,
        }'
        :value='modelValue'
        :placeholder='placeholder'
        :autofocus='isAutofocus'
        @input='inputChange($event.target.value)'
        @keyup.esc='cancel'
      />
      <input
        v-else
        ref='input'
        :class='{
          "is-error": isError,
        }'
        :value='modelValue'
        :placeholder='placeholder'
        :autofocus='isAutofocus'
        :type='type'
        @input='inputChange($event.target.value)'
        @keyup.esc='cancel'
      >
    </label>
  </div>
</template>

<script>
import { debounce } from 'throttle-debounce';

export default {
  name: 'AppInput',
  props: {
    label: { type: String, required: false, default: undefined },
    modelValue: { type: [Number, String], required: false, default: undefined },
    placeholder: { type: String, required: false, default: undefined },
    isAutofocus: { type: Boolean, required: false, default: undefined },
    type: {
      type: String,
      required: false,
      default: 'string',
      validator: (value) => [
        'string',
        'textarea',
        'tel',
        'email',
        'number',
        'password'
      ].indexOf(value) !== -1
    },
    isError: { type: Boolean, required: false, default: false },
    debounce: { type: Number, required: false, default: undefined }
  },
  data: () => ({
    debouncedEmitChange: undefined,
    tmpValue: null,
    isTemporarilyDisabledAfterDragWasFinished: false
  }),
  computed: {
    isTextarea() {
      return this.type === 'textarea';
    }
  },
  watch: {
    debounce() {
      this.debouncedEmitChange = this.debounce ?
        debounce(this.emitChange, this.debounce) :
        this.emitChange;
    }
  },
  async mounted() {
    this.debouncedEmitChange = this.debounce ?
      debounce(this.debounce, this.emitChange) :
      this.emitChange;
  },
  methods: {
    inputChange(value) {
      const fixedValue = this.type === 'number' ? parseFloat(value) : value;

      this.debouncedEmitChange(fixedValue);
    },
    cancel() {
      return this.$emit('cancel');
    },
    emitChange(value) {
      this.$emit('update:modelValue', value);
    },
    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    }
  }
};
</script>

<style scoped lang='sass'>
.input
  background: #fbfbfb
  border-radius: 10px
  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, 0.05)
  display: flex
  width: 100%

  &:not(:last-child)
    +lte_ipad
      margin-bottom: 12px

    +gte_laptop
      margin-bottom: 26px

  label
    width: 100%

  input,
  textarea
    background: transparent
    border-radius: 10px
    border: 2px solid transparent
    font-family: inherit
    font-size: 16px
    letter-spacing: -0.01em
    width: 100%

    +lte_ipad
      min-height: rem(48px)

    +gte_laptop
      min-height: 69px

    +lte_ipad
      line-height: rem(20px)

    +gte_laptop
      line-height: 23px

    &::placeholder
      color: #6c6c6c

    &.is-error
      color: #f00
      border-color: #f00

      &::placeholder
        color: #f00

    &:focus
      outline: none
      border-color: #285ec5

  input
    +lte_ipad
      padding: rem(14px) rem(18px)

    +gte_laptop
      padding: 21px 34px

  textarea
    +lte_ipad
      padding: rem(14px) rem(16px)

    +gte_laptop
      padding: 21px 24px
</style>
