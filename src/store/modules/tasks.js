export default {
  state: {
    tasks: [
      {
        taskText: "Task 1",
        isComplete: false,
        id: 1
      },
      {
        taskText: "Task 2",
        isComplete: true,
        id: 2
      },
      {
        taskText: "Task 3",
        isComplete: false,
        id: 3
      },
      {
        taskText: "Task 4",
        isComplete: false,
        id: 4
      },
      {
        taskText: "Task 5",
        isComplete: true,
        id: 5
      }
    ],
    tabsType: {
      type: "validTasks"
    }
  },
  actions: {},
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
    }
  },
  getters: {
    validTasks(state) {
      return state.tasks.filter(task => task.taskText != "");
    },
    activeTasks(state) {
      return state.tasks.filter(task => task.isComplete === false);
    },
    completedTasks(state) {
      return state.tasks.filter(task => task.isComplete === true);
    },
    tasksCount(state, getters) {
      return getters.validTasks.length;
    },
    activeCount(state, getters) {
      return getters.activeTasks.length;
    }
  }
};
