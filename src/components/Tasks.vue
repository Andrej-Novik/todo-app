<template>
  <div :class="$style.tasks">
    <Task
      v-for="(task, taskIndex) of selectedTasks"
      :key="task.id"
      :taskId="task.id"
      :taskIndex="taskIndex"
      :task="task.taskText"
      :checked="task.isComplete"
    />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["selectedTasks"]),
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
