import { property } from '@/api/model/property'
import { CreatePropertyInfoDto } from '@/api/type/property.dto'
import { dkTableColumn, dkTableInit, dkTableLoading, dkTablePagination } from '@/components'
export default () => {
    const tableData = ref<CreatePropertyInfoDto[]>([])
    const init = async (value?: dkTableInit) => {
        loading.loading = true
        const res = await property.getAllProperty(value)
        setTimeout(() => {
            tableData.value = res.data.rows
            pagination.total = res.data.count
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
        svg: {
            position: "-10, -10, 50, 50",
            src: `
            <path class="path" d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
            " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
            `
        }
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
            width:130,
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
            width:130,
            cellRander: ({ row }) => (
                <>
                    <el-button type="primary" link onClick={Setting(row)}>编辑</el-button>
                </>
            )
        }
    ];
    const Setting = (row) => {

    }
    return {
        tableColumns,
        tableData,
        loading,
        init,
        pagination
    }
} 