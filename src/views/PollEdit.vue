<template>
  <v-container tag="section" class="poll-edit">
    <h1>Edit Poll</h1>
    {{ choices }}
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { Choice } from '@/models';

@Component
export default class PollEdit extends Vue {
  @Prop()
  id: string;

  @Getter('getChoicesOfPoll')
  getChoicesOfPoll: (param: string) => Choice[];

  @Action('fetchChoices')
  fetchChoices: (param: string) => Promise<Choice[]>;

  get choices(): Choice[] {
    return this.getChoicesOfPoll(this.id);
  }

  async mounted() {
    await this.fetchChoices(this.id);
  }
}
</script>

<style lang="scss"></style>
