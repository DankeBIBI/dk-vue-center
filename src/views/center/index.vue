<script setup lang="ts">
import { __dkFormOptions } from "@/components/dk-form/type";
import { onMounted, ref } from "vue";
onMounted(() => {});
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
        selectOptions:[
            {
                label:'1',
                value:'选项1'
            },
            {
                label:'2',
                value:'选项2'
            },
            {
                label:'3',
                value:'选项3'
            },
        ]
	},
	{
		title: "下拉单选",
		prop: "select",
		type: "select",
		required: true,
		content: "1",
        selectOptions:[
            {
                label:'1',
                value:'下拉选项1'
            },
            {
                label:'2',
                value:'下拉选项2'
            },
            {
                label:'3',
                value:'下拉选项3'
            },
        ]
	},
	{
		title: "多选框",
		prop: "checkBox",
		type: "checkbox",
		required: true,
		content: [],
        selectOptions:[
            {
                label:'1',
                value:'多选选项1'
            },
            {
                label:'2',
                value:'多选选项2'
            },
            {
                label:'3',
                value:'多选选项3'
            },
        ]
	},
] as __dkFormOptions;

const formRef = ref<dkFormRef>();
</script>
<template>
	<div class="MenuBox">
		主页
		<dk-form ref="formRef" :options="dkFormOption"></dk-form>
		<el-button
			@click="
				() => {
					console.log(formRef?.ruleForm);
				}
			"
			>校验</el-button
		>
	</div>
</template>
<style lang="scss" scoped>
.MenuBox {
	width: 100%;
	background-color: pink;
}
</style>
