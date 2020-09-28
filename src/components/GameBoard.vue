<template>
  <div>
      <table class="sudokuTable">
          <tbody>
            <tr v-for="row in 9" :key="row-1">
                <td v-for="col in 9" :key="col-1">
                  <input v-bind:value="sudokuMatrix[row-1][col-1].Num" v-on:input="updateSudokuMatrix($event.target.value, row-1, col-1)" type="text" class="Cell" pattern="[1-9]" />
                </td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { myStore } from "../modules/store"
//import { computed } from "vue"

export default {
  name: 'GameBoard',
  afterMount() {
    //console.log(this.sudokuMatrix)
  },
  setup() {
    const sudoku = myStore
    sudoku.createSudokuMatrix()
    return sudoku
  }
}
</script>

<style scoped>
  .sudokuTable {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    border: 2px solid;
  }
  td {
      border: 1px solid;
  }
  input:invalid {
    background: red;
  }
  .Cell {
    border: None;
    text-align: center;
    height: 50px;
    width: 50px;
  }
  td:nth-child(3),td:nth-child(6)
  {
      border-right: 2px solid;
  }
  tr:nth-child(3),tr:nth-child(6)
  {
      border-bottom: 2px solid;
  }
</style>