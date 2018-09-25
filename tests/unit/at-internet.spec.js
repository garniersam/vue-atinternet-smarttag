import { createLocalVue, shallowMount } from '@vue/test-utils'
import smarttag from '../../src/index'

const localVue = createLocalVue()

localVue.use(smarttag)

const wrapper = shallowMount({
  template: `<div><a v-smarttag-click="{ my: 'test' }"></a></div>`
}, {
  localVue
})

describe('at-internet smartTag plugin', () => {
  it('should be installed', () => {
    expect(localVue.smartTag).toHaveProperty('newTag')
    expect(localVue.smartTag).toHaveProperty('tag')
    expect(localVue.smartTag).toHaveProperty('sendPage')
    expect(localVue.smartTag).toHaveProperty('sendClick')

    expect(wrapper.vm.$smartTag).toHaveProperty('newTag')
    expect(wrapper.vm.$smartTag).toHaveProperty('tag')
    expect(wrapper.vm.$smartTag).toHaveProperty('sendPage')
    expect(wrapper.vm.$smartTag).toHaveProperty('sendClick')
  })

  // it('should instanciate an At Internet Tag', () => {
  //   expect(localVue.smartTag.tag).toHaveProperty('version')
  // })

  it('should be callable via Vue.smartTag.sendClick()', () => {
    const spy = jest.spyOn(localVue.smartTag, 'sendClick')
    localVue.smartTag.sendClick({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via Vue.smartTag.sendPage()', () => {
    const spy = jest.spyOn(localVue.smartTag, 'sendPage')
    localVue.smartTag.sendPage({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via this.$smartTag.sendClick()', () => {
    const spy = jest.spyOn(wrapper.vm.$smartTag, 'sendClick')
    wrapper.vm.$smartTag.sendClick({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via this.$smartTag.sendPage()', () => {
    const spy = jest.spyOn(wrapper.vm.$smartTag, 'sendPage')
    wrapper.vm.$smartTag.sendPage({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should install the directive v-smarttag-click', () => {
    expect(localVue.directive('smarttag-click')).toHaveProperty('bind')
  })

  it('should trigger sendClick() on directive click', () => {
    const spy = jest.spyOn(localVue.smartTag, 'sendClick')
    const link = wrapper.find('a')
    link.trigger('click')
    expect(spy).toBeCalledWith({ my: 'test' })
    spy.mockRestore()
  })
})
