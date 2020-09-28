<template>
  <div><button v-on:click="createSudoku">Reset</button></div>
</template>

<script>

import { myStore } from "../modules/store"
export default {
  data() { 
    return {
      createSudoku: myStore.createSudokuMatrix
    }
  }
}
</script>

<style>

</style>