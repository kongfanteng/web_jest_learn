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
});
