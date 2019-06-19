import { createLocalVue, shallowMount } from '@vue/test-utils';
import PollForm from '@/components/PollForm.vue';
import '../setup'
import { poll } from '../__fixtures__';

const localVue = createLocalVue();

describe('PollForm.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(PollForm, {
      localVue,
      propsData: {
        poll
      }
    });
  });

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('#handleSubmit', () => {
    const DATA = {
      poll_title: 'POLL TITLE',
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
