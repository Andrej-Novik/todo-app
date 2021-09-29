import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title";

describe("test for component Title", () => {
  const wrapper = shallowMount(Title);
  it("render a h1", () => {
    expect(wrapper.find("h1")).toBeTruthy();
  });
  it("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
