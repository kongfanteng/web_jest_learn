import { findTestWrapper } from "@/utils/testUtils";
import TodoList from "../../TodoList.vue";
import { mount } from "@vue/test-utils";
import store from "../../../../store";

it(`
  1. 用户会在 Header 输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
`, async () => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [store],
    },
  });
  const inputElem = findTestWrapper(wrapper, "header-input").at(0);
  const content = "test1";
  inputElem.setValue(content);
  inputElem.trigger("change");
  inputElem.trigger("keyup.enter");
  await wrapper.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(1);
  expect(listItems.at(0).text()).toContain(content);
});
