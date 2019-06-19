<template>
  <v-container tag="section" class="polls">
    <h1>All Polls</h1>

    <v-text-field v-model="titleToAppend" label="Poll title" />

    <v-btn
      large
      block
      color="primary"
      :disabled="!titleToAppend"
      @click="addPoll"
      >Create</v-btn
    >

    <poll-item
      v-for="poll in polls"
      :key="poll.id"
      :poll="poll"
      @poll-item:vote="handleVote"
    />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import PollItem from '@/components/PollItem.vue';
import { Choice, Poll } from '@/models';

@Component({
  components: {
    PollItem,
  },
})
export default class Polls extends Vue {
  titleToAppend: string = '';

  @Getter('allPolls')
  polls: Poll[];

  @Action('fetchPolls')
  fetchPolls: () => Promise<Poll[]>;

  @Action('createPoll')
  createPoll: (param: string) => Promise<Poll>;

  @Action('voteToPoll')
  vote: (choice: Choice) => Promise<Poll>;

  async mounted() {
    await this.fetchPolls();
  }

  async addPoll() {
    if (!this.titleToAppend) return;

    try {
      const { id } = await this.createPoll(this.titleToAppend);

      this.$router.push({
        name: 'poll.edit',
        params: {
          id,
        },
      });
    } catch (error) {
      //
    }
  }

  async handleVote(choice: Choice) {
    if (!choice) return;

    try {
      await this.vote(choice);
    } catch (error) {
      //
    }
  }
}
</script>

<style lang="scss"></style>
