<script setup lang="ts">
import { onMounted } from "vue";
import { public_height, public_weight } from "../layout.config";
import { Plus } from "@/assets/icon";
onMounted(() => {
	// console.log("🚀 -- 》》 ~ public_config:", public_config)
});
</script>
<template>
	<div class="InfoBox">
		INFO
		<el-image style="width: 50px;height: 50px;" :src="Plus" />
	</div>
</template>
<style lang="scss" scoped>
.InfoBox {
	transition: 0.8s all;
	width: v-bind(public_weight);
	height: v-bind(public_height);
	background-color: pink;
}
</style>