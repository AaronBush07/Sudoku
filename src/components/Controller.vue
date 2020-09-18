<template>
  <div><button v-on:click="create">Reset</button></div>
</template>

<script>

import { myStore } from "../modules/store"
export default {
  data() {
    return {
      create: myStore.createSudokuMatrix
    }
  }
}
</script>

<style>

</style>