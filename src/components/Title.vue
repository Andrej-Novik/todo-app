<template>
  <h1 :class="$style.title">todos</h1>
</template>

<style lang="scss" module scoped>
@import "@/assets/styles/Vars&Mixins.scss";
.title {
  font-size: 6.25rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 20px 0;
  color: #f6dbac;
  @include forMobile {
    font-size: 5.6rem;
  }
}
</style>
