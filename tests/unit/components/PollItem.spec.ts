import { createLocalVue, mount } from '@vue/test-utils';

import PollItem from '@/components/PollItem.vue';
import { poll } from '../__fixtures__';
import '../setup';

const localVue = createLocalVue();

const NOW = new Date('2019-06-18T11:00:00.000Z')
const PAST = '2019-06-17T11:00:00.000Z'
const FUTURE = '2019-06-19T11:00:00.000Z'

describe('PollItem.vue', () => {
  let wrapper: any;

  describe('when ongoing poll is provided as prop', () => {
    beforeEach(() => {
      wrapper = mount(PollItem, {
        localVue,
        propsData: {
          poll: {
            ...poll,
            ends_at: FUTURE
          }
        },
        data: () => ({ now: NOW })
      });
    })

    it('should render as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })

  describe('when ended poll is provided as prop', () => {
    beforeEach(() => {
      wrapper = mount(PollItem, {
        localVue,
        propsData: {
          poll: {
            ...poll,
            ends_at: PAST
          }
        },
        data: () => ({ now: NOW })
      });
    })

    it('should render as expected', () => {
      expect(wrapper).toMatchSnapshot();
    });
  })

  describe('#handleClick', () => {
    const SELECTED_CHOICE = poll.choices[0];
    const EVENT = 'poll-item:vote'

    it('should find and emit selected choice with expected event', () => {
      wrapper.setData({
        selectedChoiceId: SELECTED_CHOICE.id
      })
      wrapper.vm.handleClick()

      expect(wrapper.emitted()[EVENT]).toEqual(expect.arrayContaining([
        [SELECTED_CHOICE]
      ]))
    })
  })
});
