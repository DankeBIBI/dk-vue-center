<script lang="ts">
import { defineComponent } from "vue";
import { checkIsMobile } from "./layout/layout.config";
import dkDialogVue from "@/components/dk-components/dk-dialog/index.vue";
export default defineComponent({
	name: "app",
	components: {
		dkDialogVue,
	},
	data() {
		return {
			dialogStore: [],
		};
	},
	created: async () => {
		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);
	},
});
</script>
<template>
	<div>
		<router-view />
		<dk-dialog-vue :store="dialogStore" />
	</div>
</template>

<style scoped></style>
