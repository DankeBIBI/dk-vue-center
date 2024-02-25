import { AppStore } from "@/store";
import { Route } from ".";
import { RouteRecordRaw } from "vue-router";
import { Menu_List } from "@/utils/public_nameSpace";
import { setSessionStorage } from "@/utils";

/**初始话路由 */
export function initRoute(routeList: any, route_name?: string) {
    console.log("🚀 -- 》》 ~ routeList:", routeList)
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
            arrayToTree(list);
            item.children = list;
            Route.addRoute(item);
            setTimeout(() => {
                if (!route_name) {
                    Route.replace("/");
                } else {
                    Route.push(route_name);
                }
            }, 500);
        }
    });
}
/**处理动态路由为树形结构，提供给菜单列表 */
function arrayToTree(arr: any): RouteRecordRaw[] {
    const map = new Map();
    // 将数组中的对象存储到map中，key为id，value为对象
    arr.forEach((item: any) => {
        map.set(item.meta.id, { ...item, children: [] });
    });
    // 遍历数组，将每个对象的parentId作为key去map中查找对应的子对象
    arr.forEach((item: any) => {
        if (item.meta.parent_id > -1) {
            const parent = map.get(item.meta.parent_id);
            if (parent) {
                parent.children.push(item);
                map.delete(item.meta.id);
            }
        }
    });
    let routeList: RouteRecordRaw[] = [];
    // 返回树形结构
    map.forEach((item: any) => {
        routeList.push(item);
        Route.addRoute(item);
    });
    AppStore().routeList = routeList;
    setSessionStorage(Menu_List, JSON.stringify(routeList));
    return routeList;
}
