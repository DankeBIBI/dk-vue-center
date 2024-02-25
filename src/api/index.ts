import { showTip } from "@/utils";
import { connectStraw } from "strap-trousers";
export const rootUrl = import.meta.env.DEV
    ? "http://127.0.0.1:8202/"
    : "http://139.9.180.250:8202/";
export const config = {
    rootUrl,
    data: {
        appid: 1,
    },
    responseData: {} as {
        msg: string;
        code: 1 | 0;
        data: any;
    },
    interceptors: {
        fail: (e) => {
            showTip(e.response.data.msg, "error");
        },
    },
}
export const api = connectStraw({
    config: {
        name: "api",
        ...config
    },
    action: {
        login: (e: { user: string; password: string | number }) => ({
            url: "user/login",
            method: "POST",
        }),
        uploadFile: () => ({
            url: "upload/uploadFile",
            method: "POST",
        }),
        createQrCode: () => ({
            url: "weChat/createQrCode",
            method: "POST",
        }),
    },
});
export const mall = connectStraw({
    config: {
        name:'mall',
        ...config
    },
    action:{
        goodsList: () => ({
            url: "/goods/getGoodsList",
            method: "POST",
        }),
    }
})
export const route = connectStraw({
    config: {
        name:'route',
        ...config
    },
    action:{
        routeList: () => ({
            url: "/route/list",
            method: "GET",
        }),
    }
})
