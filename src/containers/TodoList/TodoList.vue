<template>
  <div>
    <h1><Header @add="addUndoItem" /></h1>
    <UndoList :list="undoList" @delete="deleteUndoItem" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UndoList from "./components/UndoList.vue";
export default {
  name: "TodoList",
  data() {
    return {
      undoList: [],
    };
  },
  components: {
    Header,
    UndoList,
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push({
        status: "div",
        value: inputValue,
      });
    },
    deleteUndoItem(index) {
      this.undoList.splice(index, 1);
    },
  },
};
</script>
