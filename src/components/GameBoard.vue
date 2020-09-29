<template>
  <div>
      <table class="sudokuTable">
          <tbody>
            <tr v-for="(row,rowIndex) in sudokuMatrix" :key="row">
                <td v-for="(col,colIndex) in row" :key="col">
                  <input v-bind:value="col.Num" v-on:input="updateSudokuMatrix($event.target.value, rowIndex, colIndex)" type="text" class="Cell" pattern="[1-9]" />
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