import { RouteRecordRaw } from "vue-router";
export default [
	{
		path: "/",
		name: "root",
		component: () => import("@/layout/Container/index.vue"),
		children: [
			{
				path: "/test",
				component: () => import("@/components/test.vue"),
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
	},
	{
		path: "/qrcode",
		component: () => import("@/views/test/qrCode.vue"),
	},
] as RouteRecordRaw[];
