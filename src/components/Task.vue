<template>
  <label :class="$style.task">
    <input
      :class="$style.checkbox"
      type="checkbox"
      :checked="checked"
      :id="task.id"
      @click="Change"
    />
    <span :class="$style.check"></span>
    <span :class="$style.text">{{ task }}</span>
    <button :class="$style.delete" @click="Delete">delete</button>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Task",
  methods: {
    ...mapMutations(["changeStatus", "deleteTask"]),
    Change() {
      this.changeStatus(this.taskId);
    },
    Delete() {
      this.deleteTask(this.taskIndex);
    }
  },
  props: {
    task: String,
    checked: Boolean,
    taskId: Number,
    taskIndex: Number
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.task {
  font-size: 1.125rem;
  padding: 0.75rem 0 0.75rem 0.75rem;
  border-bottom: 1px solid $pageColor;
  display: flex;
  color: #000;
  &:hover .delete {
    display: block;
  }
  .text {
    padding: 0 0 0 0.75rem;
    max-width: 300px;
    flex: 1 1 auto;
    @include forMobile {
      max-width: 250px;
    }
  }
  .delete {
    display: none;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    color: $pageColor;
  }
  .checkbox {
    display: none;
    &:checked + .check:before {
      opacity: 1;
    }
    &:checked ~ .text {
      text-decoration: line-through;
      color: #afafad;
    }
  }
  .check {
    display: block;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 1px solid #afafad;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 7px;
      left: 5px;
      opacity: 0;
      border: 2px solid #66bb6a;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
      width: 0.75rem;
      height: 0.375rem;
      transition: 0.2s;
    }
    &:before.checkbox:checked + & {
      border-color: #66bb6a;
    }
  }
}
</style>
