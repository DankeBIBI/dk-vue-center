<script setup lang="ts">
import { AppStore } from "@/store";
import { public_weight, public_config } from "../layout.config";
import { MenuRander } from ".";
const { routeList } = AppStore();
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>
<template>
	<div class="MenuBox">
		<el-menu
			class="el-menu"
			default-active="1"
			:collapse="public_config.is_mobile"
			@open="handleOpen"
			@close="handleClose"
		>
			<component
				v-for="(item, index) in routeList"
				:key="index"
				:is="MenuRander(item, index)"
			/>
		</el-menu>
	</div>
</template>
<style lang="scss" scoped>
.el-menu:not(.el-menu--collapse) {
	width: v-bind(public_weight);
	min-height: 400px;
}
</style>
