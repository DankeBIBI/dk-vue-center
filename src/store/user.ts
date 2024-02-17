import { api } from "@/api";
import { defineStore } from "pinia";
import { setSessionStorage, showTip } from "@/utils";
import { encryption } from "strap-trousers";
import { User_Info } from "@/utils/public_nameSpace";
import { initRoute } from "@/route/utils";
const useUser = defineStore("User", {
    state: () => ({}),
    actions: {
        async Login(form: any, route_name?: string) {
            const res = await api.login(form);
            console.log("🚀 -- 》》 ~ res:", res)
            setSessionStorage(User_Info, encryption(JSON.stringify(form)));
            if (!route_name) showTip(res.msg, res.code != 1 ? "error" : "success");
            if (res.code != 1) return;
            initRoute(res.data.route_list, route_name);
        },
    },
});
/**UserStore */
export function UserStore() {
    return useUser();
}
