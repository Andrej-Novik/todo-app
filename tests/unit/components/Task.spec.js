import { shallowMount, createLocalVue } from "@vue/test-utils";
import Task from "@/components/Task";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Task vuex", () => {
  let mutations;
  let store;

  beforeEach(() => {
    mutations = {
      deleteTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });
  it('call "deleteTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
});
describe("test for Task vuex", () => {
	const wrapper = shallowMount(Task);
	
  it("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
  it("render a button", () => {
    expect(wrapper.find("button")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
