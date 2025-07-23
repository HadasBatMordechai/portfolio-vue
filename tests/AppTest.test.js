import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '/src/App.vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

// Mock AppNav component
const AppNavStub = { name: 'AppNav', template: '<div>Mock AppNav</div>' };

// Mock ObserveIntersection component
const ObserveIntersectionStub = {
  name: 'ObserveIntersection',
  template: '<div><slot :visible="true" /></div>', // Always return visible: true
  props: ['is'],
};

const ObserveIntersectionOut = {
  name: 'ObserveIntersection',
  template: '<div><slot :visible="false" /></div>', // Always return visible: false
  props: ['is'],
};

describe('App', () => {
  it('renders AppNav component', () => {
    const wrapper = mount(App);

    expect(wrapper.findComponent(AppNavStub).exists()).toBe(true);
  });

  it('renders all main sections', () => {
    const wrapper = mount(App);

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('#about').exists()).toBe(true);
    expect(wrapper.find('#hobbies').exists()).toBe(true);
    expect(wrapper.find('#projects').exists()).toBe(true);
    expect(wrapper.find('#why').exists()).toBe(true);
    expect(wrapper.find('#contact').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
  });

  // TODO swiper tests

  it('renders TabGroup and TabList with correct number of tabs', () => {
    const wrapper = mount(App);

    expect(wrapper.findComponent(TabPanels).exists()).toBe(true);
    expect(wrapper.findComponent(TabGroup).exists()).toBe(true);
    expect(wrapper.findComponent(TabList).exists()).toBe(true);
    expect(wrapper.findAllComponents(Tab)).toHaveLength(3);
    expect(wrapper.findAllComponents(TabPanel)).toHaveLength(3);
  });

  it('displays the first tab panel content by default', async () => {
    const wrapper = mount(App);

    const tabPanels = wrapper.findAllComponents(TabPanel);
    expect(tabPanels[0].text()).toContain(
      "I'm passionate about writing clean, high-performance code",
    );
    expect(tabPanels[1].text()).not.toContain(
      'A frontend position within a dynamic and innovative company',
    );
    expect(tabPanels[2].text()).not.toContain(
      'For my final project, I conducted research on anomaly detection',
    );
  });

  it('switches to the second tab panel when the second tab button is clicked', async () => {
    const wrapper = mount(App);

    const tabs = wrapper.findAllComponents(Tab);
    const secondTabButton = tabs[1];

    await secondTabButton.trigger('click');
    await wrapper.vm.$nextTick();

    const tabPanels = wrapper.findAllComponents(TabPanel);
    expect(tabPanels[0].text()).not.toContain(
      "I'm passionate about writing clean, high-performance code",
    );
    expect(tabPanels[1].text()).toContain(
      'A frontend position within a dynamic and innovative company',
    );
    expect(tabPanels[2].text()).not.toContain(
      'For my final project, I conducted research on anomaly detection',
    );
  });

  it('applies animation classes when ObserveIntersection emits visible', async () => {
    const wrapper = mount(App, {
      global: { components: { ObserveIntersection: ObserveIntersectionStub } },
    });

    expect(wrapper.find('h1').classes()).toContain('animate__fadeIn');
    expect(wrapper.find('h2').classes()).toContain('animate__fadeIn');
    expect(wrapper.find('header p').classes()).toContain('animate__fadeIn');
    expect(wrapper.find('header a[href="#contact"]').classes()).toContain(
      'animate__fadeIn',
    );
    expect(wrapper.find('header a[href="#projects"]').classes()).toContain(
      'animate__fadeIn',
    );

    const aboutLogos = wrapper.findAll('#about a');
    expect(aboutLogos[0].classes()).toContain('animate__fadeIn');
    expect(aboutLogos[1].classes()).toContain('animate__fadeIn');
    expect(aboutLogos[2].classes()).toContain('animate__fadeIn');
    expect(aboutLogos[3].classes()).toContain('animate__fadeIn');

    const hobbyItems = wrapper.findAll('#hobbies li');
    expect(hobbyItems[0].classes()).toContain('animate__fadeIn');
    expect(hobbyItems[1].classes()).toContain('animate__fadeIn');
    expect(hobbyItems[2].classes()).toContain('animate__fadeIn');

    expect(wrapper.find('#why img').classes()).toContain('animate__pulse');
  });

  it('applies animation classes when ObserveIntersection emits not visible', async () => {
    const wrapper = mount(App, {
      global: { components: { ObserveIntersection: ObserveIntersectionOut } },
    });

    expect(wrapper.find('h1').classes()).not.toContain('animate__fadeIn');
    expect(wrapper.find('h2').classes()).not.toContain('animate__fadeIn');
    expect(wrapper.find('header p').classes()).not.toContain('animate__fadeIn');
    expect(wrapper.find('header a[href="#contact"]').classes()).not.toContain(
      'animate__fadeIn',
    );
    expect(wrapper.find('header a[href="#projects"]').classes()).not.toContain(
      'animate__fadeIn',
    );
  });

  it('displays the current year in the footer', () => {
    const wrapper = mount(App);

    const currentYear = new Date().getFullYear().toString();

    expect(wrapper.find('footer').text()).toContain(currentYear);
  });
});
