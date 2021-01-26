export default {
  state: {
    tasks: [
      {
        taskText: "Task 1",
        isComplete: true,
        id: 1111
      },
      {
        taskText: "Task 2",
        isComplete: true,
        id: 2222
      },
      {
        taskText: "Task 3",
        isComplete: false,
        id: 3333
      },
      {
        taskText: "Task 4",
        isComplete: false,
        id: 4444
      },
      {
        taskText: "Task 5",
        isComplete: false,
        id: 5555
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
    },
    changeStatus(state, targetId) {
      state.tasks.map(task => {
        if (task.id === targetId) task.isComplete = !task.isComplete;
      });
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
