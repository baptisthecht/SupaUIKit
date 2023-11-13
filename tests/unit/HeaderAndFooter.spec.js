import { shallowMount } from '@vue/test-utils'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

import HomePage from '@/pages/HomePage.vue'
import AboutPageVue from '@/pages/AboutPage.vue'
import ComponentsPage from '@/pages/ComponentsPage.vue'
import DocsPage from '@/pages/DocsPage.vue'
import TemplatesPage from '@/pages/TemplatesPage.vue'


describe('HomePage.vue', () => {
  it('contains header & footer', () => {
    const wrapper = shallowMount(HomePage)
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true)
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
})

describe('AboutPage.vue', () => {
  it('contains header & footer', () => {
    const wrapper = shallowMount(AboutPageVue)
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true)
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
})

describe('ComponentsPage.vue', () => {
  it('contains header & footer', () => {
    const wrapper = shallowMount(ComponentsPage)
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true)
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
})

describe('DocsPage.vue', () => {
  it('contains header & footer', () => {
    const wrapper = shallowMount(DocsPage)
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true)
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
} )

describe('TemplatesPage.vue', () => {
  it('contains header & footer', () => {
    const wrapper = shallowMount(TemplatesPage)
    expect(wrapper.findComponent(HeaderComponent).exists()).toBe(true)
    expect(wrapper.findComponent(FooterComponent).exists()).toBe(true)
  })
})


