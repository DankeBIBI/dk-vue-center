import { ElMessage } from "element-plus";

/**提示消息 */
export function showTip(
	message: any,
	type: "success" | "error" | "warning" | "danger" = "success"
) {
	let params: any = {
		message,
		type,
	};
	ElMessage(params);
}
/**设置sessionStorage */
export function setSessionStorage(name: string, value: string) {
	sessionStorage.setItem(name, value);
}
/**获取sessionStorage */
export function getSessionStorage(name: string): string {
	return String(sessionStorage.getItem(name));
}
/**删除sessionStorage */
export function removeSessionStorage(name: string) {
	return sessionStorage.removeItem(name);
}
