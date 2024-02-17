import { connectStraw } from "strap-trousers";
export const rootUrl = import.meta.env.DEV
	? "http://127.0.0.1:8202/"
	: "http://139.9.180.250:8202/";
export const api = connectStraw({
	config: {
		name: "api",
		rootUrl,
		data: {
			appid: 0,
		},
		responseData: {} as {
			msg: string;
			code: 1 | 0;
			data: any;
		},
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
