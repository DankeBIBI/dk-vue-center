import { api, responseData } from "@/api";
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
        async Login(form: any, route_name?: string): Promise<responseData> {
            return new Promise<responseData>(async (resolve, reject) => {
                try {
                    const res = await api.login(form);
                    setSessionStorage(User_Info, encryption(JSON.stringify(form)));
                    if (!route_name) showTip(res.msg, res.code != 1 ? "error" : "success");
                    if (res.code != 1) reject(res);
                    this.userInfo = res.data
                    await initRoute(res.data.route_list, route_name);
                    resolve(res)
                } catch (e) {
                    reject({
                        code: 0,
                        data: {},
                        msg: '请求失败'
                    } as responseData)
                }
            })

        },
    },
});
/**UserStore */
export function UserStore() {
    return useUser();
}
