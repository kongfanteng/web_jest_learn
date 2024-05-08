import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";
import UndoList from "../../components/UndoList.vue";
describe("TodoList 组件", () => {
  it("初始时，undoList 应该为空", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([]);
  });
  it("addUndoItem 执行后，内容增加", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1, 2, 3],
    });
    wrapper.vm.addUndoItem(4);
    expect(wrapper.vm.undoList).toEqual([1, 2, 3, 4]);
  });
  it("使用 UndoList 组件，应该传递 list 参数", () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.findComponent(UndoList);
    const list = undoList.props("list");
    expect(list).toBeTruthy();
  });
  it("handleDeleteItem 方法执行时，UndoList 内容会减少", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: ["吃饭", "睡觉", "打豆豆"],
    });
    wrapper.vm.deleteUndoItem(1);
    expect(wrapper.vm.undoList).toEqual(["吃饭", "打豆豆"]);
  });
});
