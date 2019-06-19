<template>
  <v-container tag="section" class="poll-edit">
    <h1>Edit Poll</h1>

    <poll-form :poll="poll" @poll-form:submit="handleSubmit" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PollForm from '@/components/PollForm.vue';
import { Poll, PollAttrs } from '@/models';
import { Action, Getter } from 'vuex-class';
@Component({
  components: { PollForm },
})
export default class PollEdit extends Vue {
  @Prop()
  id: string;

  @Getter('getPollById')
  getPollById: (id: string) => Poll;

  @Action('updatePoll')
  updatePoll: (pollAttrs: PollAttrs) => Promise<Poll>;

  get poll(): Poll {
    return this.getPollById(this.id);
  }

  async handleSubmit(pollAttrs: PollAttrs) {
    try {
      await this.updatePoll({
        id: this.id,
        ...pollAttrs,
      });
      this.$router.push('/polls');
    } catch (error) {
      //
    }
  }
}
</script>

<style lang="scss"></style>
