<template>
  <div class="tabs">
    <Tab
      v-for="(tab, tabIndex) of allTabs"
      :key="tab.id"
      :tab="tab.tabText"
      :checked="tab.isSelected"
      :tabIndex="tabIndex"
      :tabId="tab.id"
      :tabState="tab.tabName"
    />
  </div>
</template>

<script>
import Tab from "./Tab";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allTabs"]),
  components: {
    Tab
  }
};
</script>

<style lang="scss" module>
.tabs {
  display: flex;
}
</style>
