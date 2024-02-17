import { computed, reactive } from "vue"
/**页面框架配置 */
export const public_config = reactive({
    // 这里存放配置
    height: 100 as number, // 高度
    width: 200 as number, // 宽度
})
/**高度 */
export const public_height = computed(() => {
    return public_config.height + 'px'
})
/**宽度 */
export const public_weight = computed(() => {
    return public_config.width + 'px'
})
