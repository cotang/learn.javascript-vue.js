import { shallowMount } from '@vue/test-utils'
import SelectUsersPerPage from '@/components/SelectUsersPerPage.vue'

describe('SelectUsersPerPage.vue', () => {
  it('is component', () => {
    const wrapper = shallowMount(SelectUsersPerPage, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.isVueInstance()).toEqual(true)
  })

  it('contains value', () => {
    const wrapper = shallowMount(SelectUsersPerPage, {
      propsData: {
        value: 1
      }
    })
    expect(wrapper.vm.value).not.toBeDefined()
  })
})
