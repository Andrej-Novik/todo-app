import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Input from "@/components/Input";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Input", () => {
  const wrapper = shallowMount(Input);

  test("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });
  test("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
  test("setData", async () => {
    await wrapper.setData({ newTaskText: "newTaskText1" });
    expect(wrapper.vm.newTaskText).toBe("newTaskText1");
  });
});
