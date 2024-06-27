import { mount } from '@vue/test-utils';
import RefreshButton from '@/layout/commonBlocks/RefreshButton.vue';
import { createStore } from 'vuex';

describe('RefreshButton', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      fetchDataAction: jest.fn(),
    };

    store = createStore({
      state: {
        loading: false,
      },
      actions,
    });
  });

  it('renders component correctly with default class', () => {
    const wrapper = mount(RefreshButton, {
      props: { type: 'default' },
      global: {
        plugins: [store],
      },
    });

    // Assert that the button is rendered with the correct text
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('Refresh');

    // Assert that the button does not have the solid class by default
    expect(button.classes()).not.toContain('solid');
  });

  it('applies the solid class when type prop is "solid"', () => {
    const wrapper = mount(RefreshButton, {
      props: { type: 'solid' },
      global: {
        plugins: [store],
      },
    });

    // Assert that the button has the solid class
    const button = wrapper.find('button');
    expect(button.classes()).toContain('solid');
  });

  it('does not render button when loading is true', () => {
    store.state.loading = true;
    const wrapper = mount(RefreshButton, {
      global: {
        plugins: [store],
      },
    });

    // Assert that the button is not rendered when loading is true
    expect(wrapper.find('button').exists()).toBe(false);
  });

  it('calls refreshData method on button click', async () => {
    const wrapper = mount(RefreshButton, {
      global: {
        plugins: [store],
      },
    });

    // Simulate click event on the button
    await wrapper.find('button').trigger('click');

    // Verify that the fetchDataAction was dispatched
    expect(actions.fetchDataAction).toHaveBeenCalled();
  });
});
