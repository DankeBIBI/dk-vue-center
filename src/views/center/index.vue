<script setup lang="ts">
import { dkForm, dkTable } from "@/components";
import {
	dkItemSelectOptions,
	dkFormOptions,
dkFormRef
} from "@/components";
import { onMounted, ref } from "vue";
import { rootUrl } from "@/api";
import {dkTableOptions,tableColumns,tableData} from './center' 

onMounted(() => {});
const formRef = ref<dkFormRef>();
const size = ref<any>("small");
const mallFormOption = ref<dkItemSelectOptions[]>([
	{
		label: "多选选项1",
		value: "1",
	},
	{
		label: "多选选项2",
		value: "2",
	},
	{
		label: "多选选项3",
		value: "3",
	},
]);
const dkFormOption = [
	{
		title: "输入框",
		prop: "inputKey",
		type: "input",
		placeholder: "请输入12312哈哈哈哈",
		required: true,
		content: "测试默认字段",
	},
	{
		title: "单选",
		prop: "radio",
		type: "radio",
		required: true,
		content: "1",
		selectOptions: [
			{
				label: "选项1",
				value: "1",
			},
			{
				label: "选项2",
				value: "2",
			},
			{
				label: "选项3",
				value: "3",
			},
		],
		trigger: {
			change(e) {
				console.log(e, "测试触发器");
			},
		},
	},
	{
		title: "下拉单选",
		prop: "select",
		type: "select",
		required: true,
		content: "1",
		selectOptions: [
			{
				label: "下拉选项1",
				value: "1",
			},
			{
				label: "下拉选项2",
				value: "2",
			},
			{
				label: "下拉选项3",
				value: "3",
			},
		],
		trigger: {
			change(e) {
				console.log(e, "测试触发器");
			},
		},
	},
	{
		title: "多选框",
		prop: "checkBox",
		type: "checkbox",
		required: true,
		content: [],
		selectOptions: mallFormOption,
		trigger: {
			change(e) {
				console.log(e, "测试触发器");
			},
		},
	},
	{
		title: "某一天",
		prop: "date",
		type: "date",
		required: true,
        trigger: {
			change(e) {
				console.log(e, "测试触发器");
			},
		},
	},
	{
		title: "某一个月",
		prop: "month",
		type: "month",
		required: true,
	},
	{
		title: size.value,
		prop: "year",
		type: "year",
		required: true,
	},
	{
		title: "上传",
		prop: "upload",
		type: "upload",
		required: true,
		upload: {
			url: rootUrl + "upload/uploadFile",
			file_list: [],
			limit: 1,
			response(e) {
				console.log("🚀 -- 》》 ~ e:", e);
				return e.data;
			},
		},
	},
] as dkFormOptions;
const addColumns = () => {
	tableColumns.value.push({
		label: "年龄",
		prop: "age",
		width: 180,
	});
};
</script>
<template>
	<div class="MenuBox">
		主页
		<el-radio-group v-model="size" label="size control">
			<el-radio-button label="large">large</el-radio-button>
			<el-radio-button label="default">default</el-radio-button>
			<el-radio-button label="small">small</el-radio-button>
		</el-radio-group>
		<dk-form ref="formRef" :form-size="size" :options="dkFormOption"></dk-form>
		<el-button
			@click="
				() => {
					console.log(
						formRef?.ruleFormRef.validate((e) => {
							console.log(e);
						})
					);
				}
			"
			>校验</el-button
		>
		<el-button
			@click="
				() => {
					mallFormOption.splice(mallFormOption.length - 1, 1);
				}
			"
			>测试响应性</el-button
		>
		<br />
		<el-text>{{ formRef?.formModel }}</el-text>
		<br />

		<dk-table :table-options="dkTableOptions" />
		<br />
		<el-button
			@click="
				() => {
					tableData.push(tableData[tableData.length - 1]);
				}
			"
			>测试响应性(表格)</el-button
		>
		<el-button @click="addColumns">测试响应性2(表格列)</el-button>
	</div>
</template>
<style lang="scss" scoped>
.MenuBox {
	width: 100%;
	background-color: rgb(240, 240, 240);
}
</style>
