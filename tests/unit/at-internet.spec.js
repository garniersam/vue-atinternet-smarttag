import { createLocalVue, shallowMount } from '@vue/test-utils'
import AtInternet from '../../src/at-internet'

const localVue = createLocalVue()

localVue.use(AtInternet)

const wrapper = shallowMount({
  template: `<div><a v-at-track-click="{ my: 'test' }"></a></div>`
}, {
  localVue
})

describe('at-internet plugin', () => {
  it('should be installed', () => {
    expect(localVue.atInternet).toHaveProperty('newTag')
    expect(localVue.atInternet).toHaveProperty('tag')
    expect(localVue.atInternet).toHaveProperty('sendPage')
    expect(localVue.atInternet).toHaveProperty('sendClick')

    expect(wrapper.vm.$atInternet).toHaveProperty('newTag')
    expect(wrapper.vm.$atInternet).toHaveProperty('tag')
    expect(wrapper.vm.$atInternet).toHaveProperty('sendPage')
    expect(wrapper.vm.$atInternet).toHaveProperty('sendClick')
  })

  // it('should instanciate an At Internet Tag', () => {
  //   expect(localVue.atInternet.tag).toHaveProperty('version')
  // })

  it('should be callable via Vue.atInternet.sendClick()', () => {
    const spy = jest.spyOn(localVue.atInternet, 'sendClick')
    localVue.atInternet.sendClick({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via Vue.atInternet.sendPage()', () => {
    const spy = jest.spyOn(localVue.atInternet, 'sendPage')
    localVue.atInternet.sendPage({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via this.$atInternet.sendClick()', () => {
    const spy = jest.spyOn(wrapper.vm.$atInternet, 'sendClick')
    wrapper.vm.$atInternet.sendClick({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should be callable via this.$atInternet.sendPage()', () => {
    const spy = jest.spyOn(wrapper.vm.$atInternet, 'sendPage')
    wrapper.vm.$atInternet.sendPage({ my: 'test' })
    expect(spy).toHaveBeenCalledWith({ my: 'test' })
    spy.mockRestore()
  })

  it('should install the directive v-at-track-click', () => {
    expect(localVue.directive('at-track-click')).toHaveProperty('bind')
  })

  it('should trigger sendClick() on directive click', () => {
    const spy = jest.spyOn(localVue.atInternet, 'sendClick')
    const link = wrapper.find('a')
    link.trigger('click')
    expect(spy).toBeCalledWith({ my: 'test' })
    spy.mockRestore()
  })
})
