import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Input from "@/components/Input";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Input vuex", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      changeAllStatus: jest.fn(),
      createTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "changeAllStatus"', () => {
    const wrapper = shallowMount(Input, { store, localVue });
    wrapper.find("span").trigger("click");
    expect(mutations.changeAllStatus).toHaveBeenCalled();
  });
  it('call "createTask"', () => {
    const wrapper = shallowMount(Input, { store, localVue });
    wrapper.find("form").trigger("submit.prevent");
    expect(mutations.createTask).toHaveBeenCalled();
  });
});
describe("test for component Input", () => {
  const wrapper = mount(Input);
  it("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
  it("setData", async () => {
    await wrapper.setData({ newTaskText: "newTaskText1" });
    expect(wrapper.vm.newTaskText).toBe("newTaskText1");
  });
});
