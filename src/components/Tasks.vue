<template>
  <div :class="$style.tasks" v-if="filteredTasks.length != 0">
    <Task
      v-for="(task, taskIndex) of filteredTasks"
      :key="task.id"
      :id="task.id"
      :taskIndex="taskIndex"
      :taskText="task.taskText"
      :isComplete="task.isComplete"
      @change="e => setTask(task.id, e.target.checked)"
    />
  </div>
  <div :class="$style.noTasks" v-else>
    <span> No tasks, add the first </span>
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Tasks",
  computed: mapGetters(["filteredTasks"]),
  components: {
    Task
  },
  methods: {
    ...mapMutations(["changeTaskStatus"]),
    setTask(id, value) {
      this.changeTaskStatus({ id, value });
    }
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
.noTasks {
  height: 54px;
  span {
    display: block;
    padding: 1rem;
    color: $pageColor;
    font-size: 1.125rem;
  }
}
</style>
