<script setup lang="ts">
import { ref, watch } from "vue";
import { dkForm } from "@/components/dk-components";
import { dkItemOptions } from "@/components/dk-components";
import { DKID } from "strap-trousers";
import { useDraggable } from "vue-draggable-plus";
import { formConfig, ItemConversionOption } from "./data";
import { public_config } from "@/layout/layout.config";
const copyFormConfig = ref(
	formConfig.value
		.map((item) => ({
			...item,
			name: `${item.name}-2`,
			id: `${item.id}-2`,
		}))
		.filter((item) => item.isClone)
);
useDraggable(".dk-form-config", formConfig, {
	animation: 150,
	group: {
		name: "dk-form",
		pull: "clone",
		put: false,
	},
	sort: false,
	clone(element: dkItemOptions) {
		const len = copyFormConfig.value.length;
		const item = JSON.parse(
			JSON.stringify({
				...element,
				name: `${element.name}-clone-${len}`,
				id: `${element.id}-clone-${len}`,
				isClone: true,
				options: {
					disabled: true,
				},
			})
		);
		return item;
	},
});
useDraggable(".dk-form-container", copyFormConfig, {
	animation: 150,
	group: "dk-form",
});
const itemConfig = ref<dkItemOptions[]>([
	{ prop: "title", title: "标题", content: "测试", type: "input" },
]);
const infoBox = ref(true);
function itemTrigger(item: dkItemOptions) {
	infoBox.value = false;
	itemConfig.value = ItemConversionOption(item);
	setTimeout(() => {
		infoBox.value = true;
	}, 50);
}
</script>
<template>
	<div class="form">
		<div class="form-container fx_">
			<div class="config">
				<section class="dk-form-config fx_w">
					<div
						class="config-item"
						v-for="item in formConfig"
						:key="DKID({ length: 10 })"
					>
						<div class="fx_y icon-box">
							<div :class="`icon ${item.type} fx_x`"></div>
							<div class="icon-name">{{ item.title }}</div>
						</div>
					</div>
				</section>
			</div>
			<div class="window">
				<dkForm
					sourceTarget
					style="min-height: 100%"
					:options="copyFormConfig"
					@itemTrigger="itemTrigger"
					draggableClassName="dk-form-container"
				/>
			</div>
			<div class="info">
				<!-- {{ copyFormConfig }} -->
				<dkForm sourceTarget v-if="infoBox" :options="itemConfig" />
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "./style.scss";
</style>
