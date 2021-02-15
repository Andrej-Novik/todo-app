import { mount } from "@vue/test-utils";
import Tabs from "@/components/Tabs";

describe("test for component Tabs", () => {
  const wrapper = mount(Tabs);
  it("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });
  it("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});

describe("test for props of Tabs", () => {
  const wrapper = mount(Tabs, {
    propsData: {
      options: [],
      value: "All"
    }
  });

  it("test for props", () => {
    expect(wrapper.props().options).toStrictEqual([]);
    expect(wrapper.props().value).toBe("All");
  });
});
