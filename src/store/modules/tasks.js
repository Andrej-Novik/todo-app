export default {
  state: {
    tasks: [
      {
        taskText: "Task 1",
        isComplete: true,
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
        isComplete: false,
        id: 5
      }
    ],
    tabs: [
      {
        id: 1,
        tabText: "All",
        isSelected: true,
        tabName: "validTasks"
      },
      {
        id: 2,
        tabText: "Active",
        isSelected: false,
        tabName: "activeTasks"
      },
      {
        id: 3,
        tabText: "Completed",
        isSelected: false,
        tabName: "completedTasks"
      }
    ],
    tabsType: "validTasks"
  },
  actions: {},
  mutations: {
    createTask(state, newTask) {
      state.tasks.unshift(newTask);
    },
    changeStatus(state, givenId) {
      state.tasks.map(task => {
        if (task.id === givenId) task.isComplete = !task.isComplete;
      });
    },
    deleteTask(state, givenIndex) {
      state.tasks.splice(givenIndex, 1);
    },
    deleteCompletedTasks(state) {
      state.tasks = state.tasks.filter(task => !task.isComplete);
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
    },
    allTabs(state) {
      return state.tabs.filter(tab => tab.taskName != "");
    }
  }
};
