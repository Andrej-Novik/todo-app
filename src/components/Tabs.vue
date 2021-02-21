<template>
  <div :class="$style.tabs" id="tabs">
    <label v-for="option in options" :key="option" :class="$style.tab" id="tab">
      <input
        type="radio"
        name="filter"
        :value="option"
        :checked="value === option"
        @change="$emit('input', option)"
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    options: Array,
    value: String
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.tabs {
  display: flex;
  .tab {
    cursor: pointer;
    span {
      margin: 0 0.5rem;
      padding: 0.15rem;
    }
    input {
      display: none;
    }
    input:checked + span {
      border: 1px solid $pageColor;
      border-radius: 0.25rem;
    }
  }
}
</style>
