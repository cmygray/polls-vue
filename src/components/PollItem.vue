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
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Poll } from '@/models';

@Component
export default class PollItem extends Vue {
  @Prop()
  poll: Poll;

  now: Date = new Date();

  get isInProgress(): boolean {
    return +new Date(this.poll.ends_at) > +this.now;
  }
}
</script>
