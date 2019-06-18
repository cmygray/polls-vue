import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';

import Polls from '@/views/Polls.vue';
import { pollList } from '../__fixtures__';
import '../setup';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Polls.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Polls, {
      localVue,
      store: new Vuex.Store({
        actions: {
          fetchPolls: () => Promise.resolve()
        },
        getters: {
          allPolls: () => pollList
        }
      }),
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('on component mounted', () => {
    beforeEach(() => {
      wrapper = mount(Polls, {
        localVue,
        computed: {
          polls: () => pollList
        },
        mocks: {
          $store: {
            dispatch: jest.fn()
          }
        }
      });
    })
    it('should dispatch expected action', () => {
      expect(wrapper.vm.$store.dispatch).toBeCalledWith('fetchPolls')
    })
  })
});
