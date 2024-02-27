<script setup lang="ts">
import { AppStore } from "@/store";
import { onMounted } from "vue";
import { public_weight } from "../layout.config";
import { Route } from "@/route";
const { routeList } = AppStore();
onMounted(() => {});
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>
<template>
	<div class="MenuBox">
		<!-- <RouterLink to="/login">login</RouterLink> -->
		<el-menu
			default-active="2"
			@open="handleOpen"
			@close="handleClose"
		>
			<div v-for="(item, index) in routeList" :key="index" :index="index + 1">
				<div v-if="item.children && item.children.length > 0">
					<el-sub-menu :index="index + 1">
						<template #title>
							<RouterLink :to="item.path">
								<el-icon>
									<location />
								</el-icon>
								<span>{{ item?.meta?.title }}</span>
							</RouterLink>
						</template>
						<el-menu-item-group :title="item?.meta?.description">
							<div v-for="(sub_item, sub_index) in item.children" :key="index">
								<div v-if="sub_item.children && sub_item.children.length > 0">
									<el-sub-menu :index="`${index + 1}-${sub_index + 1}`">
										<template #title>item four</template>
										<el-menu-item index=" 1-4-1">item one</el-menu-item>
									</el-sub-menu>
								</div>
								<div v-else>
									<RouterLink :to="sub_item.path">
										<el-menu-item
											:index="`${index + 1}-${sub_index + 1}`"
											@click="
												() => {
													console.log(Route);
												}
											"
										>
											{{ sub_item?.meta?.title }}
										</el-menu-item>
									</RouterLink>
								</div>
							</div>
						</el-menu-item-group>
					</el-sub-menu>
				</div>
				<div v-else>
					<RouterLink :to="item.path">
						<el-menu-item :index="index + 1">
							<el-icon><Menu /></el-icon>
							<span>{{ item?.meta?.title }}</span>
						</el-menu-item>
					</RouterLink>
				</div>
			</div>
		</el-menu>
	</div>
</template>
<style lang="scss" scoped>
.MenuBox {
	transition: 0.8s all;
	width: v-bind(public_weight) !important;
	// background-color: pink;
	ul {
		padding-inline-start: 0px !important;
        width: v-bind(public_weight) !important;;
	}
}
</style>
