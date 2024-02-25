<script setup lang="ts">
import { computed, onMounted, Transition } from "vue";
import { public_config } from "../layout.config";
onMounted(() => {});
const height = computed(() => {
	return document.body.clientHeight - Number(public_config.height) + "px";
});
// const width = computed(() => {
// 	return document.body.clientWidth - Number(public_config.width) + "px";
// });
</script>
<template>
	<div class="MainBox">
		<router-view v-slot="{ Component, route }">
			<transition name="slide-fade" mode="out-in" appear>
				<keep-alive>
					<component :key="route.fullPath" :is="Component"> </component>
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>
<style lang="scss" scoped>
.MainBox {
	// width: v-bind(width);
    width: 100%;
	height: v-bind(height);
	box-sizing: border-box;
	overflow: hidden;
}
</style>
