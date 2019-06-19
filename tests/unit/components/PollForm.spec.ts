import { createLocalVue, shallowMount } from '@vue/test-utils';
// @ts-ignore
import Datetime from 'vue-datetime';

import PollForm from '@/components/PollForm.vue';
import '../setup'
import { poll } from '../__fixtures__';

const localVue = createLocalVue();
localVue.use(Datetime)

const NOW = new Date('2019-06-18T11:00:00.000Z').toISOString()

describe('PollForm.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(PollForm, {
      localVue,
      propsData: {
        poll
      },
      data: () => ({ now: NOW })
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('#handleSubmit', () => {
    const DATA = {
      poll_title: 'POLL TITLE',
      starts_at: NOW,
      ends_at: NOW,
      choices: poll.choices.map((choice, index) => ({
        ...choice,
        choice_text: `CHOICE_TEXT ${index + 1}`
      }))
    }
    const EVENT = 'poll-form:submit'

    beforeEach(() => {
      wrapper.setData(DATA)
    })
    it('should emit event with data as expected', () => {
      wrapper.vm.handleSubmit()

      expect(wrapper.emitted()[EVENT]).toEqual(expect.arrayContaining([
        [DATA]
      ]))
    })
  })
});
