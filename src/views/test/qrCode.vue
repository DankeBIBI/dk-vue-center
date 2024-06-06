<script setup lang="ts">
import { onMounted, ref } from "vue";
import { api } from "@/api";
const qrcode = ref();
const loading = ref(false);
onMounted(async () => {});
async function createQrCode() {
	// loading.value = true;
	// const res = await api.weChat.createQrCode();
	// if (res.code == 1) qrcode.value = res.data;
	// loading.value = false;
}
</script>
<template>
	<div class="container-xs">
		<div class="qrCode" v-if="qrcode">
			<el-image :src="qrcode" />
		</div>
		<el-button
			@click="createQrCode"
			:loading="loading"
			:type="loading ? 'warning' : 'success'"
			>生成二维码</el-button
		>
	</div>
</template>
<style lang="scss" scoped>
.qrCode {
	margin: 20px;
}
</style>
