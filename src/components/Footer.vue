<template>
  <div :class="$style.footer">
    <div>{{ activeTasksCount }}/{{ tasksCount }} left</div>
    <Tabs :options="filters" v-model="filter" />
    <div :class="$style.clear" @click="deleteCompleted">
      Clear completed
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Footer",
  components: {
    Tabs
  },
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  },
  computed: {
    ...mapGetters(["activeTasksCount", "tasksCount"]),
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("changeFilter", value);
      }
    }
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
