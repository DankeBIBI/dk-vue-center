import { showTip } from "@/utils";
import axios from "axios";

export type pageOptions = {
    page: number;
    limit: number;
}
export type responseData = {
    msg: string;
    code: 1 | 0;
    data: any;
}
export const rootUrl = import.meta.env.DEV
    // ? ""
    ? "http://127.0.0.1:8202/"
    : "http://139.9.180.250:8202/";
// export const rootUrl = 'https://api.dankebibi.cc/'
export const config = {
    rootUrl,
    data: {
        appid: 1,
    },
    responseData: {} as responseData,
    interceptors: {
        fail: (e) => {
            showTip(e.response.data.msg, "error");
        },
    },
    lib: axios,
}