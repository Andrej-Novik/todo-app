import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tasks: [],
    filter: "All"
  },
  actions: {
    getFromStorage(context) {
      context.commit("getFromStorage");
    }
  },
  mutations: {
    getFromStorage(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks")) || new Array();
    },

    createTask(state, newTask) {
      if (!newTask) return;
      state.tasks.unshift({
        id: uuidv4(),
        taskText: newTask,
        isComplete: false
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeTaskStatus(state, { id, value }) {
      state.tasks = state.tasks.map(task =>
        task.id === id ? { ...task, isComplete: value } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeAllStatus(state) {
      state.tasks.map(task => {
        task.isComplete = true;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeFilter(state, filter) {
      state.filter = filter;
    },

    deleteTask(state, givenIndex) {
      state.tasks.splice(givenIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    deleteCompletedTasks(state) {
      state.tasks = state.tasks.filter(task => !task.isComplete);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    tasksTypeChanging(state, givenId) {
      state.tabs.map(tab => {
        if (tab.id === givenId) {
          tab.isSelected = true;
          state.tabsType = tab.tabName;
        } else tab.isSelected = false;
      });
    }
  },
  getters: {
    filteredTasks(state) {
      switch (state.filter) {
        case "Active":
          return state.tasks.filter(task => !task.isComplete);
        case "Completed":
          return state.tasks.filter(task => task.isComplete);
        default:
          return state.tasks;
      }
    },
    tasksCount(state) {
      return state.tasks.length;
    },
    activeTasksCount(state) {
      return state.tasks.filter(task => !task.isComplete).length;
    }
  }
};
