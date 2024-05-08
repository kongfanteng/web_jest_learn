import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import Header from "../../components/Header.vue";
import UndoList from "../../components/UndoList.vue";

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
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: [1, 2, 3],
  });
  wrapper.vm.addUndoItem(4);
  expect(wrapper.vm.undoList).toEqual([1, 2, 3, 4]);
});
it("TodoList 调用 UndoList，应该传递 list 参数", () => {
  const wrapper = shallowMount(TodoList);
  const undoList = wrapper.findComponent(UndoList);
  const list = undoList.props("list");
  expect(list).toBeTruthy();
});
it("TodoList 中 handleDeleteItem 方法被调用时，UndoList 列表内容会减少一个", () => {
  const wrapper = shallowMount(TodoList);
  wrapper.setData({
    undoList: ["吃饭", "睡觉", "打豆豆"],
  });
  wrapper.vm.deleteUndoItem(1);
  expect(wrapper.vm.undoList).toEqual(["吃饭", "打豆豆"]);
});
