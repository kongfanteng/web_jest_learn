import { shallowMount } from "@vue/test-utils";
import UndoList from "../../components/UndoList.vue";
import { findTestWrapper } from "@/utils/testUtils";
describe("UndoList 组件", () => {
  it("list 参数为[]，count值应该为0，且列表无内容", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [],
      },
    });
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "item");
    expect(countElem.at(0).text()).toEqual("0");
    expect(listItems.length).toEqual(0);
  });
  it("list 参数为[{status, value1}, {status, value2}, {status, value3}]，count 值应该为3，且列表有内容，且存在删除按钮", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const countElem = findTestWrapper(wrapper, "count");
    const listItems = findTestWrapper(wrapper, "item");
    const deleteBtns = findTestWrapper(wrapper, "delete-button");
    expect(countElem.at(0).text()).toEqual("3");
    expect(listItems.length).toEqual(3);
    expect(deleteBtns.length).toEqual(3);
  });
  it("删除按钮被点击时，向外触发删除事件", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const deleteBtn = findTestWrapper(wrapper, "delete-button").at(1);
    deleteBtn.trigger("click");
    expect(wrapper.emitted().delete).toBeTruthy();
    expect(wrapper.emitted().delete[0][0]).toBe(1);
  });
  it("列表项被点击，向外触发 status 事件", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "div", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const deleteBtn = findTestWrapper(wrapper, "item").at(1);
    deleteBtn.trigger("click");
    expect(wrapper.emitted().status).toBeTruthy();
    expect(wrapper.emitted().status[0][0]).toBe(1);
  });
  it("列表显示一个输入框，两个正常列表内容", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "input", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const input = findTestWrapper(wrapper, "input").at(0);
    expect(input.element.value).toBe("2");
  });
  it("输入框失去焦点时，向外触发 reset 事件", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "input", value: 2 },
          { status: "div", value: 3 },
        ],
      },
    });
    const input = findTestWrapper(wrapper, "input").at(0);
    input.trigger("blur");
    expect(wrapper.emitted().reset).toBeTruthy();
  });
  it("输入框变化时，向外触发 change 事件", () => {
    const wrapper = shallowMount(UndoList, {
      props: {
        list: [
          { status: "div", value: 1 },
          { status: "input", value: 123 },
          { status: "div", value: 3 },
        ],
      },
    });
    const input = findTestWrapper(wrapper, "input").at(0);
    input.trigger("change");
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change[0][0]).toEqual({
      value: "123",
      index: 1,
    });
  });
});
