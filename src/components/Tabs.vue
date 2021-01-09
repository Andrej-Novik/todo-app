<template>
	<div class="tabs">
		<Tab v-for="tab of tabs" :key="tab" :tab="tab"/>
   </div>
</template>

<script>
import Tab from './Tab';
export default {
	data:()=>({
		tabs:['All', 'Active', 'Completed']
	}),
	components:{
		Tab
	}
}
</script>

<style lang="scss" module scoped>
.tabs {
  display: flex;
}

</style>