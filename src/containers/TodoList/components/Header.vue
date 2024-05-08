<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        data-test="input"
        type="text"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        class="header-input"
        placeholder="输入待办事项"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoListHeader",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = "";
      }
    },
  },
};
</script>
<style scoped lang="stylus">
.header
  line-height 60px
  background #334
.header-content
  width 600px
  margin 0 auto
  color #fff
  font-size 24px
.header-input
  float right
  width 360px
  margin-top 16px
  line-height 24px
  outline none
  color #333
  text-indent 8px
</style>
