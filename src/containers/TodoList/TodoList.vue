<template>
  <div>
    <h1><Header @add="addUndoItem" /></h1>
    <UndoList
      :list="undoList"
      @delete="deleteUndoItem"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import UndoList from "./components/UndoList.vue";
import axios from "axios";
export default {
  name: "TodoList",
  data() {
    return {
      undoList: [],
    };
  },
  mounted() {
    setTimeout(() => {
      axios
        .get("/getUndoList.json")
        .then((res) => {
          this.undoList = res.data;
        })
        .catch(() => {});
    }, 5000);
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
    changeStatus(index) {
      const newList = [];
      this.undoList.forEach((item, i) => {
        if (i === index) {
          newList.push({
            status: "input",
            value: item.value,
          });
        } else {
          newList.push(item);
        }
      });
      this.undoList = newList;
    },
    resetStatus() {
      const newList = [];
      this.undoList.forEach((item, i) => {
        newList.push({
          status: "div",
          value: item.value,
        });
      });
      this.undoList = newList;
    },
    changeItemValue(obj) {
      const { value, index } = obj;
      value && (this.undoList[index].value = value);
    },
  },
};
</script>
