<script setup lang="ts">
import { onMounted } from "vue";
import { public_height } from "../layout.config";
import InfoVue from "../Info/index.vue";
import { RunTimeRoute } from "@/store/route";
import { Route } from "@/route";
onMounted(() => {});
const toTriggerPage = (item: any) => {
	Route.push(item.fullPath);
};
const isActive = (item: any) => {
	return Route.currentRoute.value.fullPath == item.fullPath;
};
</script>
<template>
	<div class="TopBarBox fx_">
		<InfoVue />
		<div>
			<div class="routeTabs fx_">
				<div
					v-for="(item, index) in RunTimeRoute().activePageList"
					:key="index"
				>
					<el-check-tag
						:checked="isActive(item)"
						type="primary"
						@click="toTriggerPage(item)"
					>
						{{ item.meta?.title }}
					</el-check-tag>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.TopBarBox {
	transition: 0.8s all;
	height: v-bind(public_height);
}
</style>
