import { shallowMount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'
describe('MyComponent.vue', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(MyComponent)
    })

    describe('props', () => {
        test('propsが受け取れること', () => {
            wrapper.setProps({
                text: 'hello test',
            })
            expect(wrapper.props().text).toBe('hello test')
        })
    })

    describe('template', () => {
        test('textがレンダリングされること', () => {
            wrapper.setProps({
                text: 'hello test',
            })
            expect(wrapper.text()).toBe('hello test')
        })
    })
})