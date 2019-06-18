import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';

import Polls from '@/views/Polls.vue';
import { poll, pollList } from '../__fixtures__';
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

  describe('#addPoll', () => {
    const POLL_TITLE = 'poll title'

    beforeEach(() => {
      wrapper = mount(Polls, {
        localVue,
        data: () => ({ titleToAppend: POLL_TITLE }),
        computed: {
          polls: () => pollList
        },
        store: new Vuex.Store({
          actions: {
            fetchPolls: () => Promise.resolve(),
            createPoll: () => Promise.resolve(poll)
          }
        }),
        mocks: {
          $router: {
            push: jest.fn()
          }
        }
      });
    })

    it('should dispatch createPoll action', async () => {
      const spy = jest.spyOn(wrapper.vm.$store, 'dispatch')
      await wrapper.vm.addPoll()

      expect(spy).toBeCalledWith('createPoll', POLL_TITLE)
    })

    it('should redirect to poll.edit after creation', async () => {
      await wrapper.vm.addPoll()

      expect(wrapper.vm.$router.push).toBeCalledWith({
        name: 'poll.edit',
        params: {
          id: poll.id
        },
      })
    })
  })
});
