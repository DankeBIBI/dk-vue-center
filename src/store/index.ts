import { defineStore } from 'pinia'
const useAppStore = defineStore('AppStore', {
    state: () => ({
        /**路由规则 */
        useRouteRole: [
            import.meta.glob('@/views/*.vue'),
            import.meta.glob('@/views/*/*.vue'),
            import.meta.glob('@/views/*/*/*.vue'),
            import.meta.glob('@/views/*/*/*/*.vue'),
        ],
        /**路由列表 */
        routeList: [] as routeListDto[]
    }),
    actions: {
        /**设置菜单路由 */
        setRouteList(list: routeListDto[]) {
            this.routeList = list
        }
    }
})
/**AppStore */
export function AppStore() {
    return useAppStore()
}
