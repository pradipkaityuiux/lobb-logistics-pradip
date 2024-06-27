import { mount } from '@vue/test-utils';
import Loader from '@/layout/commonBlocks/Loader.vue';

describe('Loader', () => {
  it('renders component correctly with default class', () => {
    const wrapper = mount(Loader);

    // Assert that the div has the Loader class by default
    const div = wrapper.find('div.skeleton');
    expect(div.exists()).toBe(true);
  });

  it('applies the skeloton__title class when title prop is true', () => {
    const wrapper = mount(Loader, {
      props: { title: true },
    });

    // Assert that the div has the skeloton__title class
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__title');
  });

  it('applies the skeloton__subtitle class when subTitle prop is true', () => {
    const wrapper = mount(Loader, {
      props: { subTitle: true },
    });

    // Assert that the div has the skeloton__subtitle class
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__subtitle');
  });

  it('applies the skeloton__logo class when logo prop is true', () => {
    const wrapper = mount(Loader, {
      props: { logo: true },
    });

    // Assert that the div has the skeloton__logo class
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__logo');
  });

  it('applies the skeloton__image class when image prop is true', () => {
    const wrapper = mount(Loader, {
      props: { image: true },
    });

    // Assert that the div has the skeloton__image class
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__image');
  });

  it('applies the skeloton__icon class when icon prop is true', () => {
    const wrapper = mount(Loader, {
      props: { icon: true },
    });

    // Assert that the div has the skeloton__icon class
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__icon');
  });

  it('applies multiple classes when multiple props are true', () => {
    const wrapper = mount(Loader, {
      props: { title: true, subTitle: true, logo: true },
    });

    // Assert that the div has the skeloton__title, skeloton__subtitle, and skeloton__logo classes
    const div = wrapper.find('div.skeleton');
    expect(div.classes()).toContain('skeloton__title');
    expect(div.classes()).toContain('skeloton__subtitle');
    expect(div.classes()).toContain('skeloton__logo');
  });
});
