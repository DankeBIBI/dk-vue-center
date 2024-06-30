import { mall } from '@/api'
import { dkTableOptionsCallback, dkTableColumn, dkTableLoading, dkTablePagination, dkTableInit } from 'dk-vue3-components'
import { onMounted, reactive, ref } from 'vue'
export default () => {
    const tableData = ref([])
    const init = async (value?: dkTableInit) => {
        loading.loading = true
        const res = await mall.goodsList(value)
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
            label: '商品名称',
            prop: 'name',
            width: 300,
            tooltip: true
        },
        {
            label: '短名称',
            prop: 'mini_name',
            width: 300
        },
        {
            label: '价格',
            prop: 'price',
        },
        {
            label: '原价格',
            prop: 'source_price',
        },
        {
            label: '库存',
            prop: 'stock',
        },
        {
            label: '商品图',
            prop: 'pic',
            cellRander: ({ row }) => (

                <>
                    <el-image preview-teleported preview-src-list={[row.pic]} src={row.pic} style="width:60px;height:60px" />
                </>

            )
        },
        {
            label: '以出售数量',
            prop: 'sales',
        },
        {
            label: '分类',
            prop: 'sort',
        },
        {
            label: '状态',
            prop: 'state',
            fixed:'right',
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
            cellRander: ({ row }) => (
                <>
                    <el-button type="primary" link onClick={Setting(row)}>编辑</el-button>
                </>
            )
        }
    ]
    const Setting = (row) => {

    }
    return {
        tableColumns,
        tableData,
        loading,
        init,
        pagination
    } as dkTableOptionsCallback
} 