import { shallowMount } from "@vue/test-utils";
import UndoList from "../../components/UndoList.vue";
import { findTestWrapper } from "@/utils/testUtils";

it("UndoList 参数为[]，count值应该为0，且列表无内容", () => {
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
it("UndoList 参数为[1, 2, 3]，count 值应该为3，且列表有内容，且存在删除按钮", () => {
  const wrapper = shallowMount(UndoList, {
    props: {
      list: [1, 2, 3],
    },
  });
  const countElem = findTestWrapper(wrapper, "count");
  const listItems = findTestWrapper(wrapper, "item");
  const deleteBtns = findTestWrapper(wrapper, "delete-button");
  expect(countElem.at(0).text()).toEqual("3");
  expect(listItems.length).toEqual(3);
  expect(deleteBtns.length).toEqual(3);
});
it("UndoList 删除按钮被点击时，向外触发删除事件", () => {
  const wrapper = shallowMount(UndoList, {
    props: {
      list: [1, 2, 3],
    },
  });
  const deleteBtn = findTestWrapper(wrapper, "delete-button").at(0);
  deleteBtn.trigger("click");
  expect(wrapper.emitted().delete).toBeTruthy();
});
