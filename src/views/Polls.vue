<template>
  <v-container tag="section" class="polls">
    <h1>All Polls</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { Poll } from '@/models';

@Component
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
