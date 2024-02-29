import { computed, reactive, watch } from "vue";
/**页面框架配置 */
export const public_config = reactive({
	// 这里存放配置
	height: 100 as number, // 高度
	width: 250 as number, // 宽度
	is_mobile: false as boolean, // 是否为移动端
});
/**高度 */
export const public_height = computed(() => {
	return public_config.height + "px";
});
/**宽度 */
export const public_weight = computed(() => {
	return public_config.width + "px";
});
/**检测是否为移动端 */
export const checkIsMobile = () =>{
	public_config.is_mobile = window.innerWidth < 768;
}