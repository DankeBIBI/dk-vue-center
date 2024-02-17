<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
})
</script>
<template>
    <div class="MainBox">
        <router-view>
            <template #default="{ Component }">
                <Transition name="fade">
                    <KeepAlive>
                        <component :is="Component">
                        </component>
                    </KeepAlive>
                </Transition>
            </template>
        </router-view>
    </div>
</template>
<style lang="scss" scoped>
.MainBox {
    transition: .8s all;
    flex: 1;
    background-color: yellowgreen;
}
</style>