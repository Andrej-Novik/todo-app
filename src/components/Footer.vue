<template>
	 <div :class="$style.footer">
        <div :class="$style.left">2 2 left</div>
        <Tabs/>
        <div :class="$style.clear">Clear completed</div>
    </div>
</template>

<script>
import Tabs from './Tabs';
export default {
	components:{
		Tabs
	}
}
</script>

<style lang="scss" module>
	.footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 15px 7px;
	font-size: 15px;
	border-top: 1px solid #afafad;
	@media (max-width: 365px) {
		padding: 5px 0 0 0;
	}
}
</style>