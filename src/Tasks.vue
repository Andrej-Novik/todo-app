<template>
	 <div class="body__tasks">
        <label v-for="task of tasks" :key="task" class="body__task task">
          <input class="task__checkbox" type="checkbox" />
          <span class="task__check"></span>
          <span class="task__text">new task {{ task }}</span>
        </label>
    </div>
</template>

<script>
export default {
	data:()=>({
		tasks:[1,2,3,4,5]
	})
}
</script>

<style scoped>
.body__tasks {
  max-height: 143px;
  overflow: auto;
}
.body__task {
  font-size: 18px;
  padding: 12px 0 12px 12px;
  border-bottom: 1px solid #afafad;
  display: flex;
  color: #000;
}
.task__text {
  padding: 0 0 0 12px;
  max-width: 300px;
}
.task__checkbox {
  display: none;
}
.task__check {
  display: block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid #afafad;
  position: relative;
}
.task__check:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 5px;
  opacity: 0;
  border: 2px solid #66bb6a;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  width: 0.75rem;
  height: 0.375rem;
  transition: 0.2s;
}
.task__checkbox:checked + .task__check {
  border-color: #66bb6a;
}
.task__checkbox:checked + .task__check:before {
  opacity: 1;
}
.task__checkbox:checked ~ .task__text {
  text-decoration: line-through;
  color: #afafad;
}
@media (max-width: 370px) {
  .task__text {
    padding: 0 0 0 12px;
    max-width: 250px;
  }
}
</style>