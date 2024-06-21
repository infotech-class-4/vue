import { defineStore } from "pinia";
import { ref } from "vue";

export const usePuzzle = defineStore("nono", () => {
  const puzzle = ref([
    [0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
  ]);

  return {
    puzzle,
  };
});

[
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0],
][
  // yukarida verilen arrayi 90 derece cevirmek

  ([0, 0, 1], [0, 1, 1], [0, 1, 0])
];
