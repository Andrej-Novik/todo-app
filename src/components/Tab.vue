<template>
  <label :class="$style.tab" :id="tab.id">
    <input
      type="radio"
      :checked="checked"
      :name="tabState"
    />
    <span>{{ tab }}</span>
  </label>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tab: String,
    checked: Boolean,
    tabId: Number,
    tabIndex: Number,
    tabState: String
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
