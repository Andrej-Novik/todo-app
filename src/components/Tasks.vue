<template>
  <div :class="$style.tasks">
    <Task
      v-for="task of tasks"
      :key="task"
      :task="task.task"
      :checked="task.isComplete"
    />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  data: () => ({
    tasks: [
      {
        task: "Task 1",
        isComplete: false
      },
      {
        task: "Task 2",
        isComplete: false
      },
      {
        task: "Task 3",
        isComplete: false
      },
      {
        task: "Task 4",
        isComplete: false
      },
      {
        task: "Task 5",
        isComplete: false
      }
    ]
  }),
  components: {
    Task
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.tasks {
  max-height: 143px;
  overflow: auto;
  @include forMobile {
    max-height: 190px;
  }
}
</style>
