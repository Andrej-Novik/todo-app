<template>
  <label :class="$style.tab">
    <input type="radio" name="filter" />
    <span>{{ tab }}</span>
  </label>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tab: String
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.tab {
  cursor: pointer;
  span {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }
  input {
    display: none;
  }
  input:checked + span {
    border: 1px solid $pageColor;
    border-radius: 0.25rem;
  }
}
</style>
