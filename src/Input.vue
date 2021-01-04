<template>
  <div class="body__add-task" action="" name="form">
    <input type="text" placeholder="Whats needs to be done?" name="" />
  </div>
</template>

<style scoped>
.body__add-task {
  padding: 0 0 0 30px;
  position: relative;
  border-bottom: 2px solid #afafad;
}
.body__add-task input {
  width: 100%;
  color: #000;
  padding: 10px 15px;
  font-style: italic;
  font-size: 18px;
  letter-spacing: 1px;
}
input::placeholder {
  color: #c1c1c1;
}
.body__add-task:before {
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
.body__add-task:after {
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
</style>