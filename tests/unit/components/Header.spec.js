import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title";

describe("test for component Title", () => {
  const wrapper = shallowMount(Title);

  test("render a h1", () => {
    expect(wrapper.find("h1")).toBeTruthy();
  });

  test("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
});
