<template>
  <v-form class="poll-form" @submit.prevent="handleSubmit">
    <v-text-field v-model="poll_title" label="Poll Title" />

    <datetime
      v-model="starts_at"
      input-id="starts_at"
      input-class="poll-form__date-time-input"
      type="datetime"
      format="yyyy-MM-dd HH:mm"
      value-zone="Asia/Seoul"
      :minute-step="10"
      :min-datetime="now"
    >
      <label slot="before" for="starts_at">Start at</label>
    </datetime>

    <datetime
      v-model="ends_at"
      class="mb-3"
      input-id="ends_at"
      input-class="poll-form__date-time-input"
      type="datetime"
      format="yyyy-MM-dd HH:mm"
      value-zone="Asia/Seoul"
      :minute-step="10"
      :min-datetime="now"
    >
      <label slot="before" for="ends_at">End at</label>
    </datetime>

    <v-text-field
      v-for="choice in choices"
      :key="choice.id"
      v-model="choice.choice_text"
      label="Choice"
    />

    <v-btn block color="primary" type="submit" :disabled="!isUpdated"
      >Save</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { Choice, Poll } from '@/models';

@Component
export default class PollForm extends Vue {
  @Prop()
  poll: Poll;

  now: string = new Date().toISOString();

  poll_title: string = this.poll.poll_title;
  starts_at: string = this.poll.starts_at || this.now;
  ends_at: string = this.poll.ends_at || this.now;
  choices: Choice[] = this.poll.choices;

  get isUpdated(): boolean {
    return (
      !!this.poll_title &&
      this.poll_title !== this.poll.poll_title &&
      this.choices.every(choice => !!choice['choice_text'])
    );
  }

  @Emit('poll-form:submit')
  handleSubmit() {
    return {
      poll_title: this.poll_title,
      choices: this.choices,
      starts_at: this.starts_at,
      ends_at: this.ends_at,
    };
  }
}
</script>

<style lang="scss">
.poll-form__date-time-input {
  display: block;
  font-size: 1rem;
}
</style>
