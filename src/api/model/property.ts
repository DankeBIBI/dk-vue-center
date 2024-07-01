import { connectStraw } from "strap-trousers"
import { config, pageOptions } from '../config'
import type { CreatePropertyInfoDto } from "../type/property.dto"
/**房源信息 */
export const property = connectStraw({
    config: {
        name: 'property',
        ...config,

    },
    action: {
        /**创建房源信息 */
        createProperty: {
            url: "property/createProperty",
            method: "POST",
            fn(_e: CreatePropertyInfoDto): res<any> {
                return "" as any
            }
        },
        /**更新房源信息 */
        updateProperty: {
            url: "property/updateProperty",
            method: "POST",
            fn(_e: CreatePropertyInfoDto): res<any> {
                return "" as any
            }
        },
        /**删除房源信息 */
        removeProperty: {
            url: "property/removeProperty",
            method: "GET",
            fn(_e: {
                id: any
            }): res<any> {
                return "" as any
            }
        },
        /**获取房源详情 */
        getPropertyInfo: {
            url: "property/getPropertyInfo",
            method: "GET",
            fn(_e: any): res<CreatePropertyInfoDto> {
                return {

                } as any
            }
        },
        /**获取所有房源 */
        getAllProperty: {
            url: "property/getAllProperty",
            method: "GET",
            fn(_e?: pageOptions): res<count<CreatePropertyInfoDto[]>> {
                return {

                } as any
            }
        },
    }
})