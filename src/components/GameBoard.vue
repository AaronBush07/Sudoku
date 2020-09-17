<template>
  <div>
      <table class="sudokuTable">
          <tbody>
            <tr v-for="index in 9" :key="index">
                <td v-for="cell in 9" :key="cell"><input type="text" class="Cell" /></td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
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