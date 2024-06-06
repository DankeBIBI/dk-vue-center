<script setup lang="ts">
import { Route } from "@/route";
import { onMounted, ref } from "vue";
onMounted(() => {});
const cc = ref(0);
function toTabs() {
	cc.value++;
	Route.push("/mall/manage?id=" + cc.value);
}
</script>
<template>
	<div class="container am_">
		<el-button @click="toTabs()">商城管理</el-button>
	</div>
</template>
<style lang="scss" scoped>
.container {
	width: 100%;
	height: 100%;
}
</style>
