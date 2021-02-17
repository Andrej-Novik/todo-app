import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";
import { cloneDeep } from "lodash";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(cloneDeep(storeConfig));

describe("tests for store", () => {
  it("set state used action", () => {
    store.dispatch("getFromStorage");
    expect(store.state.tasks.length).toBe(0);
  });
  it("createTask", () => {
    let newTask = "newTask";
    store.commit("createTask", newTask);
    expect(store.state.tasks[0].taskText).toBe("newTask");
    expect(store.state.tasks[0].isComplete).toBe(false);
    expect(store.state.tasks[0].id).toBeTruthy();
  });
  it("filteredTasks", () => {
    store.state.filter = "All";
    expect(store.getters.filteredTasks).toBe(store.state.tasks);
    store.state.filter = "Active";
    expect(store.getters.filteredTasks.length).toBe(1);
    store.state.filter = "Completed";
    expect(store.getters.filteredTasks.length).toBe(0);
  });
  it("changeFilter", () => {
    let newFilter = "filter";
    store.commit("changeFilter", newFilter);
    expect(store.state.filter).toBe(newFilter);
  });
  it("changeTaskStatus", () => {
    let id = store.state.tasks[0].id;
    let isComplete = store.state.tasks[0].isComplete;
    store.commit("changeTaskStatus", id);
    expect(store.state.tasks[0].isComplete).toBe(!isComplete);
  });
  it("tasksCount", () => {
    expect(store.getters.tasksCount).toBe(store.state.tasks.length);
  });
  it("activeTasksCount", () => {
    expect(store.getters.activeTasksCount).toBe(
      store.state.tasks.filter(task => !task.isComplete).length
    );
  });
  it("deleteCompletedTasks", () => {
    store.commit("deleteCompletedTasks");
    expect(store.state.tasks).toStrictEqual(
      store.state.tasks.filter(task => !task.isComplete)
    );
  });
  it("changeAllStatus", () => {
    store.commit("changeAllStatus");
    expect(store.state.tasks).toStrictEqual(
      store.state.tasks.map(task => {
        task.isComplete = true;
      })
    );
  });
  it("deleteTask", () => {
    let givenIndex = 0;
    store.commit("deleteTask", givenIndex);
    expect(store.state.tasks).toStrictEqual(
      store.state.tasks.splice(givenIndex, 1)
    );
  });
});
