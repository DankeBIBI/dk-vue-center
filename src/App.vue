<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import { checkIsMobile, public_config } from "./layout/layout.config";
export default defineComponent({
	name: "app",
	created: async () => {
		try {
			axios.get("https://api.dankebibi.cc");
		} catch (e) {
			console.error(e);
		}
		checkIsMobile();
		window.addEventListener("resize", checkIsMobile);
	},
});
</script>
<template>
	<router-view />
</template>

<style scoped></style>
