import { defineStore } from "pinia";
const useRoute = defineStore("Route", {
    state: () => ({
        /**正在运行的页面 */
        activePageList: [] as any[],
    }),
    actions: {
        /**将页面添加进去 */
        addActivePage(route: any) {
            if (this.activePageList.filter(item => item.fullPath == route.fullPath).length == 0)
                this.activePageList.push(route);
        }
    },
});
/**RunTimeRoute */
export function RunTimeRoute() {
    return useRoute();
}
