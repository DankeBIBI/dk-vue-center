import { connectStraw } from "strap-trousers";
import {config, pageOptions} from '../config' 
export const mall = connectStraw({
    config: {
        name: 'mall',
        ...config
    },
    action: {
        goodsList: (e?: pageOptions) => ({
            url: "/goods/getGoodsList",
            method: "POST",
        }),
    }
})