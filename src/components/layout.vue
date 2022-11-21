<template>
  <div id="header">
   <span class="left">
    <img src="http://162.14.119.166:8001/together.png" alt="">
    <span>孔子飞天的博客</span>
   </span>
   <span class="menu">
      <li>首页</li>
      <li>首页</li>
      <li>首页</li>
      <li>首页</li>
      <li>首页</li>
   </span>
   <span class="right">
    <a href="http://www.kl9089.fun:8000/"></a>
   </span>
  </div>
  <div id="content">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  <div id="footer">
    Copyright © 2022 by kl9089.fun  All rights reserved | <a href="https://beian.miit.gov.cn" >蜀ICP备2022001751号-1</a>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// 动作菜单默认状态
const show = ref(true);
// 动作菜单点击取消
const onCancel = () => {
	console.log("取消");
};
// 父组件点击动作菜单调用
const showAction = () => {
	show.value = true;
};
const active = ref(0);
const logo = ref();
const value1 = ref(0);
const value2 = ref("a");
const option1 = [{ text: "首页", value: 0 }];
const option2 = [
	{ text: "默认排序", value: "a" },
	{ text: "好评排序", value: "b" },
	{ text: "销量排序", value: "c" },
];
</script>
<style lang="scss" scoped>
#header {
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 5;
	height: 60px;
	background-color: $white;
	border-bottom: 1px solid rgb(201, 201, 201);
	font-size: medium;

	.left {
		flex: 2;
		padding-left: 20px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dcdfe6;
		height: 60px;
		img {
			width: 40px;
			height: 40px;
		}
		span {
			margin-left: 20px;
			font-weight: bold;
		}
	}
	.menu {
		flex: 5;
		padding-left: 20px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dcdfe6;
		height: 60px;
		display: flex;
		flex-flow: nowrap row;
		justify-content: space-between;
		li {
			margin-left: 20px;
		}
	}
	.right {
		flex: 2;
		padding-left: 20px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: flex-end;
		margin-right: 20px;
		border-bottom: 1px solid #dcdfe6;
		height: 60px;
		a {
			flex: 1;
		}
	}
}
#content {
	min-height: 700px;
	width: 1200px;
	display: flex;
	margin: 60px auto 0 auto;
	padding-top: 20px;
}
#footer {
	border-top: 1px solid rgb(201, 201, 201);
	display: flex;
	position: fixed;
	bottom: 0;
	justify-content: center;
	align-items: center;
	height: 70px;
	width: 100%;
	background-color: $white;
	a {
		color: black;
	}
}
</style>
