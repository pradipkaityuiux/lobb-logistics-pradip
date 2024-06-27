import { mount } from '@vue/test-utils';
import ImageCard from '@/layout/commonBlocks/ImageCard.vue';
import { createStore } from 'vuex';

describe('ImageCard', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        data: {
          content: {
            thumbNailImage: 'test-thumb.png',
            logo: 'test-logo.png',
            title: 'Test Title',
            subTitle: 'Test Subtitle',
          },
        },
        error: null,
        loading: false,
        detailedViewOpen: false,
      },
      mutations: {
        setDetailedView: jest.fn(),
      },
    });
  });

  it('renders component correctly with data from Vuex', () => {
    const wrapper = mount(ImageCard, {
      global: {
        plugins: [store],
      },
    });

    // Assert that the thumbnail image is rendered with correct src and alt attribute
    const thumbImg = wrapper.find('img[alt="anime main image"]');
    expect(thumbImg.exists()).toBe(true);
    expect(thumbImg.attributes('src')).toBe('test-thumb.png');

    // Assert that the logo image is rendered with correct src and alt attribute
    const logoImg = wrapper.find('img[alt="card-logo"]');
    expect(logoImg.exists()).toBe(true);
    expect(logoImg.attributes('src')).toBe('test-logo.png');

    // Assert that title and subtitle are rendered correctly
    expect(wrapper.find('h2').text()).toBe('Test Title');
    expect(wrapper.find('p').text()).toBe('Test Subtitle');

    // Assert the presence and text of the small tag
    expect(wrapper.find('small').text()).toBe('In-app purchase');

    // Check if the loader is not displayed when loading is false
    expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(false);
  });

  it('shows Loader component when loading is true', async () => {
    store.state.loading = true;
    const wrapper = mount(ImageCard, {
      global: {
        plugins: [store],
      },
    });

    // Check if the loader is displayed
    expect(wrapper.findComponent({ name: 'Loader' }).exists()).toBe(false);
  });

  it('renders noMargin class when detailedViewOpen is true', async () => {
    store.state.detailedViewOpen = true;
    const wrapper = mount(ImageCard, {
      global: {
        plugins: [store],
      },
    });

    // Check if the noMargin class is applied
    expect(wrapper.find('.image__card-all').classes()).toContain('noMargin');
  });

});
