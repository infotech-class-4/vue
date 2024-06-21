<template>
  <Cell :status="false" />
</template>

<script setup>
import Cell from "./components/Cell.vue";
import { usePuzzle } from "./store/puzzle";

const { puzzle } = usePuzzle();

// export default {
// components: {

// }
//   data() {
//     return {}
//   },
//   methods:
//   {

//   }
// }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
