<script setup lang="ts">
import { computed, reactive } from "vue";
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce";
import axios from "axios";
console.log(tinymce);
/**图标 */
import "tinymce/icons/default/icons";
/**主题 */
import "tinymce/themes/silver";
import "tinymce/models/dom/model";
/**语言 */
import "tinymce-i18n/langs/zh_CN";
/**插件 */
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/wordcount";
import { rootUrl } from "@/api";

const props = defineProps({
	/**v-model */
	modelValue: {
		type: String,
		default: "",
	},
	/**插件 */
	plugins: {
		type: [String, Array],
		default: "image | link | code | table | lists | wordcount ",
	},
	/**顶部工具栏 */
	toolbar: {
		type: [String, Array],
		default:
			"undo redo |  formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image link | removeformat | code | table | wordcount | colorpicker",
	},
	uploadImg: {
		type: Function,
		default: () => {
			return { code: 0, msg: "上传失败", data: "" };
		},
	},
});
const tinymceInit: any = reactive({
	width: "100%",
	height: "100%",
	language: "zh_CN", //语言类型
	// branding: true,
	menubar: true,
	resize: true,
	skin_url: "/tinymce/skins/ui/oxide",
	content_css: "/tinymce/skins/content/default/content.css",
	// toolbar_mode: "wrap",
	plugins: props.plugins,
	toolbar: props.toolbar,
	image_advtab: true,
	image_caption: true,
	importcss_append: true,
	images_upload_handler: (e: any) =>
		new Promise(async (resolve: any) => {
			let formData = new FormData();
			formData.append("file", e.blob(), e.filename());
			axios.post(rootUrl + "upload/uploadFile", formData).then((res: any) => {
                res = res.data
				if (res.code == 1) {
					resolve(res.data);
				} else {
					resolve("");
					alert("图片上传失败");
				}
			}).catch(()=>{
                resolve("");
                alert("图片上传失败");
            });
		}),
});
const emits = defineEmits(["update:modelValue"]);
const content = computed({
	get: () => props.modelValue,
	set: (val) => {
		emits("update:modelValue", val);
	},
});
</script>
<template>
	<div style="height: 100%;width: 100%;">
		<Editor ref="editor" v-model="content" :init="tinymceInit" />
	</div>
</template>
<style lang="scss" >
.widthFull {
    width: 100% !important;
}
.tox-promotion{
    display: none !important;
}

</style>
