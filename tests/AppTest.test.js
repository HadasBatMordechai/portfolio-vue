import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NavList from '/src/components/NavList.vue';

describe('NavList (navigation)', () => {
  it('should have the correct links data', () => {
    const wrapper = mount(NavList);
    const links = wrapper.vm.links;

    expect(links).toBeInstanceOf(Array);
    expect(links.length).toBe(5);
    expect(links[0]).toEqual({ link: 'about' });
    expect(links[1]).toEqual({ link: 'hobbies' });
    expect(links[2]).toEqual({ link: 'projects' });
    expect(links[3]).toEqual({ link: 'why', txt: 'why me' });
    expect(links[4]).toEqual({ link: 'contact' });
  });

  it('should render the correct number of navigation links', () => {
    const wrapper = mount(NavList);
    const links = wrapper.findAll('a');

    expect(links.length).toBe(5);
    expect(links[0].text()).toBe('about');
    expect(links[1].text()).toBe('hobbies');
    expect(links[2].text()).toBe('projects');
    expect(links[3].text()).toBe('why me');
    expect(links[4].text()).toBe('contact');
    expect(links[0].attributes('href')).toBe('#about');
    expect(links[1].attributes('href')).toBe('#hobbies');
    expect(links[2].attributes('href')).toBe('#projects');
    expect(links[3].attributes('href')).toBe('#why');
    expect(links[4].attributes('href')).toBe('#contact');
  });

  it('should emit "clicked" event with the correct link item when a link is clicked', async () => {
    const wrapper = mount(NavList);
    const whyMeLinkElement = wrapper.findAll('a')[3];

    await whyMeLinkElement.trigger('click');

    expect(wrapper.emitted().clicked).toBeTruthy();
    expect(wrapper.emitted().clicked.length).toBe(1);

    const aboutLinkElement = wrapper.findAll('a')[0];
    await aboutLinkElement.trigger('click');

    expect(wrapper.emitted().clicked.length).toBe(2);
  });
});
