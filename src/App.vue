<template>
  <div :class="$style.page">
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
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Tasks from "@/components/Tasks";
import Input from "@/components/Input";
export default {
  components: {
    Footer,
    Title,
    Tasks,
    Input,
  },
};
</script>

<style lang="scss" module>
* {
  padding: 0;
  margin: 0;
  border: 0;
   &:before,
	&:after {
		box-sizing: border-box;
	}
	input {
		font-family: inherit;
	}
	ul li {
		list-style: none;
	}
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
	.body {
	background-color: #ffffff;
	border: 2px solid #afafad;
	border-bottom: 1px solid #afafad;
	border-radius: 5px;
	overflow: hidden;
	}
	.mask {
	margin: 0 auto;
	height: 5px;
	border: 1px solid #afafad;
	border-top: none;
	background-color: #ffffff;
	border-radius: 0 0 5px 5px;
	}
	.maskFirst {
	width: 98%;
	}
	.maskSecond {
	width: 96%;
	}
}

</style>
