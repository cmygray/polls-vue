<template>
  <v-container tag="section" class="poll-edit">
    <h1>Edit Poll</h1>

    <poll-form :poll="poll" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PollForm from '@/components/PollForm.vue';
import { Poll } from '@/models';
import { Getter } from 'vuex-class';
@Component({
  components: { PollForm },
})
export default class PollEdit extends Vue {
  @Prop()
  id: string;

  @Getter('getPollById')
  getPollById: (id: string) => Poll;

  get poll(): Poll {
    return this.getPollById(this.id);
  }
}
</script>

<style lang="scss"></style>
