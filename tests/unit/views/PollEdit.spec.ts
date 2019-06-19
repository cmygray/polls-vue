import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import PollEdit from '@/views/PollEdit.vue';
import '../setup';
import { poll } from '../__fixtures__';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('PollEdit.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    // https://github.com/vuetifyjs/vuetify/issues/6046
    wrapper = shallowMount(PollEdit, {
      localVue,
      propsData: {
        id: 'blah'
      },
      store: new Vuex.Store({
        getters: {
          getPollById: () => () => poll
        }
      })
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('#handleSubmit', () => {
    const ID = 'poll-id'
    const DATA = {
      poll_title: 'POLL-TITLE'
    }
    const NEXT_ROUTE = '/polls'

    beforeEach(() => {
      wrapper = shallowMount(PollEdit, {
        localVue,
        propsData: {
          id: ID
        },
        computed: {
          poll: () => poll,
        },
        mocks: {
          $store: {
            dispatch: jest.fn().mockImplementation(() => Promise.resolve())
          },
          $router: {
            push: jest.fn()
          }
        },
        stubs: {
          PollForm: '<div id="stubbed-child"></div>',
        },
      })
    })

    it.skip('should handle event as expected', () => {
      expect.assertions(1)
      jest.spyOn(wrapper.vm, 'handleSubmit')
      wrapper.find('#stubbed-child').vm.$emit('poll-form:submit')

      expect(wrapper.vm.handleSubmit).toBeCalled()
    })

    it('should dispatch action with poll attributes as expected', async () => {
      await wrapper.vm.handleSubmit(DATA)

      expect(wrapper.vm.$store.dispatch).toBeCalledWith('updatePoll', {
        id: ID,
        ...DATA
      })
    })

    it('should push new route as expected', async () => {
      await wrapper.vm.handleSubmit(DATA)

      expect(wrapper.vm.$router.push).toBeCalledWith(NEXT_ROUTE)
    })
  })
});
