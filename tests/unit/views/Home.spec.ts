import { createLocalVue, mount } from '@vue/test-utils';

import Home from '@/views/Home.vue';
import '../setup';

const localVue = createLocalVue();

describe('Home.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
