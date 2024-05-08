import { shallowMount } from "@vue/test-utils";
import TodoList from "../../TodoList.vue";

it("测试 组件渲染正常", () => {
  const wrapper = shallowMount(TodoList);
  expect(wrapper.exists()).toBe(true);
});
