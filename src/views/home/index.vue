<script setup lang="ts">
import { onMounted, ref } from "vue";
import Editor from "@/components/tinymce/index.vue";
const content = ref(
	'\<p\>123123\<img src="http://pd-base.oss-cn-heyuan.aliyuncs.com/undefinedmceclip0.png"\>\<\/p\>\<p\>\<img src="http://pd-base.oss-cn-heyuan.aliyuncs.com/undefinedmceclip1.jpg"></p\>\<p\>\&nbsp\;\<\/p\>\<p\>\&nbsp\;\<\/p\>'
);
const editor = ref<InstanceType<typeof Editor>>();
onMounted(() => {});
async function uploadImg(_e: any) {
	return {
		code: 0,
		msg: "",
		data: "",
	};
}
function getContent(content: string) {
	let data = content.replace(
		/\<img/gm,
		'<img mode="widthFix" style="max-width:100%;height:auto;"'
	);
	console.log("🚀 -- 》》 ~ data:", data)
}
</script>
<template>
	<div class="home">
		<div>
			<el-button>主页</el-button>
		</div>
		<div class="editor">
			<Editor
				ref="editor"
				v-model="content"
				:upload-img="(e:any) => uploadImg(e)"
			/>
		</div>
		<el-button @click="getContent(content)">查看内容</el-button>
	</div>
</template>
<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;
	.editor {
		height: 90%;
	}
}
</style>
