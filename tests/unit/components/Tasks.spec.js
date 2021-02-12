import { mount, createLocalVue } from "@vue/test-utils";
import Tasks from "@/components/Tasks";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Tasks", () => {
  let mutations;
  let store;
  let getters;

  beforeEach(() => {
    mutations = {
      getFromStorage: jest.fn()
    };
    getters = {
      filteredTasks: () => [
        {
          id: "1",
          message: "aaa",
          checked: false
        },
        {
          id: "2",
          message: "bbb",
          checked: false
        }
      ]
    };
    store = new Vuex.Store({
      mutations,
      getters
    });
  });

  it("render a Task", () => {
    const wrapper = mount(Tasks, { store, localVue });
    expect(wrapper.find("Task")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});

//describe("test for component Tasks", () => {
//  const wrapper = mount(Tasks);

//  test("render a Task", () => {
//    expect(wrapper.find("Task")).toBeTruthy();
//  });
//});
