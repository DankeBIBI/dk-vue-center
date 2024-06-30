import { RouteRecordRaw } from 'vue-router'
declare global {
    type routeListDto = RouteRecordRaw & { title?: string }
    /**全局接口返回对象 */
    interface res<T> {
        data: T,
        msg: string,
        code: 1 | 0,
    }
    interface count<T>{
        count:number,
        rows:T
    }
}
export { }