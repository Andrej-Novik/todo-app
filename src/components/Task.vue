<template>
	 <label :class="$style.task">
          <input :class="$style.checkbox" type="checkbox" :checked="checked"/>
          <span :class="$style.check"></span>
          <span :class="$style.text">{{ task }}</span>
   </label> 
</template>

<script>
export default {
	name:"Task",
	props:{
		task: String,
		checked: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" module scoped>
.task {
  font-size: 18px;
  padding: 12px 0 12px 12px;
  border-bottom: 1px solid #afafad;
  display: flex;
  color: #000;
  .text {
		padding: 0 0 0 12px;
		max-width: 300px;
		@media (max-width: 370px) {
			max-width: 250px;
		}
	}
	.checkbox {
		display: none;
		&:checked + .check:before {
			opacity: 1;
		}
		&:checked ~ .text {
			text-decoration: line-through;
			color: #afafad;
		}
	}
	.check {
		display: block;
		width: 23px;
		height: 23px;
		border-radius: 50%;
		border: 1px solid #afafad;
		position: relative;
		&:before{
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
		&:before
			.checkbox:checked + & {
			border-color: #66bb6a;
		}
	}
}



</style>