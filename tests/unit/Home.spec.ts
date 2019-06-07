import { shallowMount, createLocalVue } from '@vue/test-utils';

import Home from '@/views/Home.vue';

const localVue = createLocalVue();

describe('Home.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
