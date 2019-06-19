<template>
  <v-card tag="article" class="poll my-4">
    <v-card-title class="title">
      {{ poll.poll_title }}
    </v-card-title>

    <v-card-text>
      <dl v-if="isInProgress">
        <dt><small>시작</small></dt>
        <dd>{{ poll.starts_at | dateTime }}</dd>
        <dt><small>종료</small></dt>
        <dd v-if="isInProgress">
          {{ poll.ends_at | dateTime }}
        </dd>
      </dl>

      <p v-else>종료된 투표입니다</p>

      <v-radio-group
        v-if="isInProgress"
        v-model="selectedChoiceId"
        color="primary"
        label="Choices"
        hide-details
      >
        <div
          v-for="choice in choices"
          :key="`${choice.id}-${choice.votes_count}`"
        >
          <span
            ><small>득표수: {{ choice.votes_count }}</small></span
          >
          <v-radio
            :label="choice.choice_text"
            :value="choice.id"
            color="primary"
          />
        </div>
      </v-radio-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="isInProgress"
        :disabled="!selectedChoiceId"
        color="primary"
        block
        @click="handleClick"
        >Vote</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import { Choice, Poll } from '@/models';

@Component
export default class PollItem extends Vue {
  @Prop()
  poll: Poll;

  selectedChoiceId: string = '';

  now: Date = new Date();

  get isInProgress(): boolean {
    return +new Date(this.poll.ends_at) > +this.now;
  }

  get choices(): Choice[] {
    return this.poll.choices.sort((current, next) => {
      return +current.id - +next.id;
    });
  }

  @Emit('poll-item:vote')
  handleClick() {
    return this.choices.find(choice => choice.id === this.selectedChoiceId);
  }
}
</script>
