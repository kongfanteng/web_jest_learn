import { findTestWrapper } from "@/utils/testUtils";
import TodoList from "../../TodoList.vue";
import { mount } from "@vue/test-utils";
import store from "../../../../store";
import UndoList from "../../components/UndoList.vue";
import axios from "../../__mocks__/axios";
beforeEach(() => {
  axios.success = true;
  jest.useFakeTimers();
});

it(`
  1. 用户会在 Header 输入框输入内容
  2. 用户会点击回车按钮
  3. 列表项应该增加用户输入内容的列表项
`, () => {
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
  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, "list-item");
    expect(listItems.length).toBe(1);
    expect(listItems.at(0).text()).toContain(content);
  });
});
it(`
  1. 用户进入页面时，请求远程数据
  2. 列表应该展示远程数据
`, async () => {
  const setTimeoutSpy = jest.spyOn(window, "setTimeout");
  const wrapper = mount(TodoList, { global: { plugins: [store] } });
  expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
  jest.runAllTimers();
  await wrapper.vm.$nextTick();
  const undoList = wrapper.findComponent(UndoList);
  await undoList.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(3);
});
it(`
  1. 用户进入页面时，请求远程数据失败
  2. 列表应该展示空数据，不应该挂掉
`, async () => {
  axios.success = false;
  const wrapper = mount(TodoList, { global: { plugins: [store] } });
  jest.runAllTimers();
  await wrapper.vm.$nextTick();
  const undoList = wrapper.findComponent(UndoList);
  await undoList.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(0);
});
