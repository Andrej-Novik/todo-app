import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Tasks from "@/components/Tasks";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Tasks vuex", () => {
  let mutations;
  let store;
  let getters;

  beforeEach(() => {
    mutations = {
      getFromStorage: jest.fn(),
      changeTaskStatus: jest.fn()
    };
    getters = {
      filteredTasks: () => [
        {
          id: "1",
          message: "aaa",
          checked: false
        }
      ]
    };
    store = new Vuex.Store({
      mutations,
      getters
    });
  });
  it('call "changeTaskStatus"', () => {
    const wrapper = mount(Tasks, { store, localVue });
    console.log(wrapper.html());
    wrapper.find("input").trigger("change");
    expect(mutations.changeTaskStatus).toHaveBeenCalled();
  });
  it("render a Task", () => {
    const wrapper = shallowMount(Tasks, { store, localVue });
    expect(wrapper.find("Task")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
