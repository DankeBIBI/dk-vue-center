import { reactive } from "vue";
/**loading 配置 */
export const loading = reactive({
    loading: false,
    background: 'rgba(122, 122, 122, 0.8)',
    tip: '正在加载数据。。。',
    svg: {
        position: "-10, -10, 50, 50",
        src: `
        <path class="path" d="
        M 30 15
        L 28 17
        M 25.61 25.61
        A 15 15, 0, 0, 1, 15 30
        A 15 15, 0, 1, 1, 27.99 7.5
        L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
        `
    }
})