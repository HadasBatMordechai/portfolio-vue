import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppNav from '/src/components/AppNav.vue';
import { Popover } from '@headlessui/vue';

// Mock the NavList component since its internal logic isn't the focus of AppNav's tests
const NavListStub = {
  name: 'NavList',
  template: '<div class="nav-list-stub"><slot /></div>',
  emits: ['clicked'],
};

describe('AppNav (navigation)', () => {
  it('renders the navigation', () => {
    const wrapper = mount(AppNav);

    expect(wrapper.findComponent(Popover).exists()).toBe(true);
    expect(wrapper.find('nav.hidden.md\\:block').exists()).toBe(true);
    expect(wrapper.findComponent(NavListStub).exists()).toBe(true);
  });

  /*
  TODO:
  Desktop VS mobile,
  toggles the mobile navigation popover when the button is clicked,
  closes the popover when NavList emits a "clicked" event
  */
});
