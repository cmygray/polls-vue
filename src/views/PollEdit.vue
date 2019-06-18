<template>
  <v-container tag="section" class="poll-edit">
    <h1>Edit Poll</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PollEdit extends Vue {
  @Prop()
  id: string;
}
</script>

<style lang="scss"></style>
