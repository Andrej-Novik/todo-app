<template>
  <form @submit.prevent="addTask" :class="$style.addTask" id="addTask">
    <span @click="allStatusChanging" id="allStatusChanging"></span>
    <input
      type="text"
      placeholder="Whats needs to be done?"
      v-model="newTaskText"
    />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Input",
  data: () => ({
    newTaskText: ""
  }),
  methods: {
    ...mapMutations(["createTask", "changeAllStatus"]),
    addTask() {
      this.createTask(this.newTaskText);
      this.newTaskText = "";
    },
    allStatusChanging() {
      this.changeAllStatus();
    }
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.addTask {
  padding: 0 1rem 0 2rem;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 2px solid $pageColor;
  input {
    width: 300px;
    color: $pageColor;
    padding: 0.6rem 2rem 0.6rem 1rem;
    font-style: italic;
    font-size: 1.125rem;
    letter-spacing: 1px;
    outline: none;
    &::placeholder {
      color: #c1c1c1;
    }
  }
  span {
    &:before {
      content: "";
      position: absolute;
      top: 22px;
      left: 15px;
      width: 10px;
      height: 2px;
      background-color: $pageColor;
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
      background-color: $pageColor;
      transform: rotate(-45deg);
      cursor: pointer;
    }
  }
}
</style>
