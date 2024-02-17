import { createRouter, createWebHistory } from "vue-router";
import static_route from "./model/static_route";
import { AppStore } from "@/store";
import { getSessionStorage, setSessionStorage } from "@/utils";
import { Current_Route_Name, User_Info } from "@/utils/public_nameSpace";
import { UserStore } from "@/store/user";
import { decrypt } from "strap-trousers";
/**路由 */
export const Route = createRouter({
	history: createWebHistory(),
	routes: static_route,
});

Route.beforeEach(async (to, from, next) => {
	setSessionStorage(Current_Route_Name, String(to.fullPath));
	if (AppStore().routeList.length == 0) {
		let userInfo = getSessionStorage(User_Info);
		if (userInfo && userInfo != 'null') {
			let path = getSessionStorage(Current_Route_Name);
			UserStore().Login(JSON.parse(decrypt(userInfo)), path ?? "/");
			setSessionStorage(Current_Route_Name, String(path ?? "root"));
		}
		next();
	} else {
		next();
	}
});
