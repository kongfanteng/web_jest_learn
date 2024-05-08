import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import Header from "../../components/Header.vue";

it("TodoList 初始化时，undoList 应该为空", () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.vm.undoList;
  expect(undoList).toEqual([]);
});
it("TodoList 执行 addItem 时，会增加一个内容", () => {
  const wrapper = shallowMount(TodoList);
  const content = "吃饭";
  wrapper.vm.addUndoItem(content);
  const undoList = wrapper.vm.undoList;
  expect(undoList).toEqual([content]);
});
it("TodoList 监听到 Header 的 add 事件时，会增加一个内容", () => {
  const content = "吃饭";
  const wrapper = shallowMount(TodoList);
  const header = wrapper.findComponent(Header);
  header.vm.$emit("add", content);
  const undoList = wrapper.vm.undoList;
  expect(undoList).toEqual([content]);
});
