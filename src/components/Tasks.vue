<template>
  <div :class="$style.tasks" v-if="filteredTasks.length != 0">
    <Task
      v-for="(task, taskIndex) of filteredTasks"
      :key="task.id"
      :taskId="task.id"
      :taskIndex="taskIndex"
      :task="task.taskText"
      :isComplete="task.isComplete"
      @change="e => setTodo(task.id, e.target.checked)"
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
  computed: mapGetters(["filteredTasks"]),
  components: {
    Task
  },
  methods: {
    ...mapMutations(["setTodo"]),
    setTodo(id, value) {
      this.setTodo({ id, value });
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
