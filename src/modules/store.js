
import { reactive, readonly, toRefs } from "vue";
import { matrix } from "./matrix"

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
  state.sudokuMatrix = matrix.reflectHorizontal(state.sudokuMatrix);
  validateSudoku()
}

function validateSudoku() {
  return false;
}


function updateSudokuMatrix(value, row, col) {
  state.sudokuMatrix[row][col] = {Num:value}
  console.log("updated")
  console.log(state.sudokuMatrix[row][col].Num)
  console.log(state.sudokuMatrix)
}

export const myStore = readonly({
  ...toRefs(state),
  createSudokuMatrix,
  updateSudokuMatrix
})