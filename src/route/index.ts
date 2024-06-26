import { createRouter, createWebHistory } from "vue-router";
import static_route from "./model/static_route";
import { AppStore } from "@/store";
import { getSessionStorage, setSessionStorage } from "@/utils";
import { Current_Route_Name, User_Info } from "@/utils/public_nameSpace";
import { UserStore } from "@/store/user";
import { decrypt } from "strap-trousers";
import { RunTimeRoute } from "@/store/route";
import { checkIsMobile, public_config } from "@/layout/layout.config";
/**路由 */
export const Route = createRouter({
    history: createWebHistory(),
    routes: static_route,
});
/**
 * @description 路由白名单 以路由 name 为准
 * 存在名单是不走登录检测
 *
 *
 */
const whileRouteName: string[] = ["login"];
Route.beforeEach(async (to, from, next) => {
    setSessionStorage(Current_Route_Name, String(to.fullPath));
    if (
        AppStore().routeList.length == 0 &&
        !whileRouteName.includes(to.name as string)
    ) {
        /**还没有登录 */
        let userInfo = getSessionStorage(User_Info);
        if (userInfo && userInfo != "null") {
            let path = getSessionStorage(Current_Route_Name);
            UserStore().Login(JSON.parse(decrypt(userInfo)), path ?? "/");
            setSessionStorage(Current_Route_Name, String(path ?? "root"));
        } else return Route.push("login");
        next();
    } else {
        if (!['/login', '/'].includes(to.fullPath)) {
            RunTimeRoute().addActivePage(to)
            const isMobile = checkIsMobile()
            if (!isMobile) {
                /**检测是否为低代码页面 */
                public_config.is_mobile = to.fullPath.indexOf('lowCode') != -1
            }
        }
        next();
    }
});
