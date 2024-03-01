import { RouteRecordRaw } from 'vue-router'
declare global {
    type routeListDto = RouteRecordRaw & { title?: string }
}
export {}