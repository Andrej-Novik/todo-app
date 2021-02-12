import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";
import { cloneDeep } from "lodash";

describe("unit tests action state", () => {
  test("set state used action", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store(cloneDeep(storeConfig));
    store.dispatch("getFromStorage");
    expect(store.state.tasks.length).toBe(0);
  });
});
