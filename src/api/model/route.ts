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
        userRouteList: (e?: {
            u_id?: number
        } & Partial<pageOptions>) => ({
            url: "/route/GetUserRoute",
            method: "GET",
            e
        }),
        /**用户路由列表 */
        addRoute: (e?: pageOptions) => ({
            url: "/route/addRoute",
            method: "POST",
            e
        }),
        /**删除路由 */
        deleteRoute: (e: {
            route_id: number
        }) => ({
            url: 'route/deleteRoute',
            method: 'GET'
        })
    }
})