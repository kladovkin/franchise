<template>
  <div class='input'>
    <label>
      <span v-if='label'>{{ label }}</span>
      <textarea
        v-if='isTextarea'
        ref='textarea'
        :class='[color, {
          "is-error": isError,
        }]'
        :value='inputValue'
        :placeholder='placeholder'
        :autofocus='isAutofocus'
        :type='type'
        @input='inputChange($event.target.value)'
        @keyup.esc='cancel'
      />
      <input
        v-else
        ref='input'
        :class='[color, {
          "is-error": isError,
        }]'
        :value='inputValue'
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
    value: { type: [Number, String], required: false, default: undefined },
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
    inputValue() {
      if (this.value == null) {
        return this.text;
      }
      return this.tmpValue != null ? this.tmpValue : this.value;
    },
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
      this.$emit('input', value);
    },
    focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    }
  }
};
</script>

<style scoped lang='sass'>
// .input
//   padding-bottom: rem(10px)
//
//   +lte_ipad
//     margin-bottom: rem(24px)
//
//   +gte_laptop
//     margin-bottom: 14px
//
// label
//   display: block
//   position: relative
//
//   &:not(:last-child):not(.is-no-input)
//     margin-bottom: rem(8px)
//
//   span
//     color: #4d5880
//     display: block
//     font-weight: 500
//     letter-spacing: 1px
//     line-height: rem(26px)
//     padding-bottom: rem(6px)
//     text-transform: uppercase
//
//     +lte_ipad
//       font-size: rem(11px)
//
//     +gte_laptop
//       font-size: 12px
//
//   input
//     border-radius: rem(2px)
//     border: none
//     display: inline-block
//     letter-spacing: 0.3px
//     line-height: rem(38px)
//     padding: 0 rem(12px)
//     vertical-align: top
//
//     +lte_ipad
//       font-size: rem(16px)
//
//     +gte_laptop
//       font-size: 15px
//       letter-spacing: 0.1px
//
//     &::placeholder
//       font-size: rem(15px)
//
//     background: #f2f4fb
//     border: 1px solid #e0e4f1
//     color: #4d5880
//
//     // NOTE: Move this place holder to another kind of input if we should
//     //       create a new one type for account settings views.
//     &::placeholder
//       color: rgba(#4d5880, 0.6)
//
//     &.is-error
//       border: 1px solid #ff2315
//
//   input
//     display: inline-block
//     width: 100%
//
//     // it must be placed after all other classes
//     &:focus
//       border-color: #f5791f
//       outline: none
</style>
