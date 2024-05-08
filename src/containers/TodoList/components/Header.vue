<template>
  <div>
    <input
      data-test="input"
      type="text"
      v-model="inputValue"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script>
export default {
  name: "TodoListHeader",
  data () {
    return {
      inputValue: "",
    };
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = "";
      }
    },
  },
};
</script>
