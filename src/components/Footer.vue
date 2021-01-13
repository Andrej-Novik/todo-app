<template>
  <div :class="$style.footer">
    <div :class="$style.left">2 2 left</div>
    <Tabs :tabs="tabs" />
    <div :class="$style.clear">Clear completed</div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  data:()=>({
    tabs: ["All", "Active", "Completed"]
	}),
  components: {
    Tabs
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
.footer {
  color: $pageCalor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.8rem 0.5rem;
  font-size: 15px;
  border-top: 1px solid $pageCalor;
  @include forMobile {
    padding: 0.5rem;
  }
}
</style>
