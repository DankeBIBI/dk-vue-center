<script setup lang="ts">
import { dkForm, dkItemOptions, addDkDialog } from "@/components";
import { DKID } from "strap-trousers";
import { useDraggable } from "vue-draggable-plus";
import { formConfig, ItemConversionOption } from "./data";
import exportConfig from "./export.vue";
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
	{
		name: "select-clone-0",
		prop: "select",
		id: "3-clone-0",
		title: "下拉选择",
		content: "",
		type: "select",
		selectOptions: [
			{ label: "下拉选择1", value: 1 },
			{ label: "下拉选择2", value: 2 },
		],
		options: { disabled: false },
	},
	{
		name: "month-clone-1",
		prop: "month",
		id: "6-clone-1",
		title: "月份选择",
		content: "",
		type: "month",
		placeholder: "请选择月份",
		options: { disabled: false },
	},
]);
const infoBox = ref(true);
function itemTrigger(item: dkItemOptions) {
	infoBox.value = false;
	itemConfig.value = ItemConversionOption(item);
	setTimeout(() => {
		infoBox.value = true;
	}, 50);
}
onMounted(() => {
	initCanvars();
});
function initCanvars() {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement;
	canvas.width = 300 * devicePixelRatio;
	canvas.height = 300 * devicePixelRatio;
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	const text = "把控件拖到这个地方";
	text.split("").forEach((item, index) => {
		const x = 100 + index * 20;
		const y = 100;
		ctx.fillStyle = "black";
		ctx.font = "16px Arial";
		ctx.fillText(item, x, y);
	});

	// ctx.fillStyle = "red";
	// ctx.fillRect(0, 0, canvas.width, canvas.height);
	// ctx.translate(canvas.width / 2, canvas.height);
	// ctx.scale(1, -1);
	// const draw = (v0: number[], len: number, thick: number, angle: number) => {
	// 	const drawCricle = () => {
	// 		ctx.beginPath();
	// 		ctx.arc(v0[0], v0[1], 5, 0, 2 * Math.PI);
	// 		ctx.arc(v0[0] + 10, v0[1] + 20, 5, 0, 2 * Math.PI);
	// 		ctx.arc(v0[0] - 10, v0[1] - 20, 5, 0, 2 * Math.PI);
	// 		ctx.fillStyle = "green";
	// 		ctx.fill();
	// 	};
	// 	if (thick < 3 && Math.random() < 0.3) return;
	// 	if (thick < 2) {
	// 		return drawCricle();
	// 	}
	// 	ctx.beginPath();
	// 	const v1 = [
	// 		v0[0] + len * Math.cos((angle * Math.PI) / 180),
	// 		v0[1] + len * Math.sin((angle * Math.PI) / 180),
	// 	];
	// 	ctx.moveTo(v0[0], v0[1]);
	// 	ctx.lineTo(v1[0], v1[1]);
	// 	ctx.lineWidth = thick;
	// 	ctx.strokeStyle = "bronw";
	// 	ctx.lineCap = "round";
	// 	ctx.stroke();

	// 	draw(v1, len * Math.random() + 0.6, thick * 0.8, angle - 20);
	// 	draw(v1, len * Math.random() + 0.6, thick * 0.8, angle + 20);
	// };
	// draw([50, 50], 100, 20, 90);
}
const formatConfig = (value: dkItemOptions[]): dkItemOptions[] => {
	return value.map((item) => {
		delete item.isClone;
		return {
			...item,
			options: {
				...item.options,
				disabled: false,
			},
		};
	});
};
function exportForm() {
	const mRef = ref();
	addDkDialog({
		title: "导出配置",
		ref: mRef,
		type: "custom",
		rander: exportConfig,
        style:{
            borderRadius:20
        },
		props: {
			config: formatConfig(copyFormConfig.value),
		},
	});
}
//弹窗预览
function previewForm() {
	const mRef = ref();
	addDkDialog({
		title: "预览",
		ref: mRef,
		type: "form",
        style:{
            borderRadius:20
        },
		props: {
			options: formatConfig(copyFormConfig.value),
		},
	});
}
</script>
<template>
	<div class="form">
		<div class="form-container fx_">
			<div class="config">
				<section class="dk-form-config fx_w">
					<div
						class="config-item"
						v-for="item in formConfig.map((item) => {
							return {
								...item,
								options: {
									disabled: true,
								},
							};
						})"
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
				<div v-if="copyFormConfig.length == 0" class="canvas">
					<canvas id="canvas"></canvas>
				</div>
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
				<el-button type="primary" @click="exportForm">导出</el-button>
				<el-button type="primary" @click="previewForm">预览</el-button>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
@import "./style.scss";
</style>
