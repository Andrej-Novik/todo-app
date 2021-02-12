import { mount } from "@vue/test-utils";
import Tabs from "@/components/Tabs";

describe("test for component Tabs", () => {
  const wrapper = mount(Tabs);
  test("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });
  test("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});

describe("test for component Tabs", () => {
  const wrapper = mount(Tabs, {
    propsData: {
      options: [],
      value: "All"
    }
  });

  test("test for props", () => {
    expect(wrapper.props().options).toStrictEqual([]);
    expect(wrapper.props().value).toBe("All");
  });
});
