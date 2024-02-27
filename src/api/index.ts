import { connectStraw } from "strap-trousers";
import { config } from './config'
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

export * from './model/route'
export * from './model/mall'
export * from './config'
