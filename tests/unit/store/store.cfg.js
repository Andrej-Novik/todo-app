import vuex from "@/store/modules/tasks";

export default {
  state: {
    tasks: [],
    filter: "All"
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters
}