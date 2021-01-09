<template>
  <label :class="$style.tab">
    <input type="radio" name="filter" checked />
    <span>{{ tab }}</span>
  </label>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tab: String,
  },
};
</script>

<style lang="scss" module scoped>
.tab {
  cursor: pointer;
  span {
    margin: 0 7px;
    padding: 3px;
  }
  input {
    display: none;
  }
  input:checked + span {
    border: 1px solid#EBD8D7;
    border-radius: 3px;
  }
}
</style>