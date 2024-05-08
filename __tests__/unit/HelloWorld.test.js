import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";
import { createApp, h } from "vue";
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "HelloWorld";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    // expect(wrapper.text()).toMatch(msg);
    // expect(wrapper.findAll(".hello").length).toBe(1);
    // expect(wrapper.props("msg")).toEqual("HelloWorld");
    expect(wrapper.element).toMatchSnapshot();
  });
});
