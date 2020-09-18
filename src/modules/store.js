import { reactive, readonly } from "vue";

const state = reactive({
  sudokuMatrix: [],
  originalMatrix: [],
  level: ["EASY", "MEDIUM", "SPICY"]
});

function createSudokuMatrix() {
  /**Create blank 9x9 Sudoku board */
  console.log("Create new matrix");
  state.sudokuMatrix = [];
  for (let k = 0; k < 9; k++) {
    state.sudokuMatrix.push(Array.from({length:9}, (_,i) => i+1).map(j=>{return {Num:j}}) )
  }
  state.originalMatrix = state.sudokuMatrix;
}

function updateSudokuMatrix(value, row, col) {
  state.sudokuMatrix[row][col] = {Num:value}
}

export const myStore = readonly({
  state,
  createSudokuMatrix,
  updateSudokuMatrix
})