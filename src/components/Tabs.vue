<template>
  <div :class="$style.tabs">
    <label v-for="option in options" :key="option" :class="$style.tab">
      <input
        type="radio"
        name="filter"
        :value="option"
        :checked="value === option"
        @change="$emit('input', option)"
      />
      <span>{{ option }}</span>
    </label>
    <!--<Tab
      v-for="(tab, tabIndex) of allTabs"
      :key="tab.id"
      :tab="tab.tabText"
      :checked="tab.isSelected"
      :tabIndex="tabIndex"
      :tabId="tab.id"
      :tabState="tab.tabName"
    />-->
  </div>
</template>

<script>
//import Tab from "./Tab";
export default {
  name: "Tabs",
  //components: {
  //  Tab
  //},
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
