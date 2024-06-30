import { AppStore } from "@/store";
import { Route } from ".";
import { RouteRecordRaw } from "vue-router";
import { Menu_List } from "@/utils/public_nameSpace";
import { setSessionStorage } from "@/utils";

/**初始话路由 */
export function initRoute(routeList: any, route_name?: string) {
    let list = routeList.map((item: any) => {
        item = item.route;
        let roleIndex = item.component.split("/").length - 2;
        let path = `/src/views${item.component}.vue`;
        return {
            path: item.url,
            name: item.menu_name,
            component: AppStore().useRouteRole[roleIndex][path],
            meta: item
        };
    });
    Route.getRoutes().forEach((item: RouteRecordRaw) => {
        if (item.path == "/") {
            Route.removeRoute("root");
            const routeTreeList = arrayToTree(list);
            item.children = list;
            Route.addRoute(item);
            setTimeout(() => {
                if (!route_name) {
                    Route.replace(routeList[0].route.url);
                } else {
                    Route.push(route_name);
                }
            }, 500);
        }
    });
}
/**处理动态路由为树形结构，提供给菜单列表 */
function arrayToTree(arr: any): RouteRecordRaw[] {
    let map = {}
    let tree = [] as any[]
    arr.forEach(item => {
        map[item.meta.id] = {
            children: [],
            ...item
        };
    });
    // 遍历数组，将每个项添加到其父项的children数组中
    arr.forEach(item => {
        if (item.meta.parent_id && map[item.meta.parent_id]) {
            if (!map[item.meta.parent_id].children) {
                map[item.meta.parent_id].children = [];
            }
            map[item.meta.parent_id].children.push(map[item.meta.id]);
        } else {
            tree.push(map[item.meta.id]);
        }
    })
    for (const k in map) {
        Route.addRoute(map[k]);
    }
    AppStore().routeList = tree;
    setSessionStorage(Menu_List, JSON.stringify(tree));
    return tree;
}

