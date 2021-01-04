<template>
   <div id="page" class="page"> 
		<Title/>
		<div class="page__body body">
			<Input/>
			<Tasks/>
			<Footer/>
		</div>
		<div class="page__mask page__mask-1"></div>
		<div class="page__mask page__mask-2"></div>
  </div>
</template>

<script>
import Footer from '@/Footer';
import Title from '@/Title';
import Tasks from '@/Tasks';
import Input from '@/Input';
export default {
	components:{
		Footer,
		Title,
		Tasks,
		Input
	}
}
</script>

<style >
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

input {
  font-family: inherit;
}
ul li {
  list-style: none;
}
body {
  background-color: #e0e0e0;
  font-family: "Helvetica Neue";
  color: #afafad;
  list-style-type: none;
  overflow: hidden;
  min-height: 100%;
  font-size: 14px;
}
.page {
  padding: 50px 10px;
  max-width: 450px;
  margin: 0 auto;
}
.page__body {
  background-color: #ffffff;
  border: 2px solid #afafad;
  border-bottom: 1px solid #afafad;
  border-radius: 5px;
}
.page__mask {
  margin: 0 auto;
  height: 5px;
  border: 1px solid #afafad;
  border-top: none;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
}
.page__mask-1 {
  width: 98%;
}
.page__mask-2 {
  width: 96%;
}
</style>
