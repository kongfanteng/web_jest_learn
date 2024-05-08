import { shallowMount } from "@vue/test-utils";
import Header from "../../components/Header.vue";
import { findTestWrapper } from "@/utils/testUtils";
describe("Header 组件", () => {
  it("样式发生改变，需做提示", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("输入框存在", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input").at(0);
    expect(input.exists()).toBe(true);
  });
  it("输入框初始内容为空", () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("");
  });
  it("输入框值发生变化时，数据跟随变化", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input").at(0);
    input.setValue("hello");
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe("hello");
  });
  it("输入框回车时，无内容，无反应", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input").at(0);
    input.setValue("");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeFalsy();
  });
  it("输入框回车时，有内容时，向外触发事件，同时清空 inputValue", () => {
    const wrapper = shallowMount(Header);
    const input = findTestWrapper(wrapper, "input").at(0);
    input.setValue("hello");
    input.trigger("keyup.enter");
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe("");
  });
});
