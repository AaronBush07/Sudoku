import { reactive, toRefs } from "vue";

const state = reactive({
  sudokuMatrix: [],
  originalMatrix: [],
  level: ["EASY", "MEDIUM", "SPICY"]
});

export default function myStore() {
  return {...toRefs(state)}
}