<template>
  <div :class="$style.addTask">
    <input type="text" placeholder="Whats needs to be done?" name="" />
  </div>
</template>

<style lang="scss" module >
.addTask {
  padding: 0 0 0 30px;
  position: relative;
  border-bottom: 2px solid #afafad;
  input {
	 width: 100%;
    color: #000;
    padding: 10px 15px;
    font-style: italic;
    font-size: 18px;
    letter-spacing: 1px;
    &::placeholder {
      color: #c1c1c1;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 22px;
    left: 15px;
    width: 10px;
    height: 2px;
    background-color: #afafad;
    transform: rotate(45deg);
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    top: 22px;
    left: 20px;
    width: 10px;
    height: 2px;
    background-color: #afafad;
    transform: rotate(-45deg);
    cursor: pointer;
  }
}
</style>