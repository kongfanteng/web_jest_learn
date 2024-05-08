<template>
  <div>
    <h1><Header @add="addUndoItem" /></h1>
    <ul>
      <li v-for="item in undoList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "TodoList",
  data() {
    return {
      undoList: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push(inputValue);
    },
  },
};
</script>
