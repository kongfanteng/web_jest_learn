<template>
  <div class="undolist">
    <div class="title">
      待办事项
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
        class="item"
      >
        {{ item }}
        <span
          class="delete"
          data-test="delete-button"
          @click="() => handleDelete(index)"
          >-</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UndoList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit("delete", index);
    },
  },
};
</script>
<style scoped lang="stylus">
.undolist
  width 600px
  margin 0 auto
.title
  margin 10px 0
  line-height 30px
  font-size 24px
  font-weight bold
.count
  margin-top 5px
  float right
  display block
  width 20px
  height 20px
  line-height 20px
  text-align center
  border-radius 10px
  background-color #e6e6e6
  color #333
  font-size 12px
.list
  list-style-type none
.item
  margin-top 10px
  line-height 32px
  font-size 14px
  background-color #fff
  border-left 5px solid #629a9a
  border-radius 3px
  text-indent 10px
.delete
  margin-top 5px
  margin-right 10px
  float right
  display block
  width 20px
  height 20px
  line-height 20px
  text-align center
  border-radius 10px
  background-color #e6e6e6
  color #333
  text-indent 0
  cursor pointer
</style>
