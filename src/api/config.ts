import { showTip } from "@/utils";

export type pageOptions = {
    page: number;
    limit: number;
}
export const rootUrl = import.meta.env.DEV
    ? "http://localhost:8202/"
    : "https://api.dankebibi.cc/";
// export const rootUrl = 'https://api.dankebibi.cc/'
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