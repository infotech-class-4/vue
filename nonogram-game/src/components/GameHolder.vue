<template>
  <div>
    <div class="d-flex flex-row mb-2">
      <div class="d-flex justify-center align-center selection">
        <Selection />
      </div>
      <div class="d-flex justify-start align-end flex-row pa-0 ma-0">
        <template v-for="item in puzzleWidth">
          <Summary direction="vertical" :list="[2, 1, 3]" />
        </template>
      </div>
    </div>
    <template v-for="item in puzzleHeight">
      <div class="d-flex flex-row">
        <div class="d-flex justify-end mr-2">
          <Summary :list="[2, 1, 3]"></Summary>
        </div>
        <div class="d-flex justify-start">
          <template v-for="item in puzzleWidth">
            <Cell></Cell>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import Cell from "./Cell.vue";
import Selection from "./Selection.vue";
import Summary from "./Summary.vue";

import { usePuzzle } from "../store/puzzle.js";
const store = usePuzzle();

const { puzzleWidth, puzzleHeight, puzzleLine } = store;

console.log(store);
</script>

<style scoped>
.selection {
  min-width: 157px;
}
</style>
