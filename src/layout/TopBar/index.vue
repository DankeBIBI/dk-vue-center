<script setup lang="ts">
import { onMounted } from 'vue'
import { public_height } from '../layout.config'
import InfoVue from '../Info/index.vue'
onMounted(() => {
})
</script>
<template>
    <div class="TopBarBox">
        <InfoVue />
        顶部栏
    </div>
</template>
<style lang="scss" scoped>
.TopBarBox {
    transition: .8s all;
    height: v-bind(public_height);
}
</style>