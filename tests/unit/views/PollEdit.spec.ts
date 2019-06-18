import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import PollEdit from '@/views/PollEdit.vue';
import '../setup';
import { choiceList } from '../__fixtures__';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('PollEdit.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(PollEdit, {
      localVue,
      store: new Vuex.Store({
        actions: {
          fetchChoices: () => Promise.resolve()
        },
        getters: {
          getChoicesOfPoll: () => () => choiceList
        }
      }),
      propsData: {
        id: 'blah'
      }
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('on component mounted', () => {
    beforeEach(() => {
      wrapper = mount(PollEdit, {
        localVue,
        propsData: {
          id: 'blah'
        },
        computed: {
          choices: () => choiceList,
        },
        mocks: {
          $store: {
            dispatch: jest.fn()
          }
        }
      });
    })
    it('should dispatch expected action', () => {
      expect(wrapper.vm.$store.dispatch).toBeCalledWith('fetchChoices', 'blah')
    })
  })

});
