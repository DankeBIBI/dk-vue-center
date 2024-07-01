<script lang="ts">
import { defineComponent } from "vue";
import { watchIsMobile } from "./layout/layout.config";
import { dkDialog } from "@/components";
export default defineComponent({
	name: "app",
	components: {
		dkDialog,
	},
	data() {
		return {};
	},
	created: async () => {
		watchIsMobile();
		window.addEventListener("resize", watchIsMobile);
	},
});
</script>
<template>
	<div>
		<router-view />
		<dk-dialog />
	</div>
</template>

<style scoped></style>
