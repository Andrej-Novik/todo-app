<template>
  <form @submit.prevent="addTask" :class="$style.addTask">
    <input type="text" :placeholder="placeholderText" v-model="newTaskText" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    placeholderText: "Whats needs to be done?",
    newTaskText: ""
  }),
  methods: {
    ...mapMutations(["createTask"]),
    addTask() {
      this.createTask({
        taskText: this.newTaskText,
        isComplete: false,
        id: Date.now()
      });
      this.newTaskText = "";
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.addTask {
  padding: 0 0 0 2rem;
  position: relative;
  border-bottom: 2px solid $pageCalor;
  input {
    width: 100%;
    color: $pageCalor;
    padding: 0.6rem 2rem 0.6rem 1rem;
    font-style: italic;
    font-size: 1.125rem;
    letter-spacing: 1px;
    &::placeholder {
      color: #c1c1c1;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 15px;
    width: 10px;
    height: 2px;
    background-color: $pageCalor;
    transform: rotate(45deg);
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    top: 22px;
    left: 20px;
    width: 10px;
    height: 2px;
    background-color: $pageCalor;
    transform: rotate(-45deg);
    cursor: pointer;
  }
}
</style>
