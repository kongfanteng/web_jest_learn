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
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.addUndoItem(4);
    expect(wrapper.vm.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
      { status: "div", value: 4 },
    ]);
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
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.deleteUndoItem(1);
    expect(wrapper.vm.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 3 },
    ]);
  });
  it("changeStatus 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "div", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.changeStatus(1);
    expect(wrapper.vm.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "input", value: 2 },
      { status: "div", value: 3 },
    ]);
  });
  it("reset 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.resetStatus();
    expect(wrapper.vm.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "div", value: 2 },
      { status: "div", value: 3 },
    ]);
  });
  it("changeItemValue 方法执行时，UndoList 内容变化", () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [
        { status: "div", value: 1 },
        { status: "input", value: 2 },
        { status: "div", value: 3 },
      ],
    });
    wrapper.vm.changeItemValue({
      value: "2",
      index: 1,
    });
    expect(wrapper.vm.undoList).toEqual([
      { status: "div", value: 1 },
      { status: "input", value: "2" },
      { status: "div", value: 3 },
    ]);
  });
});
