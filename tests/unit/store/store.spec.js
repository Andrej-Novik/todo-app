import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";
import { cloneDeep } from "lodash";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(cloneDeep(storeConfig));

describe("tests for actions", () => {
  it("set state used action", () => {
    store.dispatch("getFromStorage");
    expect(store.state.tasks.length).toBe(0);
  });
});

describe("tests for mutations", () => {
  it("createTask", () => {
    let newTask = "newTask";
    store.commit("createTask", newTask);
  });
});

describe("tests for mutations", () => {
  it("changeFilter", () => {
    let filter = "filter";
    store.commit("changeFilter", filter);
  });
  //it("deleteTask", () => {
  //  let givenIndex = 0;
  //  store.commit("deleteTask", givenIndex);
  //  expect(store.state.tasks.length).toBe(store.state.tasks.length - 1);
  //});
  test("changeTaskStatus", () => {
    let id = store.state.tasks[0].id;
    let isComplete = store.state.tasks[0].isComplete;

    store.commit("changeTaskStatus", id);
    expect(store.state.tasks[0].isComplete).toBe(!isComplete);
  });
  //it("filteredTasks", () => {
  //  store.state.filter = "All";
  //  expect(store.getters.filteredTasks).toBe(store.state.tasks);
  //  store.state.filter = "Active";
  //  expect(store.getters.filteredTasks.length).toBe(1);
  //  store.state.filter = "Completed";
  //  expect(store.getters.filteredTasks.length).toBe(0);
  //});
});
