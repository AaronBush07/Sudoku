<template>
  <Header/>
  <Controller/>
  <GameBoard/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import GameBoard from './components/GameBoard.vue'
import Controller from './components/Controller.vue'
import Footer from './components/Footer.vue'
//import { ref, onErrorCaptured } from "vue";

export default {
  name: 'App',
  components: {
    Header,
    GameBoard,
    Controller,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
