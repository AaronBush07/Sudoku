import { reactive, readonly, toRefs } from "vue";
import { matrix } from "./matrix"

const state = reactive({
  sudokuMatrix: [],
  solutionMatrix: [],
  level: ["EASY", "MEDIUM", "SPICY"]
});


function createSudokuMatrix() {
  /**Create blank 9x9 Sudoku board */
  console.log("Create new matrix");
  state.sudokuMatrix = [];

  
  state.sudokuMatrix = matrix.createBlankMatrix();

  let m = matrix.parseGrid(state.sudokuMatrix);
  console.log(m);
  m = matrix.assign(m, "A1","4");
  console.log(m);
  state.sudokuMatrix = matrix.squaresToGrid(m);


  state.solutionMatrix = state.sudokuMatrix;
  //state.sudokuMatrix = matrix.reflectHorizontal(state.sudokuMatrix);

  validateSudoku()
}

function validateSudoku() {
  console.log(peerSolve(state.sudokuMatrix, 0,0) ? true : false);
  return false;
}

/** Every square has 20 peers. Validate for given row-col or return false. 
 * A row must validate for all numbers in its row. 
 * A col must validate for all numbers in its col. 
 * Last, a square must validate for all numbers in it's 3x3 square.
*/
function peerSolve(m, row, col) {

  let mRow = m[row];
  let mCol = []
  mCol.push(Array.from({length:9}, (_,i) => m[i][col]));
  let mSquare = [];
  for(let i = 0; i<3; i++)
  {
    for(let k = 0; k<3; k++)
    {
      let sRow = (Math.floor(row/3)*3)+i;
      let sCol = (Math.floor(col/3)*3)+k;
      mSquare.push(m[sRow][sCol]);
    }
  }

  return (matrix.validateDigits(mRow) && matrix.validateDigits(mCol) && matrix.validateDigits(mSquare));

}


function updateSudokuMatrix(value, row, col) {
  state.sudokuMatrix[row][col] = value;
  console.log("updated")
  console.log(state.sudokuMatrix[row][col])
  console.log(state.sudokuMatrix)
}

export const myStore = readonly({
  ...toRefs(state),
  createSudokuMatrix,
  updateSudokuMatrix
})