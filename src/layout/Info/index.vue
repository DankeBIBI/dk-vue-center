<script setup lang="ts">
import { onMounted } from "vue";
import { public_height, public_weight } from "../layout.config";
import { UserStore } from "@/store/user";
import gsap from "gsap";
onMounted(() => {
	const tl = gsap.timeline();
    tl.from('.logo',{y:50,direction:800})
    tl.from('.app_name',{y:50,direction:1000,delay:.1},'<')
});
</script>
<template>
	<div class="InfoBox fx_y">
		<el-image class="logo" :src="UserStore().userInfo?.app?.logo" />
		<h2 class="app_name">{{ UserStore().userInfo?.u_name }}</h2>
	</div>
</template>
<style lang="scss" scoped>
.InfoBox {
	transition: 0.8s all;
	width: v-bind(public_weight) !important;
	height: v-bind(public_height);
	padding: 0 10px;
    box-sizing:border-box;
	.logo {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
	// background-color: pink;
}
</style>
