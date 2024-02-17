<script setup lang="ts">
import { onMounted } from 'vue'
import TopBarVue from '../TopBar/index.vue'
import MenuVue from '../Menu/index.vue'
import MainVue from '../Main/index.vue'
onMounted(() => {
    console.log(123);
})
</script>
<template>
    <div class="containerBox">
        <!-- <el-progress :percentage="20" :stroke-width="4" stroke-linecap="dashboard " :show-text="false" status="success" striped striped-flow :duration="10" /> -->
        <TopBarVue />
        <div class="fx_ containerBox_body">
            <MenuVue />
            <MainVue />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.containerBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    &_body {
        flex: 1;

    }
}
</style>