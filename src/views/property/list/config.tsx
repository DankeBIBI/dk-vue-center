import { rootUrl, route } from '@/api'
import { property } from '@/api/model/property'
import { CreatePropertyInfoDto } from '@/api/type/property.dto'
import { dkTableColumn, dkTableLoading, dkTablePagination, dkTableInit, dkForm, dkDialogStore, dkFormOptions } from '@/components/dk-components'
import { addDkDialog, closeDkDialog, showModal, dkDialog } from '@/components'
import { PUBLIC_LOADING_SVG } from '@/config'
import { onMounted, reactive, ref } from 'vue'
import { DKID } from 'strap-trousers'
import { showTip } from '@/utils'
export default () => {
    const tableData = ref<CreatePropertyInfoDto[]>([])
    const init = async (value?: dkTableInit) => {
        loading.loading = true
        const res = await property.getAllProperty(value)
        setTimeout(() => {
            pagination.total = res.data.count
            tableData.value = res.data.rows
            loading.loading = false
        }, 600);
    }
    onMounted(() => {
        init()
    })
    const loading: dkTableLoading = reactive({
        loading: false,
        background: 'rgba(255, 255, 255, .5)',
        tip: '正在加载数据。。。',
        svg: PUBLIC_LOADING_SVG
    })
    const pagination: dkTablePagination = reactive({
        page: 1,
        limit: 10,
        total: 100,
        pageSize: [10, 25, 50, 100]
    })
    const tableColumns: dkTableColumn[] = [
        {
            label: 'ID',
            prop: 'id',
            width: 50
        },
        {
            label: '房源名称',
            prop: 'property_name',
            width: 300
        },
        {
            label: '房型',
            prop: 'layout',
            width: 100
        },
        {
            label: '总售价',
            prop: 'price',
            width: 150
        },
        {
            label: '建筑面积',
            prop: 'area',
            width: 150
        },
        {
            label: '每平米单价',
            prop: 'unit_price',
            width: 150
        },
        {
            label: '楼层',
            prop: 'floor',
            width: 150
        },
        {
            label: '朝向',
            prop: 'orientation',
            width: 100
        },
        {
            label: '是否有电梯',
            prop: 'elevator',
            width: 100,
        },
        {
            label: '权属',
            prop: 'ownership',
            width: 100
        },
        {
            label: '楼型',
            prop: 'building_type',
            width: 100
        },
        {
            label: '类型',
            prop: 'property_type',
            width: 100
        },
        {
            label: '装修情况',
            prop: 'decoration',
            width: 150
        },
        {
            label: '挂牌日期',
            prop: 'listing_date',
            width: 150
        },
        {
            label: '小区名称',
            prop: 'community',
            width: 200
        },
        {
            label: '联系人姓名',
            prop: 'contact_person',
            width: 150
        },
        {
            label: '联系方式',
            prop: 'contact_info',
            width: 150
        },
        {
            label: '备注',
            prop: 'remarks',
            width: 300,
            tooltip: true
        },
        {
            label: '状态',
            prop: 'state',
            fixed: 'right',
            width: 130,
            cellRander: ({ row }) => (
                <>
                    <el-button
                        size="small"
                        plain
                        type={row.state == 1 ? 'primary' : 'danger'}
                    >
                        {row.state == 1 ? '销售中' : '已下架'}
                    </el-button>
                </>
            )
        },
        {
            label: '操作',
            prop: 'action',
            fixed: "right",
            width: 130,
            cellRander: ({ row }) => (
                <>
                    <div class="fx_">

                        <el-button type="primary" link onClick={() => edit(row)}>编辑</el-button>
                        <el-button type="danger" link onClick={() => deleteRow(row)}>删除</el-button>
                    </div>
                </>
            )
        }
    ];
    function add() {
        setting('add')
    }
    function edit(row) {
        setting('edit', row)
    }
    function deleteRow(row) {
        showModal({
            title: '提示',
            content: '是否删除' + row.property_name,
            confirm: async (e) => {
                const res = await property.removeProperty({ id: row.id })
                showTip(res.msg, res.code == 1 ? 'success' : 'error',)
                init()
                e.close()
            }
        })

    }
    async function setting(type: "add" | "edit", row?: any) {
        console.log("🚀 -- 》》 ~ type:", type)
        const dkRef = ref()
        try {
            addDkDialog({
                title: '测试',
                ref: dkRef,
                content: '测试',
                type: 'form',
                style: {
                    borderRadius: 20,
                    width: 800,
                },
                props: {
                    row: 2,
                    options: [
                        {
                            prop: 'property_name',
                            type: 'input',
                            title: '房源名称',
                            content: row?.property_name ?? '',
                            required: true
                        },
                        {
                            prop: 'layout',
                            type: 'input',
                            title: '房型',
                            content: row?.layout ?? '',
                            required: true
                        },
                        {
                            prop: 'price',
                            type: 'input',
                            title: '总售价',
                            content: row?.price ?? '',
                            required: true
                        },
                        {
                            prop: 'area',
                            type: 'input',
                            title: '建筑面积',
                            content: row?.area ?? '',
                            required: true
                        },
                        {
                            prop: 'unit_price',
                            type: 'input',
                            title: '每平米单价',
                            content: row?.unit_price ?? '',
                            required: true
                        },
                        {
                            prop: 'floor',
                            type: 'input',
                            title: '楼层',
                            content: row?.floor ?? '',
                        },
                        {
                            prop: 'orientation',
                            type: 'input',
                            title: '朝向',
                            content: row?.orientation ?? '',
                        },
                        {
                            prop: 'elevator',
                            type: 'select',
                            title: '是否有电梯',
                            content: row?.elevator ?? 1,
                            selectOptions: [
                                { label: '是', value: 1 },
                                { label: '否', value: 0 },
                            ],
                        },
                        {
                            prop: 'ownership',
                            type: 'input',
                            title: '权属',
                            content: row?.ownership ?? '',
                        },
                        {
                            prop: 'building_type',
                            type: 'input',
                            title: '楼型',
                            content: row?.building_type ?? '',
                        },
                        {
                            prop: 'property_type',
                            type: 'input',
                            title: '房源类型',
                            content: row?.property_type ?? '',
                        },
                        {
                            prop: 'decoration',
                            type: 'input',
                            title: '装修情况',
                            content: row?.decoration ?? '',
                        },
                        {
                            prop: 'listing_date',
                            type: 'date',
                            title: '挂牌日期',
                            content: row?.listing_date ?? '',
                        },
                        {
                            prop: 'community',
                            type: 'input',
                            title: '小区名称',
                            content: row?.community ?? '',
                        },
                        {
                            prop: 'contact_person',
                            type: 'input',
                            title: '联系人姓名',
                            content: row?.contact_person ?? '',
                        },
                        {
                            prop: 'contact_info',
                            type: 'input',
                            title: '联系方式',
                            content: row?.contact_info ?? '',
                        },
                        {
                            prop: 'remarks',
                            type: 'input',
                            title: '备注信息',
                            content: row?.remarks ?? '',
                        },
                        {
                            prop: 'state',
                            type: 'radio',
                            title: '状态',
                            content: row?.state ?? 1,
                            selectOptions: [
                                {
                                    label: '上架',
                                    value: 1,
                                },
                                {
                                    label: '下架',
                                    value: 0,
                                },
                            ]
                        },
                        {
                            prop: 'pic',
                            type: 'upload',
                            title: '图片',
                            content: row?.pic ?? [],
                            style: 'flex:1;',
                            upload: {
                                file_list: row?.pic ? row.pic.map(item => {
                                    return {
                                        url: item,
                                        uid: Math.random(),
                                    }
                                }) : [],
                                url: rootUrl + 'upload/uploadFile',
                                response(e: any) {
                                    return e.data
                                },
                                limit: 9
                            }
                        },
                    ] as dkFormOptions
                },
                async confirm(e) {
                    const params = await e.getFormParams()
                    if (params) {
                        if (row?.id) params.id = row.id
                        const res = type == 'add' ? await property.createProperty(params) : await property.updateProperty(params)
                        showTip(res.msg, res.code == 1 ? 'success' : 'error',)
                        if (res.code == 1) {
                            e.close()
                            init()
                        }
                    }
                },
            })
        } catch (error) {
            console.log("🚀 -- 》》 ~ error:", error)
        }

    }
    return {
        tableColumns,
        tableData,
        init,
        loading,
        pagination,
        add
    }
} 