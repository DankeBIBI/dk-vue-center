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
        createProperty: {
            url: "property/createProperty",
            method: "POST",
            fn(_e: CreatePropertyInfoDto): res<any> {
                return "" as any
            }
        },
        getPropertyInfo: {
            url: "property/getPropertyInfo",
            method: "GET",
            fn(_e: any): res<CreatePropertyInfoDto> {
                return {

                } as any
            }
        },
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