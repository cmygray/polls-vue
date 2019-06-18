<template>
  <v-container tag="section" class="polls">
    <h1>All Polls</h1>

    <poll-item v-for="poll in polls" :key="poll.id" :poll="poll" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import PollItem from '@/components/PollItem.vue';
import { Poll } from '@/models';

@Component({
  components: {
    PollItem,
  },
})
export default class Polls extends Vue {
  @Getter('allPolls')
  polls: Poll[];

  @Action('fetchPolls')
  fetchPolls: () => Poll[];

  async mounted() {
    await this.fetchPolls();
  }
}
</script>

<style lang="scss"></style>
