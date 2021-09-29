import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "@/components/Footer";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Footer vuex", () => {
  let mutations;
  let store;
  let getters;

  beforeEach(() => {
    mutations = {
      deleteCompletedTasks: jest.fn(),
      changeFilter: jest.fn(),
    };
    getters = {
      activeTasksCount: jest.fn(),
      tasksCount: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
      getters,
    });
  });
  it('call "changeTaskStatus"', () => {
    const wrapper = mount(Footer, { store, localVue });
    wrapper.find('input[name="filter"]').trigger("change");
    expect(mutations.changeFilter).toHaveBeenCalled();
  });
  it('call "deleteCompletedTasks"', () => {
    const wrapper = mount(Footer, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.deleteCompletedTasks).toHaveBeenCalled();
  });
});
