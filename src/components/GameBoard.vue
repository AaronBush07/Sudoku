<template>
  <div>
      <table class="sudokuTable">
          <tbody>
            <tr v-for="(matrixRow,row) in sudokuMatrix" :key="row">
                <td v-for="(cell,col) in matrixRow" :key="col">
                  <input v-bind:value="sudokuMatrix[row][col].Num" v-on:input="updateSudokuMatrix($event.target.value, row, col)" type="text" class="Cell" pattern="[1-9]" />
                </td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {myStore} from "../modules/store"

//let sudokuMatrix = myStore.state.sudokuMatrix

export default {
  name: 'GameBoard',
  data() {
    return {
      //sudokuMatrix: myStore.state.sudokuMatrix
    };
  },
  beforeMount() {
    myStore.createSudokuMatrix();
  },
  afterMount() {
    console.log(this.sudokuMatrix)
  },
  computed: {
    sudokuMatrix: {
      get () {
        return myStore.state.sudokuMatrix
      }
    }
  },
  created() {

  },
  // setup(props, context){
  //   //context.sudokuMatrix = myStore.state.sudokuMatrix
  // },
  methods: {
    updateSudokuMatrix(value, row, col) {
      myStore.updateSudokuMatrix(value, row, col)
    } 
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