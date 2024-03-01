<script setup lang="ts">
import { onMounted } from "vue";
import { public_height, public_config } from "../layout.config";
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
		<div class="TopBarBox_info">
			<div
				class="TopBarBox_info_routeTabs fx_"
				v-show="!public_config.is_mobile"
			>
				<div
					v-for="(item, index) in RunTimeRoute().activePageList"
					:key="index"
				>
					<el-check-tag
						:checked="isActive(item)"
						type="primary"
						@click="toTriggerPage(item)"
						class="routeTag"
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
	&_info {
		flex: 1;
		display: flex;
		flex-direction: column;
		&_routeTabs {
			margin-top: auto;
			width: 100%;
			border-bottom: 1px solid #ebeef5 !important;
			padding: 5px 0;
			// background-color: pink;
			.routeTag {
				margin-right: 10px;
			}
		}
	}
}
</style>
