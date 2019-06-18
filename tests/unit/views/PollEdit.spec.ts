import { mount, createLocalVue } from '@vue/test-utils';
import PollEdit from '@/views/PollEdit.vue';
import '../setup';

const localVue = createLocalVue();

describe('PollEdit.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(PollEdit, {
      localVue,
      propsData: {
        id: 'blah'
      }
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
