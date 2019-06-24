import FullInput from './index.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('FullInputComponent', () => {

  it("Render component with messageType is 'normal'", () => {
    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'normal',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.find('.full-input-label.normalText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.normalInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.normalInput').attributes().disabled).to.be.equal(undefined)

  })

  it('when the user do onChange in a input', () => {
    const wrapper = shallowMount(FullInput)
    let onChangeEventCalled = false
    let onChangeEventValue = false
    let propsMock = {
      messageType: 'normal',
      onChangeEvent: (value) => {
        onChangeEventCalled = true
        onChangeEventValue = value
      },
      labelText: 'name'
    }
    wrapper.setProps(propsMock)

    expect(onChangeEventCalled).to.be.equal(false)
    expect(onChangeEventValue).to.be.equal(false)

    wrapper.find('input').element.value = 'hi world'
    wrapper.find('input').trigger('change')

    expect(onChangeEventCalled).to.be.equal(true)
    expect(onChangeEventValue).to.be.equal('hi world')
  })

  it("Render component with messageType is 'error'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'error',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.errorText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.errorInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.errorInput').attributes().disabled).to.be.equal(undefined)

  })

  it("Render component with messageType is 'success'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'success',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.successText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.successInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.successInput').attributes().disabled).to.be.equal(undefined)

  })

  it("Render component with messageType is 'danger'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'danger',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.dangerText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.dangerInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.dangerInput').attributes().disabled).to.be.equal(undefined)

  })

  it("Render component with messageType is 'warning'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'warning',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.warningText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.warningInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.warningInput').attributes().disabled).to.be.equal(undefined)

  })

  it("Render component with messageType is 'aclaration'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'aclaration',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)

    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.aclarationText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.aclarationInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.aclarationInput').attributes().disabled).to.be.equal(undefined)

  })

  it("Render component with messageType is 'info'", ()=> {

    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'info',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje'
    }
    wrapper.setProps(propsMock)
    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)

    expect(wrapper.find('.full-input-label.infoText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.infoInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.infoInput').attributes().disabled).to.be.equal(undefined)
  })

  it("Render component when this is 'disabled'", ()=> {
    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'normal',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje',
      disabled:true
    }
    wrapper.setProps(propsMock)    
    expect(wrapper.findAll('label').length).to.be.equal(2)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.findAll('input').length).to.be.equal(1)
    expect(wrapper.find('.full-input-label.disabledText').text()).to.be.equal(propsMock.labelText)
    expect(wrapper.findAll('.full-input-value.disabledInput').length).to.be.equal(1)
    expect(wrapper.find('.full-input-value.disabledInput').attributes().disabled).to.be.equal('disabled')
  })
  it("Render component when this is not 'disabled'", ()=> {
    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'normal',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje',
      disabled: false
    }
    wrapper.setProps(propsMock)
    expect(wrapper.findAll('.full-input-label.normalText').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input-value.normalInput').length).to.be.equal(1)
    expect(wrapper.findAll('.full-input-message.normalText').length).to.be.equal(1)    
    expect(wrapper.findAll('.full-input *').length).to.be.equal(3)
    expect(wrapper.find('.full-input-value.normalInput').attributes().disabled).to.be.equal(undefined)
  })

  it('Render component when inputValue is equal "cat"', ()=> {
    const wrapper = shallowMount(FullInput)
    let propsMock = {
      messageType: 'normal',
      onChangeEvent: () => {},
      labelText: 'name',
      message: 'un mensaje',
      inputValue: 'gato'
    }
    wrapper.setProps(propsMock)
    expect(wrapper.find('.full-input-value.normalInput').element.value).to.be.equal(propsMock.inputValue)
  })
})
