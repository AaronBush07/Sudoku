<template>
  <div>
      <table class="sudokuTable">
          <tbody>
            <tr v-for="index in 9" :key="index">
                <td v-for="cell in 9" :key="cell"><input type="text" class="Cell" pattern="[1-9]" /></td>
            </tr>
          </tbody>
      </table>
      <ul >
            <li v-for="level in myStore().level.value" :key="level">{{level}}</li>
          </ul>
  </div>
</template>

<script>
import myStore from "../modules/store"

export default {
  name: 'GameBoard',
  data() {
    return {
      myStore
    };
  },
  beforeMount() {
    //let i = 80;
  },
  created() {

  },
  methods: {
    
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