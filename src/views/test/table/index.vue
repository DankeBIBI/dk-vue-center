<script setup lang="ts">
import { dkTable } from "dk-vue3-components";
import { onMounted } from "vue";
import config from './config'
onMounted(() => {});
</script>
<template>
	<div class="list am_">
		<dkTable :table-options="config" />
	</div>
</template>
<style lang="scss" scoped>
.list {
	width: inherit;
	height: inherit;
    box-sizing: border-box;
}
</style>
