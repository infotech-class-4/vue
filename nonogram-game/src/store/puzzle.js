import { defineStore } from "pinia";
// import { ref } from "vue";

export const usePuzzle = defineStore("nono", {
  state: () => ({
    puzzle: [
      [0, 0, 0, 1, 1],
      [0, 0, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 1, 0],
    ],
  }),
  getters: {
    puzzleWidth: (state) => {
      return state.puzzle[0].length;
    },
    puzzleHeight: (state) => state.puzzle.length,
  },
  actions: {
    puzzleLine(lineIndex) {
      return this.puzzle[lineIndex];
    },
  },
});
