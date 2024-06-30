export interface CreatePropertyInfoDto {
    /**房源的唯一标识符*/
    id: number;
    /**房源的名称，例如“风采雅苑”*/
    property_name: string;
    /**房源的房型，例如“4室2厅”*/
    layout: string;
    /**房源的总售价，例如“39万元”*/
    price: number;
    /**房源的建筑面积，例如“108.93平米”*/
    area: number;
    /**每平米的单价，例如“3580元/平米”*/
    unit_price: number;
    /**房源所在楼层及总楼层，例如“中楼层/共7层”*/
    floor: string;
    /**房源的朝向，例如“南”*/
    orientation: string;
    /**是否有电梯，值为“是”或“否”*/
    elevator: boolean;
    /**房源的权属，例如“商品房”*/
    ownership: string;
    /**房源的楼型，例如“塔楼”*/
    building_type: string;
    /**房源的类型，例如“住宅”*/
    property_type: string;
    /**房源的装修情况，例如“精装修”*/
    decoration: string;
    /**房源的挂牌日期，例如“2024-06-13”*/
    listing_date: Date;
    /**房源所在的小区名称，例如“风采雅苑 (白云-石井)”*/
    community: string;
    /**房源的联系人姓名，*/
    contact_person: string;
    /**联系人的联系方式，非必填*/
    contact_info?: string;
    /**其他备注信息，例如“净首付8万，月供见详情”，非必填*/
    remarks?: string;
    /**状态 */
    state:number;
}