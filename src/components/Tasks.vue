<template>
  <div :class="$style.tasks">
    <Task
      v-for="task of validTasks"
      :key="task.id"
      :idx="task.id"
      :task="task.taskText"
      :checked="task.isComplete"
    />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["validTasks"]),
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
