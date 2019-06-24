const labelStylesSchema = {
  error: 'errorText',
  success: 'successText',
  danger: 'dangerText',
  warning: 'warningText',
  aclaration: 'aclarationText',
  normal: 'normalText',
  info: 'infoText',
  disabled: 'disabledText'
}

const inputStylesSchema = {
  error: 'errorInput',
  success: 'successInput',
  danger: 'dangerInput',
  warning: 'warningInput',
  aclaration: 'aclarationInput',
  normal: 'normalInput',
  info: 'infoInput',
  disabled: 'disabledInput'
}

const FullInputPropTypes = {
  inputValue: {
    type: [String, Number],
    default: ''
  },
  onChangeEvent: {
    type: Function,
    default: (value) => value
  },
  disabled: {
    type: Boolean,
    default: false
  },
  labelText: {
    type: String,
    default: ''
  },
  inputType: {
    validator: function (value) {
      return [ 'text', 'number', null ].indexOf(value) !== -1
    }
  },
  message: {
    type: String,
    default: ''
  },
  messageType: {
    validator: function (value) {
      return ['error', 'danger', 'warning', 'normal', 'aclaration', 'info', 'success', null].indexOf(value) !== -1
    }
  },
  className: {
    type: String,
    default: ''
  }
}

export default {
  name: 'full-input',
  components: {},
  props: FullInputPropTypes,
  methods: {
    onChangeHandler (event) {
      this.onChangeEvent(event.target.value)
    }
  },
  computed: {
    getClassWrapper() {
        if(this.className ) return `full-input ${this.className}`
        return 'full-input' 
    },
    getClassColorText () {
      if (this.disabled) return labelStylesSchema.disabled
      if (!this.messageType) labelStylesSchema.normal
      return labelStylesSchema[this.messageType]
    },
    getClassInput () {
      if (this.disabled) return `full-input-value ${inputStylesSchema.disabled}` 
      if (!this.messageType) return `full-input-value ${inputStylesSchema.normal}`
      return `full-input-value ${inputStylesSchema[this.messageType]}`
    }
  }
}
