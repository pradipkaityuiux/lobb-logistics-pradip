import { mount } from '@vue/test-utils';
import FooterComponent from '@/layout/commonBlocks/FooterComponent.vue';
import { createStore } from 'vuex';

describe('FooterComponent', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        data: {
          content: {
            logo: 'test-logo.png',
            title: 'Test Title',
            subTitle: 'Test Subtitle',
          },
        },
      },
    });
  });

  it('renders component correctly with data from Vuex', () => {
    const wrapper = mount(FooterComponent, {
      global: {
        plugins: [store],
      },
    });

    // Assert that the logo image is rendered with correct src and alt attribute
    const logoImg = wrapper.find('img.footer__logo');
    expect(logoImg.exists()).toBe(true);
    expect(logoImg.attributes('src')).toBe('test-logo.png');
    expect(logoImg.attributes('alt')).toBe('card-logo');

    // Assert that title and subtitle are rendered correctly
    expect(wrapper.find('h2').text()).toBe('Test Title');
    expect(wrapper.find('p').text()).toBe('Test Subtitle');

    // Assert the presence and text of the small tag
    expect(wrapper.find('small').text()).toBe('In-APP Purchase');

    // Assert the presence and text of the button for sharing
    const shareButton = wrapper.find('button.share__button');
    expect(shareButton.exists()).toBe(true);
    expect(shareButton.text()).toContain('Share Story');
  });
});
