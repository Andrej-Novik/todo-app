<template>
  <div :class="$style.page" id="page">
    <Title />
    <div :class="$style.body">
      <Input />
      <Tasks />
      <Footer />
    </div>
    <div :class="[$style.mask, $style.maskFirst]"></div>
    <div :class="[$style.mask, $style.maskSecond]"></div>
  </div>
</template>

<script>
import Footer from "./Footer";
import Title from "./Title";
import Tasks from "./Tasks";
import Input from "./Input";
export default {
  components: {
    Footer,
    Title,
    Tasks,
    Input
  },
  mounted() {
    this.$store.dispatch("getFromStorage");
  }
};
</script>

<style lang="scss" module>
@import "@/assets/styles/Vars&Mixins.scss";
body {
  background-color: #e0e0e0;
  font-family: "Helvetica Neue";
  padding: 3rem 0.5rem;
  max-width: 450px;
  margin: 0 auto;
  .body {
    background-color: #ffffff;
    border: 0.125rem solid $pageColor;
    border-bottom: 1px solid $pageColor;
    border-radius: 0.25rem;
    overflow: hidden;
  }
  .mask {
    margin: 0 auto;
    height: 5px;
    border: 1px solid $pageColor;
    border-top: none;
    background-color: #ffffff;
    border-radius: 0 0 0.25rem 0.25rem;
  }
  .maskFirst {
    width: 98%;
  }
  .maskSecond {
    width: 96%;
  }
}
</style>
