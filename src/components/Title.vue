<template>
  <h1 :class="$style.title">todos</h1>
</template>

<style lang="scss" module scoped>
.title {
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 20px 0;
  color: #f6dbac;
  @media (max-width: 370px) {
    font-size: 90px;
	}
}
</style>