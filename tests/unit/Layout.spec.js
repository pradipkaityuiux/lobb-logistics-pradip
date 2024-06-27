import { mount } from '@vue/test-utils';
import Layout from '@/layout/Layout.vue';
import { createStore } from 'vuex';

describe('HomeView', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {
        detailedViewOpen: true, // Initial state as needed
      },
      actions: {
        fetchDataAction: jest.fn(),
      },
    });
  });

  it('renders AnimeOverview when detailedViewOpen is false', async () => {
    store.state.detailedViewOpen = false;
    const wrapper = mount(Layout, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'AnimeOverview' }).exists()).toBe(true);
  });

  it('renders ExpandedAnimeDetails when detailedViewOpen is true', async () => {
    store.state.detailedViewOpen = true;
    const wrapper = mount(Layout, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ name: 'ExpandedAnimeDetails' }).exists()).toBe(true);
  });

  it('fetches data on component mount', () => {
    const fetchDataAction = jest.spyOn(store, 'dispatch');
    mount(Layout, {
      global: {
        plugins: [store],
      },
    });
    expect(fetchDataAction).toHaveBeenCalledWith('fetchDataAction');
  });

  // Add more tests as per your component's requirements
});
