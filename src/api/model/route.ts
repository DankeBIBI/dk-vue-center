import { connectStraw } from "strap-trousers";
import { config, pageOptions } from '../config'
export const route = connectStraw({
    config: {
        name: 'route',
        ...config
    },
    action: {
        /**路由列表 */
        routeList: (e?: pageOptions) => ({
            url: "/route/list",
            method: "GET",
            e
        }),
        /**用户路由列表 */
        userRouteList: (e?: pageOptions) => ({
            url: "/route/userRouteList",
            method: "GET",
            e
        }),
    }
})