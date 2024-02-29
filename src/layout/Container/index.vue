<script setup lang="ts">
import { onMounted } from "vue";
import TopBarVue from "../TopBar/index.vue";
import MenuVue from "../Menu/index.vue";
import MainVue from "../Main/index.vue";
onMounted(() => {});
</script>
<template>
	<div class="containerBox">
		<!-- <el-progress :percentage="20" :stroke-width="4" stroke-linecap="dashboard " :show-text="false" status="success" striped striped-flow :duration="10" /> -->
		<TopBarVue />
		<div class="fx_ containerBox_body">
			<MenuVue class="containerBox_body_menu" />
			<MainVue class="containerBox_body_main" />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.containerBox {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	&_body {
		flex: 1;
		width: auto;
		display: flex;
		// flex-direction: column;
        &_body{
            flex: 1;
            &_main{
                box-sizing: border-box;
                padding: 10px 10px ;
            }
        }
	}
}
</style>
