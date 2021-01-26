export default {
  state: {
    tasks: [
      {
        task: "Task 1",
        isComplete: false,
        id: 1
      },
      {
        task: "Task 2",
        isComplete: false,
        id: 2
      },
      {
        task: "Task 3",
        isComplete: false,
        id: 3
      },
      {
        task: "Task 4",
        isComplete: false,
        id: 4
      },
      {
        task: "Task 5",
        isComplete: true,
        id: 5
      }
    ],
    tabsType: {
      type: "validTasks"
    }
  },
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
    filterTasks(state, nextTab) {
      state.tabsType.type = nextTab;
      console.log(nextTab);
    }
    //changeState(state) {}
  },
  actions: {},
  getters: {
    validTasks(state) {
      return state.tasks.filter(task => {
        return task.task;
      });
    },
    completedTasks(state) {
      return state.tasks.filter(task => task.isComplete === true);
    },
    activeTasks(state) {
      return state.tasks.filter(task => task.isComplete === false);
    },
    taskFilter(state, getters) {
      if (state.tabsType.type === "validTasks") {
        return state.tasks.filter(task => {
          return task.task;
        });
      } else if (state.tabsType.type === "activeTasks") {
        return getters.activeTasks;
      } else if (state.tabsType.type === "completedTasks") {
        return getters.completedTasks;
      }
    },
    tasksCount(state, getters) {
      return getters.validTasks.length;
    },
    completedCount(state, getters) {
      return getters.completedTasks.length;
    }
  }
};
