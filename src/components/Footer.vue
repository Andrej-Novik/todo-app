<template>
  <div :class="$style.footer">
    <div :class="$style.left">{{ activeCount }}/{{ tasksCount }} left</div>
    <Tabs />
    <div :class="$style.clear" @click="deleteCompleted">
      Clear completed
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["activeCount", "tasksCount"]),
  components: {
    Tabs
  },
  methods: {
    ...mapMutations(["deleteCompletedTasks"]),
    deleteCompleted() {
      this.deleteCompletedTasks();
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.footer {
  color: $pageColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.8rem 0.5rem;
  font-size: 15px;
  border-top: 1px solid $pageColor;
  @include forMobile {
    padding: 0.5rem;
  }
  .clear {
    cursor: pointer;
  }
}
</style>
