import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseModal from '@/components/BaseModal.vue'

describe('Modal.vue', () => {
  it('does not render when modelValue is false', () => {
    const wrapper = mount(BaseModal, {
      props: { modelValue: false },
    })
    expect(wrapper.find('.fixed').exists()).toBe(false)
  })

  it('renders when modelValue is true', () => {
    const wrapper = mount(BaseModal, {
      props: { modelValue: true },
      slots: { default: '<p>Modal content</p>' },
    })
    expect(wrapper.find('.fixed').exists()).toBe(true)
    expect(wrapper.text()).toContain('Modal content')
  })

  it('emits update:modelValue when close button is clicked', async () => {
    const wrapper = mount(BaseModal, {
      props: { modelValue: true },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })

  it('emits update:modelValue when backdrop is clicked', async () => {
    const wrapper = mount(BaseModal, {
      props: { modelValue: true },
    })
    await wrapper.find('.absolute.inset-0').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')!.at(-1)).toEqual([false])
  })
})
