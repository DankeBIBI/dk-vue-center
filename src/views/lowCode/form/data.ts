import { dkItemOptions } from "@/components";
import { ref } from "vue";

export const formConfig = ref([
    {
        name: "input",
        id: "1",
        title: "输入框",
        content: "",
        type: "input",
        prop: 'input',
    },
    {
        name: "radio",
        prop: "radio",
        id: "2",
        title: "单选",
        content: "",
        type: "radio",
        selectOptions: [
            {
                label: "单选1",
                value: 1,
            },
            {
                label: "单选2",
                value: 2,
            },
        ],
    },
    {
        name: "checkbox",
        prop: "checkbox",
        id: "4",
        title: "多选",
        content: "",
        type: "checkbox",
        selectOptions: [
            {
                label: "多选1",
                value: 1,
            },
            {
                label: "多选2",
                value: 2,
            },
        ],
    },
    {
        name: "select",
        prop: "select",
        id: "3",
        title: "下拉选择",
        content: "",
        type: "select",
        selectOptions: [
            {
                label: "下拉选择1",
                value: 1,
            },
            {
                label: "下拉选择2",
                value: 2,
            },
        ],
    },
    {
        name: "date",
        prop: "date",
        id: "5",
        title: "日期选择",
        content: "",
        type: "date",
        placeholder: "请选择日期"
    },
    {
        name: "month",
        prop: "month",
        id: "6",
        title: "月份选择",
        content: "",
        type: "month",
        placeholder: "请选择月份"
    },
    {
        name: "year",
        prop: "year",
        id: "7",
        title: "年份选择",
        content: "",
        type: "year",
        placeholder: "请选择年份"
    }
] as dkItemOptions[]);

export function ItemConversionOption(item: dkItemOptions) {
    let list = [] as dkItemOptions[]
    let whileItem = [
        'title',
        // "prop",
        'placeholder',
        'selectOptions'
    ]
    /**dkForm选项映射 */
    const dkItemOptionMap = {
        prop: "字段",
        title: "标题",
        content: "默认内容",
        required: "是否必填",
        type: "dk表单项类型",
        selectOptions: "选项",
        placeholder: "占位符",
        options: "可选配置",
        trigger: "触发器",
        upload: "上传配置",
        size: "尺寸",
    }
    for (const key in item) {
        // 过滤掉不需要的属性
        if (!whileItem.includes(key)) continue
        list.push({
            ...item,
            changeBindValueOfKey: (e) => { item[key] = e },
            prop: key,
            title: dkItemOptionMap[key],
            content: item[key],
            type: "input",
            placeholder: "",
            options: {
                ...item.options,
                disabled: false
            },
        })
    }
    return list
}