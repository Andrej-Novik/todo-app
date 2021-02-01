import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tasks: [
      {
        taskText: "Task 1",
        isComplete: false,
        id: uuidv4()
      },
      {
        taskText: "Task 2",
        isComplete: false,
        id: uuidv4()
      },
      {
        taskText: "Task 3",
        isComplete: false,
        id: uuidv4()
      },
      {
        taskText: "Task 4",
        isComplete: false,
        id: uuidv4()
      },
      {
        taskText: "Task 5",
        isComplete: false,
        id: uuidv4()
      }
    ],
    tabs: [
      {
        id: uuidv4(),
        tabText: "All",
        isSelected: true,
        tabName: "validTasks"
      },
      {
        id: uuidv4(),
        tabText: "Active",
        isSelected: false,
        tabName: "activeTasks"
      },
      {
        id: uuidv4(),
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
      state.tasks.unshift({
        id: uuidv4(),
        taskText: newTask.taskText,
        isComplete: false
      });
    },
    changeStatus(state, givenId) {
      state.tasks.map(task => {
        if (task.id === givenId) task.isComplete = !task.isComplete;
      });
    },
    changeAllStatus(state) {
      state.tasks.map(task => {
        task.isComplete = true;
      });
    },
    deleteTask(state, givenIndex) {
      state.tasks.splice(givenIndex, 1);
    },
    tasksTypeChanging(state, givenId) {
      state.tabs.map(tab => {
        if (tab.id === givenId) {
          tab.isSelected = true;
          state.tabsType = tab.tabName;
        } else tab.isSelected = false;
      });
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
    selectedTasks(state, getters) {
      if (state.tabsType === "validTasks") {
        return getters.validTasks;
      } else if (state.tabsType === "activeTasks") {
        return getters.activeTasks;
      } else if (state.tabsType === "completedTasks") {
        return getters.completedTasks;
      }
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
