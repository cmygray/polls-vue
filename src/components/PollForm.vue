<template>
  <v-form class="poll-form" @submit.prevent="handleSubmit">
    <v-text-field v-model="poll_title" label="Poll Title" />

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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Choice, Poll } from '@/models';

@Component
export default class PollForm extends Vue {
  @Prop()
  poll: Poll;

  poll_title: string = this.poll.poll_title;
  choices: Choice[] = this.poll.choices;

  get isUpdated(): boolean {
    return (
      !!this.poll_title &&
      this.poll_title !== this.poll.poll_title &&
      this.choices.every(choice => !!choice['choice_text'])
    );
  }

  handleSubmit() {
    this.$emit('poll-form:submit', {
      poll_title: this.poll_title,
      choices: this.choices,
    });
  }
}
</script>

<style lang="scss"></style>
