import { api } from "@/api";
import { defineStore } from "pinia";
import { setSessionStorage, showTip } from "@/utils";
import { encryption } from "strap-trousers";
import { User_Info } from "@/utils/public_nameSpace";
import { initRoute } from "@/route/utils";
const useUser = defineStore("User", {
    state: () => ({
        /**用户信息 */
        userInfo: {} as any
    }),
    actions: {
        async Login(form: any, route_name?: string) {
            try {
                const res = await api.login(form);
                setSessionStorage(User_Info, encryption(JSON.stringify(form)));
                if (!route_name) showTip(res.msg, res.code != 1 ? "error" : "success");
                if (res.code != 1) return false;
                this.userInfo = res.data
                initRoute(res.data.route_list, route_name);
                return true
            } catch (e) {
                return false
            }

        },
    },
});
/**UserStore */
export function UserStore() {
    return useUser();
}
